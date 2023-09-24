import React from 'react'
import { format } from 'date-fns';
import { Box,TextField } from '@mui/material';


import "./index.scss"

function UserInformation() {
     const user=JSON.parse(localStorage.getItem("user"));
     const birthDate=user.birthDate?new Date(user.birthDate) : null
    //  console.log(birthDate)
    //  console.log("user", user)
  return (
    <div className="user-information">        
        <TextField
            label="FIN"
            variant="outlined"
            size="small"
            value={user.FIN}
            fullWidth
            margin="dense" 
            InputProps={{
            readOnly: true,
          }}
        />
        <Box className="serial-info">
            <TextField
                label="Serial"
                variant="outlined"
                size="small"
                margin="dense"
                value={user.serial}
                sx={{width:"50%"}}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                label="Number"
                variant="outlined"
                size="small"
                margin="dense" 
                value={user.code}
                sx={{width:"50%"}}
                InputProps={{
                    readOnly: true,
                }}
            />
        </Box>
        <TextField
            label="Name"
            variant="outlined"
            size="small"
            fullWidth
            margin="dense" 
            value={user.name}
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField
            label="Surname"
            variant="outlined"
            size="small"
            fullWidth
            margin="dense" 
            value={user.surname}
                InputProps={{
                    readOnly: true,
                }}
        />
        <TextField
            label="Father's Name"
            variant="outlined"
            size="small"
            fullWidth
            margin="dense" 
            value={user.fatherName}
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField
            label="Actual Address"
            variant="outlined"
            size="small"
            fullWidth
            margin="dense" 
            value={user.actualAddress}
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField
            label="Registration Address"
            variant="outlined"
            size="small"
            fullWidth
            margin="dense"
            value={user.registrationAddress}
            InputProps={{
                readOnly: true,
            }} 
        />
        <TextField
            label="Birth Date"
            type="date"
            variant="outlined"
            size="small"
            fullWidth
            margin="dense" 
            value={birthDate ? format(birthDate, 'yyyy-MM-dd') : ''}
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField
            label="Mobile phone"
            variant="outlined"
            size="small"
            fullWidth
            margin="dense" 
            value={`+994 ${user.mobile}`}
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField
            label="Home phone"
            variant="outlined"
            size="small"
            fullWidth
            margin="dense"
            value={`+994 ${user.phone}`}
            InputProps={{
                readOnly: true,
            }}
        />
        
        

        </div>
  )
}

export default UserInformation