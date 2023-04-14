import React from "react";
import TableComp from './../../components/table';
import Search from "../../components/searchComponent";
import './Home.css';

function Home(){
    return(
        <>
             <div className='search-space'>
                <Search/>
            </div>
            <div className='home-cont'>
                <TableComp />
            </div>
        </>
    )
}

export default Home;