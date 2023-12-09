import {Col, Row, Button} from "react-bootstrap";
import {useState, useEffect} from "react";
import SalesList from "./SalesList";
import useFetch from "./useFetch";
import {useNavigate} from "react-router-dom";

function Sales () {
    const urls = ['http://localhost:8000/sales'];
    const { data, error, isPending } = useFetch(urls);
    const navigate = useNavigate();
    const myTitle = "Sales"
    const sales = data[0]
    return (
        <Row>
            <Col sm={3}>
            </Col>
            <Col sm={3}>
                { error && <div> Error: {error} </div> }
                {isPending && <div> Loading ...</div>}
                { sales && <SalesList sales={sales} title={myTitle}/>}
            </Col></Row>
    )
}
export default Sales;

