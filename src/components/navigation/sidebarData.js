import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GppGoodIcon from '@mui/icons-material/GppGood';
import RouterIcon from '@mui/icons-material/Router';
import WorkIcon from '@mui/icons-material/Work';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

import React from "react";

const menu = [
    {
      title: "Home",
      path: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Bundle",
      icon: <GppGoodIcon />,
      iconClosed: <ArrowDropDownIcon />,
      iconOpened: <ArrowDropUpIcon />,
      // submenu: [
      //   {
      //     title: "AirtimeData",
      //     path: "/airtimedata",
      //     icon: <PhoneDisabledIcon />,
      //   },
      //   {
      //     title: "Bundle",
      //     path: "/top-up",
      //     icon: <CardMembershipIcon />,
      //   },
      //   {
      //     title: "VTUPlus",
      //     path: "/vtuplus",
      //     icon: <CardMembershipIcon />,
      //   }
      // ]
    },
    {
      title: "Pin",
      path: "/sub",
      icon: <RouterIcon />,
    },
    {
      title: "Power",
      path: "/sub",
      icon: <RouterIcon />,
    },
    // {
    //   title: "Online Shopping",
    //   path: "/online-shopping",
    //   icon: <WorkIcon />,
    // },
    // {
    //   title: "More",
    //   path: "/users2",
    //   icon: <ExpandMoreIcon />,
    //   submenu: [
    //     {
    //       title: "users",
    //       path: "/users",
    //       icon: <ShoppingCartIcon />,
    //     },
    //     {
    //       title: "users",
    //       path: "/users",
    //       icon: <ShoppingCartIcon />,
    //     },
    //   ]
    // },
  ];
  
export default menu