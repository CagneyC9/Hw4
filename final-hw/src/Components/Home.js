import React from 'react';
import useFetch from './useFetch';
import {Button, Col, Row} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

    const style = {
        height: '25vh', // 20% of the viewport height
    };
function MyComponent() {
    const urls = ['http://localhost:8000/customer', 'http://localhost:8000/product', 'http://localhost:8000/month'];
    const { data, error, isPending } = useFetch(urls);
    const navigate = useNavigate();
    // Render based on the fetched data
    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}

            {data && (
                <div>
                    <Row>
                        <div style={style}></div>
                    </Row>
                    <Row>
                        <Col md="4">
                            <h3>Top Customers</h3>
                            <ol>
                                {data[0]?.map((customer, index) => (
                                    // Display only the first 5 items
                                    index < 5 && (
                                        <li key={customer.id}>
                                            {customer.CustomerName} - {customer.TotalSales}
                                        </li>
                                    )
                                ))}
                            </ol>
                            <Button onClick={() => navigate('customers')}>Show Customer</Button>
                        </Col>
                        <Col md="3">
                            <h3>Top Products</h3>
                            <ol>
                                {data[1]?.map((product, index) => (
                                    // Display only the first 5 items
                                    index < 5 && (
                                        <li key={product.id}>
                                            {product.ItemName} - {product.TotalSales}
                                        </li>
                                    )
                                ))}
                            </ol>
                            <Button onClick={() => navigate('products')}>Show Products</Button>
                        </Col>
                        <Col md="3">
                            <h3>Monthly Sales</h3>
                            <ol>
                                {data[2]?.map((sale, index) => (
                                    // Display only the first 5 items
                                    index < 5 && (
                                        <li key={sale.Date}>
                                            {`${sale.Date}: ${sale.TotalSales}`}
                                        </li>
                                    )
                                ))}
                            </ol>
                            <Button onClick={() => navigate('sales')}>Show Sales</Button>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                    <Row>

                    </Row>
                </div>
            )}
        </div>
    );
}

export default MyComponent;