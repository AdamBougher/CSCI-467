import SiteNav from "../components/siteNav"
import React from "react";
import Header from "../components/Header";
import AdminTable from "../components/adminTable";

export default function Admin() {
    return (
    <body>
    <Header />
    <SiteNav />
    <AdminTable
        name="Cameron Ryan"
        email="camryan@gmail.com"
        addr="12345 Street"
    />
    <AdminTable
        name="Chris Jett"
        email="CJett@gmail.com"
        addr="773 Street"
    />
    </body>
    )
}
