import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import CalculateLoan from '../CalculateLoan';
import _ from "../../@lodash"
// validation
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// mui
import { Box,FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

import "./index.scss"

const schema = yup.object().shape({
	businessAddress: yup.string().required("Enter the information"),
	sector: yup.string().required("Enter the information"),
    salary: yup.number("Enter number format!").required("Enter the information"),
    workExperience_month:yup.number("Enter number format!").required("Enter the information"),
    workExperience_year: yup.number("Enter number format!").required("Enter the information"),
    region:yup.string().required("Enter the information"),    
    currency: yup.string().required("Enter the information"),
	purpose: yup.string().required("Enter the information"),
    amount: yup.number("Enter number format!").required("Enter the information"),
    duration:yup.number("Enter number format!").required("Enter the information"),
    percent: yup.number("Enter number format!").required("Enter the information"),  
});
function NewLoanForm() {
    const navigate=useNavigate();
    const NewLoan={
        sector:"",
        salary:0.0,
        workExperience_month:0,
        workExperience_year:0,
        region:"",
        businessAddress:"",
        currency:"AZN",
        purpose:"",
        amount:0,
        duration:0,
        percent:0.0,
    }
    const [selectedOption, setSelectedOption] = useState("");
    const [display, setDisplay]=useState("none")
    const [data, setData]=useState({
        amount:0,
        duration:0,
        percent:0,
    });

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const handleCalculate=()=>{
        data.amount=parseFloat(data.amount)
        data.duration=parseFloat(data.duration)
        data.percent=parseFloat(data.percent)
        setData(data)
        setDisplay("flex")
        console.log(data)
    }
    const handleSubmitNewLoan=(data)=>{
        localStorage.setItem("loanInformation", JSON.stringify(data))
        navigate("/summary");
      }


    // validation
    const { control, formState,handleSubmit} =
    useForm({
      mode: "onChange",
	  defaultValues:NewLoan,
      resolver: yupResolver(schema),
    });
	const { isValid, dirtyFields, errors } = formState;
  return (
    <div className='new-loan'>
        <form
            name="newloan-form"
           noValidate
           onSubmit={handleSubmit(handleSubmitNewLoan)}
           className="new-loan-form"
        >
        <Box className='form-content'>
            <Box className="customer-info"> 
                <Controller
                    name="sector"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Work Sector"
                            type="text"
                            error={!!errors.sector}
                            helperText={errors?.sector?.message}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                        />
                    )}
                />  
                <Controller
                    name="salary"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Monthly income"
                            type="number"
                            error={!!errors.salary}
                            helperText={errors?.salary?.message}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                        />
                    )}
                /> 
                <Controller
                    name="workExperience_month"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Work Experience(month)"
                            type="number"
                            error={!!errors.workExperience_month}
                            helperText={errors?.workExperience_month?.message}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                        />
                    )}
                />  
                <Controller
                    name="workExperience_year"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Work Experience(year)"
                            type="number"
                            error={!!errors.workExperience_year}
                            helperText={errors?.workExperience_year?.message}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                        />
                    )}
                />
                <Controller
                    name="region"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Region"
                            type="text"
                            error={!!errors.region}
                            helperText={errors?.region?.message}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                        />
                    )}
                />  
                <Controller
                    name="businessAddress"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Business Address"
                            type="text"
                            error={!!errors.businessAddress}
                            helperText={errors?.businessAddress?.message}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                        />
                    )}
                />
            </Box>
            <Box className="loan-content">
                <Controller
                    name="currency"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="currency">Currency</InputLabel>
                        <Select
                            {...field}
                            id="currency"
                            name="currency"
                            value={selectedOption}
                            onChange={handleOptionChange}                            
                            error={!!errors.currency}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                        >
                            <MenuItem value="AZN">AZN</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="EUR">EUR</MenuItem>
                        </Select>
                        </FormControl>
                    )}
                />  
                <Controller
                    name="purpose"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Purpose of business loan"
                            type="text"
                            error={!!errors.purpose}
                            helperText={errors?.purpose?.message}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                        />
                    )}
                /> 
                <Controller
                    name="amount"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Amount"
                            type="number"
                            error={!!errors.amount}
                            helperText={errors?.amount?.message}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                            onChange={(e) => {
                                setData({ ...data, amount: e.target.value });
                                field.onChange(e); 
                            }}
                        />
                    )}
                />  
                <Controller
                    name="duration"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Duration(month)"
                            type="number"
                            error={!!errors.duration}
                            helperText={errors?.duration?.message}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                            onChange={(e) => {
                                setData({ ...data, duration: e.target.value });
                                field.onChange(e); 
                            }}
                        />
                    )}
                />
                <Controller
                    name="percent"
                    id="standard-start-adornment"
                    control={control}
                    className="input"
                    render={({field})=>(
                        <TextField
                            {...field}
                            label="Percent"
                            type="number"
                            error={!!errors.percent}
                            helperText={errors?.percent?.message}
                            variant="outlined"
                            size="small"
                            required
                            fullWidth
                            margin="dense" 
                            onChange={(e) => {
                                setData({ ...data, percent: e.target.value });
                                field.onChange(e); 
                            }}
                        />
                    )}
                /> 
                <Button
                variant="contained"
                color="success"
                aria-label="Calculate"
                type="button"
                fullWidth
                size="large"
                className="btn"
                margin="dense"
                onClick={handleCalculate}
                >
                    Calculate
                </Button>
            </Box>
            <Box className="calculate-table" style={{display:`${display}`}}>
                <CalculateLoan  display={display} data={data} style={{width:"100%"}}/> 
            </Box>
        </Box>
        <Box className="submit-btn">
            <Button
                variant="contained"
                color="success"
                aria-label="Calculate"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                type="submit"
                sx={{width:"40%"}}
                size="large"
            >
                Summary
            </Button>  
        </Box>
        </form>
    </div>
  )
}

export default NewLoanForm