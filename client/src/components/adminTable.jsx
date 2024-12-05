import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

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

            <TableBody>
            </TableBody>
        </Table>
        </TableContainer>
        
        <Divider orientation="vertical" variant="middle" flexItem />
    </div>
  );
};

export default AdminTable;
