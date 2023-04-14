import React, { useState } from "react";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
// import GppGoodIcon from '@mui/icons-material/GppGood';
// import RouterIcon from '@mui/icons-material/Router';
// import WorkIcon from '@mui/icons-material/Work';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Divider from '@mui/material/Divider';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from "styled-components";
import {Link} from "react-router-dom";


const SidebarLink = styled(Link)`
    text-decoration: none;
    display: "flex";
    justify-content: "space-between";
    display: "flex";
`
const SidebarLinkico = styled(Link)`
    text-decoration: none;
`
const SidebarLabel = styled.span`
    padding-left: "20px";
    font-size: 14px;
    font-family: "Inter var,Roboto,"Helvetica",Arial,sans-serif";
    @media (max-width: 768px) {
        display: none;
      }         
`
const SidebarLabel2 = styled.span`
    margin-right: 30px;
`
// const ListItemIcon= styled.span`
//     color: white;
// `
const DropdownLink = styled(Link)`
    background: #596572;
    height: 40px;
    padding-left: 1rem;
    display: flex;
    align-item: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: #ffff;
    font-size: 28px;
    &:hover {
        background-color: #4f5057;
        cursor: pointer;
    }
`
const DropdownLink2 = styled(Link)`
    height: 40px;
    padding-left: 1rem;
    text-decoration: none;
    color: #ffff;
    font-size: 18px;
    width: 100%;
`
const Submenu = ({item, isOpen})=>{
    const [subnav, setSubnav] = useState(false)
    const showSubnav = ()=> setSubnav(!subnav) 
    return(
        <>
            <SidebarLink onClick={item.submenu && showSubnav}>
                <MenuItem>
                <SidebarLinkico to={item.path}>
                    <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                </SidebarLinkico>
                <DropdownLink2 to={item.path}>
                    {isOpen ? <ListItemText primaryTypographyProps={{fontSize: '14px', color:"white", paddingTop:"10px", paddingBottom:"10px"}}>{item.title}</ListItemText> : ""}
                </DropdownLink2>
                {isOpen ? 
                <div style={{color:"white"}}>
                {item.submenu && subnav ? item.iconOpened : item.submenu ? item.iconClosed : null}
            </div> : 
            ""    
            }
                
                </MenuItem>
                {subnav && item.submenu.map((item, index)=>{
                    return (
                        <DropdownLink to={item.path} key={index}>
                            <SidebarLabel2>{item.icon}</SidebarLabel2>
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    )
                })}
            </SidebarLink>
        </>
    )
}

export default Submenu;