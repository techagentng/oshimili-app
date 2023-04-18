import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Logolanding from "../img/logolanding.png"
import '../css/bills.css'
// import bg1 from "../img/cityboy.jpg"
// import {Link} from "react-router-dom"

function BillsLanding(){
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
        navigate('#');
      }

    return (
        <>
            <div className='billsLandingWrapper'>     
            {/* <img src={bg1} alt="slider1"/> */}
            {/* <img src="" alt="slider2"/>
            <img src="" alt="slider3"/>  */}
                <div className='billsLandingBox'>
                    <img src={Logolanding} alt="pic"/>                   
                </div>
                {/* <Link to="#" className='billsbtn'>ENTER</Link> */}
                <select name="status" className='droplanding' value={value} onChange={handleChange}>
                    <option value="" selected>ENTER</option>
                    <option value="Indegine">indegine</option>
                    <option value="Non-indegine">Non Indegine</option>
                    <option value="other">other</option>
                </select>
            </div>
        </>
    )
}

export default BillsLanding