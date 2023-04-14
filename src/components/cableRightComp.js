
import { Button } from '@mui/material';
import React from 'react';

function CableRightComp(){
    return(
        <>
               <div className='cabletv-right'>
                    <div className="cable-rightTop">
                        <h4>Email or Mobile Number</h4>
                    </div>
                    <h4 className='mobNumber'>DSTV SmartCard Number</h4>
                    <div className='cable-rightBottom'>
                        <h4>DSTV Categories</h4>                    
                    </div>
                    <Button className='cabletvBtn' style={{maxWidth:'262px'}} variant='contained'>Confirm purchase</Button>
                </div>
        </>
    )
}

export default CableRightComp;