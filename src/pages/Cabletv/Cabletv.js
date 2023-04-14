import React from 'react';
import './Cabletv.css'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Search from '../../components/searchComponent';
import Togglebtn from '../../components/togglecomp';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import SidebarMobile from '../../components/navigation/sidbarMobile';

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

const Cabletv = () => {
    return (
        <>
            {/* <div className='search-space'>
                <Search/>
            </div> */}
            <SidebarMobile/>
                <div className='holdit'>
                  <div className='cabletv-left'>
                    <div className='recharge'>
                        <div className='rechargeHeader'>
                            <p>Buy Data</p>
                        </div>
                        <div className='cabletv-right-recharge'>
                           <p>Network service</p>
                            <div className='inner-recharge'>
                                <Togglebtn/>
                            </div>
                        </div>
                        <div className='input-box1'>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="All"
                                className='textall'
                                style={{width:'90%'}}
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
                                label="All"
                                margin="dense"
                                style={{width:'90%', height:'10px'}}
                                >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <Button className="cabletvBtn-left" variant='contained'>Confirm purchase</Button>
                    </div>
                    </div>
                    <div className='cabletv-right'>
                        <div className="cable-rightTop">
                            <h5>Network provider</h5>
                            <span>MTN</span>
                        </div>
                        <h4 className='mobNumber'>Mobile Number</h4>
                        <div className='cable-rightBottom'>
                            <h4>Data Plan</h4>
                        <Button className="cabletvBt" variant='contained'>Confirm purchase</Button>                        
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Cabletv;