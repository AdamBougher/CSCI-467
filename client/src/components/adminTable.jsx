import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableContainer, TableRow, Divider, Paper } from '@mui/material';



const AdminTable = (props) => {

  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 200 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell align="left">{props.id}</TableCell>
            </TableRow>
            </TableHead>

            <TableRow>
                <TableCell>Status:</TableCell>
                <TableCell align="left">{props.Shipped}</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Name:</TableCell>
                <TableCell align="left">{props.name}</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Email:</TableCell>
                <TableCell align="left">{props.email}</TableCell>
            </TableRow>

            <TableRow>
                <TableCell>Addr:</TableCell>
                <TableCell align="left">{props.addr}</TableCell>
            </TableRow>

            {props.orderItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>Item:</TableCell>
                <TableCell align="left">{item}</TableCell>
              </TableRow>
            ))}

            <TableBody>
            </TableBody>
        </Table>
        </TableContainer>
        
        <Divider orientation="vertical" variant="middle" flexItem />
    </div>
  );
};

export default AdminTable;
