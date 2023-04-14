import React from 'react';
import './AirtimeData.css'
import BillsCard from '../../components/billsCard';
import Grid from '@mui/material/Grid';
import MobileSearch from '../../components/mobile-search';
import DesktopSearch from '../../components/desktop-search';
import SidebarMobile from '../../components/navigation/sidbarMobile';
  
const AirtimeData = ({text}) => {
    return (
        <> 
            <SidebarMobile/>
            <div className='gen'>    
                <DesktopSearch/>
                <MobileSearch />
                <div className='billswrap'>
                <div className='billsContainer'>
                    <Grid container direction={'row'} spacing={1}>
                        <Grid item md={4} sm={6} xs={12}> 
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <BillsCard text="this"/>
                        </Grid>
                    </Grid>
                </div>
                </div>
            </div>
        </>
    );
};

export default AirtimeData;