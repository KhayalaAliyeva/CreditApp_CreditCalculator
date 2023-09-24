import React,{useState} from 'react'
// validation
import { Controller,useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// mui
import {FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import _ from "../../@lodash"
import CalculateLoan from '../CalculateLoan';

import './index.scss'

const schema = yup.object().shape({
	currency: yup.string().required("Enter the information"),
	purpose: yup.string().required("Enter the information"),
    amount: yup.number("Enter number format!").required("Enter the information"),
    duration:yup.number("Enter number format!").required("Enter the information"),
    percent: yup.number("Enter number format!").required("Enter the information"),    
});

function LoanInfo(  ) {
  const loanInfo={
        currency:"AZN",
        purpose:"",
        amount:0,
        duration:0,
        percent:0.0,
    }
    const [selectedOption, setSelectedOption] = useState("");
    const [display, setDisplay]=useState("none")
    const [data, setData]=useState(loanInfo);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmitLoanInfo=(data)=>{
    setData(data)
    setDisplay("block")
  }
  
    // validation
    const { control, formState, handleSubmit } =
    useForm({
        mode:"onChange",
        defaultValues:loanInfo,
        resolver:yupResolver(schema),
    });
    const { isValid, dirtyFields, errors } = formState;
    return (
        <div className="loan-info"> 
            <form
                name="loanInfo-form"
                noValidate
                onSubmit={handleSubmit(handleSubmitLoanInfo)}
                className="loan-form"
            >
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
                         />
                     )}
                 /> 
                 <Button
                    variant="contained"
                    color="success"
                    aria-label="Calculate"
                    disabled={_.isEmpty(dirtyFields) || !isValid}
                    type="submit"
                    fullWidth
                    size="large"
                >
                    Calculate
                </Button>      
            </form>   
            <CalculateLoan display={display} data={data} style={{width:"40%"}}/> 
                   
        </div>
      )
}

export default LoanInfo