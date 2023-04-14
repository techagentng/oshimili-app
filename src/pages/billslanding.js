import React from 'react';
import { useNavigate } from "react-router-dom";
import Logolanding from "../img/logolanding.png"
import '../css/bills.css'
import bg1 from "../img/cityboy.jpg"
import {Link} from "react-router-dom"

function BillsLanding(){
    function gotoroute(){
        let navigate = useNavigate()
        navigate("/airtimedata")
    }
    return (
        <>
            <div className='billsLandingWrapper'>     
            {/* <img src={bg1} alt="slider1"/> */}
            {/* <img src="" alt="slider2"/>
            <img src="" alt="slider3"/>            */}
                <div className='billsLandingBox'>
                    <img src={Logolanding} alt="pic"/>                   
                </div>
                <Link to="/success" className='billsbtn' onClick={gotoroute}>ENTER</Link>
            </div>
        </>
    )
}

export default BillsLanding