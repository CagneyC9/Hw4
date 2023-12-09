import {Col, Row, Button} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import BookList from "./BookList";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';
import SalesList from "./SalesList";


function Customers () {
    const urls = ['http://localhost:8000/customer'];
    const { data, error, isPending } = useFetch(urls);
    const navigate = useNavigate();
    const myTitle = "Customers"
    const customers = data[0]
    return (
        <Row>
            <Col sm={3}>
            </Col>
            <Col sm={3}>
                { error && <div> Error: {error} </div> }
                {isPending && <div> Loading ...</div>}
                { customers && <BookList customers={customers} title={myTitle}/>}
            <Button onClick={() => navigate('/InsertCustomer')}>Add New Customer</Button>
            </Col>
        </Row>
    )
}
export default Customers;


