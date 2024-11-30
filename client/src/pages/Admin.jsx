import React from "react";
import AdminTable from "../components/adminTable";

export default function Admin() {
    return (
    <body>
    <AdminTable
        name="Cameron Ryan"
        email="camryan@gmail.com"
        addr="12345 Street"
        orderNum={0}
    />
    <AdminTable
        name="Chris Jett"
        email="CJett@gmail.com"
        addr="773 Street"
        orderNum={1}
    />
    </body>
    )
}