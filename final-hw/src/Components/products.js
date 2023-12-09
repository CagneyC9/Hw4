import {Col, Row, Button} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import ProductList from "./ProductList";
import useFetch from "./useFetch";
import {useNavigate} from "react-router-dom";

function Products () {
    const urls = ['http://localhost:8000/product'];
    const { data, error, isPending } = useFetch(urls);
    const navigate = useNavigate();
    const myTitle = "Products"
    const products = data[0]
    return (
        <Row>
            <Col sm={3}>
            </Col>
            <Col sm={3}>
                { error && <div> Error: {error} </div> }
                {isPending && <div> Loading ...</div>}
                { products && <ProductList products={products} title={myTitle}/>}
            <Button onClick={() => navigate('/InsertProduct')}>Add New Product</Button>
            </Col></Row>
    )
}
export default Products;

