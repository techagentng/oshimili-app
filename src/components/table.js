import React from 'react'
import '../css/table.css';
import styled from '@emotion/styled';
import MuiTableHead from "@mui/material/TableHead";
import Grid from '@mui/material/Grid';
import { TableContainer, 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableCell, 
    Paper } from '@mui/material';
    
    const useStyles = styled(theme => ({
        root: {
            backgroundColor: '#596572',
            color:'white'
          }
    }))(MuiTableHead)
  

const TableComp = () => {
    return (
        <>
        <Grid container>
            <Grid item md={12} sx={12}>
            <TableContainer component={Paper}>
                <Table aria-aria-label='Bills tresp'>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>Billers</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row)=>(
                            <TableRow key={row.id} 
                            sx={{'&:last-child td, &:last-child th':{border: 0,}}}
                            >
                            <TableCell>{row.ID}</TableCell>
                            <TableCell>{row.NAME}</TableCell>
                            <TableCell>{row.BILLERS}</TableCell>
                            <TableCell>{row.EMAIL}</TableCell>
                            <TableCell>{row.GENDER}</TableCell>
                            <TableCell>{row.DATE}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
        </Grid>
       
        </>
    );
};
const tableData = [{
    "ID": 1,
    "NAME": "Ciro",
    "BILLERS": "Stares",
    "EMAIL": "cstares0@home.pl",
    "GENDER": "Male",
    "DATE": "156.234.54.238"
  }]
export default TableComp;