import React from "react";
import { Button, TextField, Box, Card, CardContent, Typography } from "@mui/material";
import Center from "./Center";
import useForm from "../hooks/useForm"; 

const getFreshModelObject = () => ({
    name: '',
    email: ''
})

function Login() {
    const{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModelObject)

    const Login = (e) => {
        e.preventDefault();
        if (validate())
            console.log(values);
    }

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.name = values.name != "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }

  return (
    <Center>
      <Card sx={{ width: 400 }}>
        <CardContent sx={{textAlign:"center"}}>
            <Typography variant="h3" sx={{my:3}}>
                Quiz App</Typography>
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "90%",
              },
            }}
          >
            <form noValidate autoComplete="off" onSubmit={Login}>
              <TextField label="Email" name="email" variant="outlined" value={values.email} onChange={handleInputChange} {...(errors.email && { error: true, helperText: errors.email })}/>
              <TextField label="Name" name="name" variant="outlined"  value={values.name} onChange={handleInputChange} {...(errors.email && { error: true, helperText: errors.name })}/>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ width: "90%" }}
              >
                Start
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  );
}

export default Login;
