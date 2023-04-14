import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PageviewIcon from '@mui/icons-material/Pageview';
//import DirectionsIcon from '@mui/icons-material/Directions';
import { makeStyles } from '@mui/styles';

import "../css/search.css";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 700,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      background: 'red',
    },
  }));
  

  export default function Search() {
  return (
    <Paper
      component="form"
      className='search-cont'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon color="primary"/>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize:'14.5px' }}
        placeholder="Find a Biller E.g DSTV"
        inputProps={{ 'aria-label': 'Find a Biller E.g DSTV' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <PageviewIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: '10px' }} aria-label="directions">
        <PageviewIcon color="primary" />
      </IconButton>
    </Paper>
  );
}

// import React, { useState, useEffect } from 'react';

// function SearchResults() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(`https://your-search-api.com/search?q=${query}`);
//       const data = await response.json();
//       setResults(data);
//     }

//     fetchData();
//   }, [query]);

//   function handleInputChange(event) {
//     setQuery(event.target.value);
//   }

//   const filteredResults = results.filter(result =>
//     result.title.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div>
//       <input type="text" value={query} onChange={handleInputChange} />
//       <ul>
//         {filteredResults.map(result => (
//           <li key={result.id}>{result.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// https://www.youtube.com/watch?v=OLvVUz-3D8A