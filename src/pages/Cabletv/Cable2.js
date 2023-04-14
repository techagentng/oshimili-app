import React from 'react';
import './Cabletv.css'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Search from '../../components/searchComponent';
import Togglebtn from '../../components/togglecomp';
import { Button } from '@mui/material';
import boxoffice from '../../img/dsbox.png'

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

const Cable2 = () => {
    return (
        <>
            {/* <div className='search-space'>
                <Search/>
            </div> */}
            <div className='cabletv-cont'>
                <div className='cabletv-left'>
                    <div className='recharge'>
                        <div className='dstv'>
                           <img src={boxoffice} alt="dstv logo"/>
                        </div>
                        <div className='input-box1'>
                        <TextField 
                        id="outlined-basic" 
                        label="Email or Mobile Number" 
                        variant="outlined"
                        style={{width:'90%'}}
                         />
                        </div>
                        <div className='input-box1'>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="DSTV SmartCard Number"
                                style={{width:'90%', marginTop:'0px'}}
                                >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className='input-box2'>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select an option"
                                style={{width:'90%', marginTop:'5px'}}
                                >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <Button className='cabletvBtn' variant='contained'>Confirm purchase</Button>
                    </div>
                </div>
                <div className='cabletv-right'>
                    <div className="cable-rightTop">
                        <h4>Email or Mobile Number</h4>
                    </div>
                    <h4 className='mobNumber'>DSTV SmartCard Number</h4>
                    <div className='cable-rightBottom'>
                        <h4>DSTV Categories</h4>
                    <Button className='cabletvBtn' variant='contained'>Confirm purchase</Button>
                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cable2;