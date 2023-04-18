import React from 'react';
import { Grid } from '@mui/material';
import "./bio.css"

const Biodata = () => {
    return (
        <div className='bioWrapper'>
            <div className="oshibox-left">left</div>
            <div className="oshibox-right">
                <img src="" alt="oshimili south logo"/>
                <div className='textb'>
                    <h2>Oshimili South Local Government</h2>
                    <p>Data Solutions analytics applied on a pull of data resource from the states' local government information systems</p>
                </div>
                <Grid container className='formgridCont'>
                    <Grid item className='itemcont'>
                        <label>label1</label>
                        <input type='text' placeholder=''/>
                    </Grid>
                    <Grid item className='itemcont'>
                        <label>label1</label>
                        <input type='text' placeholder=''/>
                    </Grid>
                    <Grid item className='itemcont'>
                        <label>label1</label>
                        <input type='text' placeholder=''/>
                    </Grid>
                    <Grid item className='itemcont'>
                        <label>label1</label>
                        <input type='text' placeholder=''/>
                    </Grid>
                    <Grid item className='itemcont'>
                        <label>label1</label>
                        <input type='text' placeholder=''/>
                    </Grid>
                    <Grid item className='itemcont'>
                        <label>label1</label>
                        <input type='text' placeholder=''/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Biodata;