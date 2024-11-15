import SiteNav from "../components/siteNav"
import { AdminTable } from "../components/adminTable"; // Use named import
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
  } from "@mui/material";

export default function Home() {
    return (
    <body>
        <h1>Hi, this is the admin page</h1> 
        <SiteNav />

        <AdminTable
            name="Cameron Ryan"
            email="camryan721@gmail.com"
            addr="69 Swamp Dr."
        />

        <AdminTable
            name="Juan Lopez"
            email="obamasleftnut@gmail.com"
            addr="67 Swamp Dr."
        />      

    </body>
    )
}