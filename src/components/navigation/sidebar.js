import React, { useEffect, useState } from "react";
import "../../css/bills.css";
import "../../css/sidebar.css";
import Submenu from '../navigation/submenu';
import menuData from "./sidebarData";
import RoutepayLogo from "../../img/RoutePay Logo 2.png";
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';
import styled from "@emotion/styled"

const useStyles = styled(theme => ({
    MenuIcon:{
        cursor:"pointer",
    }
}))
export default function sidebar({children}){
    const [isOpen, setisOpen] = useState(true)
    const [isMobile, setIsMobile] = useState(false);
    const toggle = ()=> setisOpen(!isOpen)
    const classes = useStyles();

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 768) {
            setIsMobile(!isMobile);
            setisOpen(false)
          } else if (window.innerWidth > 768){
            setisOpen(false)
          }
        }
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial state on mount
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return(
    <>
            
            <div style={{ width: isOpen ? "260px" : "60px"}} className="sidenav-container clicked">
                <div className="sidebar-top">
                    {isOpen ? <MenuIcon onClick={ toggle } color="primary" style={{marginLeft:"12px", cursor:"pointer", fontSize:"2rem"}}/> : <MenuIcon onClick={ toggle } color="primary" style={{marginLeft:"12px", cursor:"pointer", fontSize:"2rem", fontFamily:"Inter var"}}/>} 
                    {isOpen ? <img className="cirlogo" src={RoutepayLogo} alt="routepay-logo" style={{paddingRight:"15px"}}/> : ""}                                      
                </div>
                <div className="sidebar-bottom">
                    <MenuList>
                        {menuData.map((item, index) => {
                            return(
                                <Submenu item={item} isOpen={isOpen} key={index} to={item.path} />
                            )
                        })}
                    </MenuList>
                </div>
            </div>
            <div className="main">{children}</div>
                     
    </>
    )
}