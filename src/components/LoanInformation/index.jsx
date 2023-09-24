import { Box,TextField } from '@mui/material'
import React from 'react'
import './index.scss'
function LoanInformation() {
  const loan=JSON.parse(localStorage.getItem("loanInformation"))
  return (
    <div className="loan-information">
    <TextField 
        label="Work Sector"
        variant="outlined"
        size="small"
        value={loan.sector}
        fullWidth
        margin="dense" 
        InputProps={{
            readOnly: true,
        }}
    />
    <Box className="flex">
        <TextField 
            label="Salary"
            variant="outlined"
            size="small"
            value={loan.salary}
            sx={{width:"33%"}}
            margin="dense" 
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField 
            label="Work Experience(Month)"
            variant="outlined"
            size="small"
            value={loan.workExperience_month}
            sx={{width:"33%"}}
            margin="dense" 
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField 
            label="Work Experience(Year)"
            variant="outlined"
            size="small"
            value={loan.workExperience_year}
            sx={{width:"33%"}}
            margin="dense" 
            InputProps={{
                readOnly: true,
            }}
        />
    </Box>
    <TextField 
        label="Region"
        variant="outlined"
        size="small"
        value={loan.region}
        fullWidth
        margin="dense" 
        InputProps={{
            readOnly: true,
        }}
    />
    <TextField 
        label="Business Address"
        variant="outlined"
        size="small"
        value={loan.businessAddress}
        fullWidth
        margin="dense" 
        InputProps={{
            readOnly: true,
        }}
    />
    <TextField 
        label="Purpose"
        variant="outlined"
        size="small"
        value={loan.purpose}
        fullWidth
        margin="dense" 
        InputProps={{
            readOnly: true,
        }}
    />
    <Box className="flex">
        <TextField 
            label="Currency"
            variant="outlined"
            size="small"
            value={loan.currency}
            sx={{width:"50%"}}
            margin="dense" 
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField 
            label="Amount"
            variant="outlined"
            size="small"
            value={loan.amount}
            sx={{width:"50%"}}
            margin="dense" 
            InputProps={{
                readOnly: true,
            }}
        />
    </Box>
    <Box className="flex">
        <TextField 
            label="Duration"
            variant="outlined"
            size="small"
            value={loan.duration}
            sx={{width:"50%"}}
            margin="dense" 
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField 
            label="Percent"
            variant="outlined"
            size="small"
            value={loan.percent}
            sx={{width:"50%"}}
            margin="dense" 
            InputProps={{
                readOnly: true,
            }}
        />
    </Box>


    </div>
  )
}

export default LoanInformation