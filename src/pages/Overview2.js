import React from "react"
import styled from 'styled-components'
import Search from "../components/searchComponent";

const Cover = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    height: 90vh;
`

export default function Overview(){
    return(
    <>
    
        
            <Search />
        
    
    </>)
}