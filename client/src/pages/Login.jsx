import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useFileHandler, useInputValidation } from '6pp';
import { usernameValidator } from '../utils/validators';
import styled from '@emotion/styled';
function Login() {
    const [islogin, setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin((prev) => !prev);

    const name = useInputValidation("",);
    const bio = useInputValidation("",);
    const username = useInputValidation("", usernameValidator);
    const password = useInputValidation("");

    const avatar = useFileHandler("single");

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleSignUp = (e) => {
        e.preventDefault();
    }

    return (
       <div 
          style={{
            backgroundImage:"linear-gradient(rgba(255,225,209),rgba(249,159,159))",
         }}
       >
        <Container component={"main"} maxWidth="xs" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                {

                    islogin ? (
                        <>
                            <Typography variant='h5'>Login</Typography>
                            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>

                                <TextField required fullWidth label="Username" value={username.value} onChange={username.changeHandler} margin='normal' variant='outlined' />

                                <TextField required fullWidth label="Password" type='password' value={password.value} onChange={password.changeHandler} margin='normal' variant='outlined' />

                                <Button sx={{ marginTop: "1rem" }} variant='contained' color='primary' type='submit' fullWidth>
                                    Login
                                </Button>

                                <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

                                <Button variant='text' onClick={toggleLogin} fullWidth>

                                    Sign Up Instead
                                </Button>
                            </form>
                        </>
                    ) : (
                        <>
                            <Typography variant='h5'>Sign Up</Typography>
                            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignUp}>

                                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                    <Avatar sx={{
                                        width: "10rem",
                                        height: "10rem",
                                        objectFit: "contain"
                                    }}
                                        src={avatar.preview}
                                    />
                                    <IconButton sx={{
                                        position: "absolute",
                                        bottom: "0",
                                        right: "0",
                                        color: "white",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        ":hover": {
                                            bgcolor: "rgba(0,0,0,0.7)",
                                        },
                                    }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAltIcon />
                                            <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                                        </>
                                    </IconButton>
                                </Stack>
                                {avatar.error && (
                                    <Typography m={"1rem auto"} width={"fit-content"} display={"block"} color="error" variant='caption'>
                                        {avatar.error}
                                    </Typography>
                                )}

                                <TextField required fullWidth label="name" margin='normal' value={name.value} onChange={name.changeHandler} variant='outlined' />

                                <TextField required fullWidth label="Bio" margin='normal' value={bio.value} onChange={bio.changeHandler} variant='outlined' />

                                <TextField required fullWidth label="Username" margin='normal' value={username.value} onChange={username.changeHandler} variant='outlined' />

                                {
                                    username.error && (
                                        <Typography color="error" variant='caption'>
                                            {username.error}
                                        </Typography>
                                    )

                                }


                                <TextField required fullWidth label="Password" type='password' value={password.value} onChange={password.changeHandler} margin='normal' variant='outlined' />


                                <Button sx={{ marginTop: "1rem" }} variant='contained' color='primary' type='submit' fullWidth>
                                    Sign Up
                                </Button>

                                <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

                                <Button variant='text' onClick={toggleLogin} fullWidth>

                                    Login Instead
                                </Button>
                            </form>
                        </>
                    )
                }


            </Paper>
        </Container>
        
      </div>
    );

};

export default Login
