import React from 'react';
import './success.css'
import Markline from '../../img/markline.png'
import { Button } from '@material-ui/core';
import SidebarMobile from '../../components/navigation/sidbarMobile';
import {Link} from "react-router-dom";
  
const Success = ({text}) => {
    return (
        <>
        <div className='cont onone'>        
            <div className='successContainer'>
               <div className='successContainer_box'>
                    <div className='success-logoBox'>
                        <div className='success-logoBox-top'>
                            <div className='drawCirc'><img src={Markline} alt="mark-img"/></div>
                        </div>
                        <div className='success-logoBox-bottom'>
                            <h4>Data collected successfully</h4>
                            <h6>Thanks for your patience.....we'll send a mail accross soon.</h6>
                            <Link to="/">Done</Link>
                        </div>
                    </div>
               </div>
            </div>
        </div>
       
        </>
    );
};

export default Success;