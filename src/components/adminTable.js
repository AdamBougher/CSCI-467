import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

function createData(
  qty: number,
  product: String,
) {
  return { qty, product };
}

const rows = [
  createData(15, 'Cars'),
  createData(10, 'Ege'),
];

export function AdminTable(props) {
  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 200 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Hi</TableCell>
                <TableCell align="left">Order #123</TableCell>
            </TableRow>
            </TableHead>

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

            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="left">{row.qty}</TableCell>
                <TableCell align="left">{row.product}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        
        <Divider orientation="vertical" variant="middle" flexItem />
    </div>
  );
}
