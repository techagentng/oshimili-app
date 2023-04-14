import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { Button, IconButton, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import '../css/bills.css'
import Ikeja from "./../img/ikeja.png"
const useStyles = makeStyles((theme)=>({
    headerTitle: {
      fontSize:'2px',
      backgroundColor:'blue',
      fontFamily: 'Inter var,Roboto,"Helvetica",Arial,sans-serif',
      width:'100%',
      height:'40px',
    },
    root: {
        width: '45px',
        [theme.breakpoints.down("sx")] : {
        maxWidth: 20
        }
      },
  }));

function BillsCard({text}) {
    const materializeUIClasses = useStyles();
    return (
        <div className='paper'>            
            <Paper>
                <Card>
                    <div className='upch'>
                        <p>Ikeja prepaid</p>
                        <IconButton>
                            <LocationSearchingIcon style={{width:'12px', paddingRight:'10px'}}/>
                        </IconButton>
                    </div>
                    <div className='chbody'>
                    <img src={Ikeja} alt="provider-logo"/>
                    </div>
                <Link to="/buybundle" className="cardlink">Make Payments</Link>     
                </Card>
            </Paper>
        </div>
    );
}

export default BillsCard;