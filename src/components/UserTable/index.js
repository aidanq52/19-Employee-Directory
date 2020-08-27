import React from "react";
import {Table} from "react-bootstrap";

function UserTable(props){


    return(
        <Table striped bordered hover>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
            <th scope="col">Address</th>
        </Table>
    )
}

export default UserTable;