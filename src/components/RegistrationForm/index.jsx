import React from 'react'
import { useNavigate } from "react-router-dom";

// validation
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// mui
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import _ from "../../@lodash";

// style 
import './index.scss'

const schema = yup.object().shape({
	actualAddress: yup.string().required("Enter the information"),
	FIN: yup.string().required("Enter the information"),
    serial: yup.string().required("Enter the information"),
    code:yup.string().required("Enter the information"),
    name: yup.string().required("Enter the information"),
    surname:yup.string().required("Enter the information"),
    fatherName: yup.string().required("Enter the information"),
    registrationAddress:yup.string().required("Enter the information"),
    birthDate:yup.date().required("Enter Information"),
    mobile: yup
    .string()
    .required("Enter Information")
    .matches(
      /^((\+)?994(\s)?)?(5[015]|7[07]|99|10|60)(\s)?([0-9]{3})(\s)?([0-9]{2})(\s)?([0-9]{2})$/,
      "Enter the number exactly !"
    ),
    phone: yup
    .string()
    .required("Enter Information")
    .matches(
      /^((\+)?994(\s)?)?(12)(\s)?([0-9]{3})(\s)?([0-9]{2})(\s)?([0-9]{2})$/,
      "Enter the number exactly!"
    ),
    
});

function RegistrationForm({authenticate}) {
    const navigate=useNavigate();
    const user={
        actualAddress:"",
        FIN:"",
        serial:"",
        code:"",
        name:"",
        surname:'',
        fatherName:"",
        registrationAddress:"",
        birthDate:"",
        mobile:"",
        phone:""
    }

    // validation
    const { control, formState, handleSubmit } =
    useForm({
      mode: "onChange",
	  defaultValues:user,
      resolver: yupResolver(schema),
    });
	const { isValid, dirtyFields, errors } = formState;
   


    const handleSubmitRegister=(formData)=>{
        // console.log(formData)
        localStorage.setItem("user", JSON.stringify(formData))
        authenticate();
        navigate("home");
    }


  return (
    <div className="registration-form">
        <form name="registrationForm"
        noValidate
        onSubmit={handleSubmit(handleSubmitRegister)}
        >
        
        
        <Box className="identification">
            <Controller
                name="FIN"
                id="standard-start-adornment"
                control={control}
                className="input fin"
                render={({field})=>(
                    <TextField
                        {...field}
                        label="FIN"
                        type="text"
                        error={!!errors.FIN}
                        helperText={errors?.FIN?.message}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        margin="dense" 
                    />
                )}
            />
            <Box className="serial-info">
                <Controller
                    name="serial"
                    id="standard-start-adornment"
                    control={control}
                    className="input serial"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Serial"
                            type="text"
                            error={!!errors.serial}
                            helperText={errors?.serial?.message}
                            variant="outlined"
                            size="small"
                            required
                            margin="dense"
                        />
                    )}
                />
                <Controller
                    name="code"
                    id="standard-start-adornment"
                    control={control}
                    className="input code"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Number"
                            type="text"
                            error={!!errors.code}
                            helperText={errors?.code?.message}
                            variant="outlined"
                            size="small"
                            required
                            margin="dense" 
                        />
                    )}
                />
            </Box>
            

        </Box>
        <Box className="name-info">
            <Controller
                name="name"
                id="standard-start-adornment"
                control={control}
                className="input"
                render={({field})=>(
                    <TextField
                        {...field}
                        label="Name"
                        type="text"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        margin="dense" 
                    />
                )}
            />
            <Controller
                name="surname"
                id="standard-start-adornment"
                control={control}
                className="input"
                render={({field})=>(
                    <TextField
                        {...field}
                        label="Surname"
                        type="text"
                        error={!!errors.surname}
                        helperText={errors?.surname?.message}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        margin="dense" 
                    />
                )}
            />
            <Controller
                name="fatherName"
                id="standard-start-adornment"
                control={control}
                className="input"
                render={({field})=>(
                    <TextField
                        {...field}
                        label="Father's Name"
                        type="text"
                        error={!!errors.fatherName}
                        helperText={errors?.fatherName?.message}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        margin="dense" 
                    />
                )}
            />

        </Box>
        <Box className="addresses">
            <Controller
                name="actualAddress"
                id="standard-start-adornment"
                control={control}
                className="input"
                render={({field})=>(
                    <TextField
                        {...field}
                        label="Actual Address"
                        type="text"
                        error={!!errors.actualAddress}
                        helperText={errors?.actualAddress?.message}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        margin="dense" 
                    />
                )}
            />
            <Controller
                name="registrationAddress"
                id="standard-start-adornment"
                control={control}
                className="input"
                render={({field})=>(
                    <TextField
                        {...field}
                        label="Registration Address"
                        type="text"
                        error={!!errors.registrationAddress}
                        helperText={errors?.registrationAddress?.message}
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                        margin="dense" 
                    />
                )}
            />
        </Box>
        <Box className="other-information">
            <Controller
                name="birthDate"
                id="standard-start-adornment"
                control={control}
                className="input"
                render={({field})=>(
                    <TextField
                        {...field}
                        label="Birth Date"
                        type="date"
                        error={!!errors.birthDate}
                        helperText={errors?.birthDate?.message}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        margin="dense" 
                    />
                )}
            />
            <Controller
                name="mobile"
                id="standard-start-adornment"
                control={control}
                className="input"
                render={({field})=>(
                    <TextField
                        {...field}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">+994</InputAdornment>
                            ),
                        }}
                        label="Mobile phone"
                        type="text"
                        error={!!errors.mobile}
                        helperText={errors?.mobile?.message}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        margin="dense" 
                        onInput={(e) => {
                            e.target.value = Math.max(0, e.target.value)
                            .toString()
                            .slice(0, 9);
                        }}
                    />
                )}
            />
            <Controller
                name="phone"
                id="standard-start-adornment"
                control={control}
                className="input"
                render={({field})=>(
                    <TextField
                        {...field}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">+994</InputAdornment>
                            ),
                        }}
                        label="Home phone"
                        type="text"
                        error={!!errors.phone}
                        helperText={errors?.phone?.message}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        margin="dense" 
                        onInput={(e) => {
                            // eslint-disable-next-line radix
                            e.target.value = Math.max(0, e.target.value)
                            .toString()
                            .slice(0, 9);
                        }}
                    />
                )}
            />
        </Box>
        
        <Button
            variant="contained"
            color="success"
            aria-label="Register"
            disabled={_.isEmpty(dirtyFields) || !isValid}
            type="submit"
            fullWidth
            size="large"
        >
            Register
        </Button>
        

        </form>


    </div>
  )
}

export default RegistrationForm