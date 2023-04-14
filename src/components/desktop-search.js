import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

function DesktopSearch (){
        return (
        
            <div className='search-header'>   
                <div className='leftTexField'>
                <TextField
                id="outlined-helperText"
                label="Search for a biller"
                style={{width:'210px', backgroundColor:'white'}}
                />
                </div>
                <div className='leftTexField'>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="All"
                    style={{width:'210px', backgroundColor:'white'}}
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                </div>
            </div>                 
        );
    }

export default DesktopSearch;