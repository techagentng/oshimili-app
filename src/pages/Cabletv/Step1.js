import React from 'react';
import './Cabletv.css'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Search from '../../components/searchComponent';
import Togglebtn from '../../components/togglecomp';
import { Button } from '@mui/material';
import dstv2 from '../../img/dstv2.png'
import dsbox from '../../img/dsbox.png'
import { Link } from 'react-router-dom';

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

const Step1 = () => {
    return (
        <>
          
            <div className='cabletv-cont'>
              
                <div className='step1Box'>
                  <Link to="/sub/dstv" style={{textDecoration:'none',color:'white'}}>
                    <div className='sideLinks'>
                        <img src={dstv2} alt="dstv2"/>
                        <p>DSTV Subscription</p>
                    </div>
                  </Link>
                  <Link to="/sub/boxoffice" style={{textDecoration:'none',color:'white'}}> 
                    <div className='sideLinks'>
                        <img src={dsbox} alt="dstv2"/>
                        <p>DSTV BoxOffice</p>
                    </div>
                    </Link>
                </div>
                </div>
            
        </>
    );
};

export default Step1;