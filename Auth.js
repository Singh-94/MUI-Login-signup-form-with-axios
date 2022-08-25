import { Button, Paper, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'

import React, { useState } from 'react'
import axios from 'axios'

const Auth = () => {
    const datahandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/posts",{name,email,password}).then((response)=>{console.log(response);
    alert("Submitted..!!")})
    }
    
    
    const [issignin, setIssignin]= useState(true)
    const [name,setName]=useState(null)
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
   
    console.log(issignin)
    const paperstyle={
        padding:"35px",
        borderRadius:"5px",
        
    }
  return (
    <div>
      
      <Box width={500} height={600} marginTop={15} marginLeft={50} justifyContent="center" display={"flex"} flexDirection={"column"}>
      <Paper elevation={15} style={paperstyle} >
      <Typography variant='h2' align='center' padding={3}>{issignin?"SignUp":"Login"}</Typography>
      <Stack spacing={3}>

      {issignin && <TextField value={name} onChange={(e)=>{setName(e.target.value)}} name='name'  type={"name"} variant={"standard"} placeholder={"Enter Full Name"} label="Name"></TextField>}
      <TextField value={password} onChange={(e)=>{setPassword(e.target.value)}}   name='password' type={"password"} variant={"standard"} placeholder={"Enter Password"} label="Password"></TextField>
      <TextField  value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' type={"email"} variant={"standard"} placeholder={"Enter Email"} label="Email-Id"></TextField>
      <Button variant='contained' color='warning' onClick={datahandler}>{issignin?"SignUp":"Login"}</Button>
      <Button variant='text' color='warning' onClick={()=>{setIssignin(!issignin)}}> {issignin?"Login":"SignUp"}</Button>
      </Stack>
      </Paper>
      </Box>
      
    </div>
  )
}

export default Auth
