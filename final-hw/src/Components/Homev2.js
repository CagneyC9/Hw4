import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <Row className="text-center">
            <h2>Welcome to Home</h2>
            <Col md={3} className="mx-auto">
                <div>
                    <ol>
                        <li>Customer 1</li>
                        <li>Customer 2</li>
                        <li>Customer 3</li>
                    </ol>
                    <Button onClick={() => navigate('customers')}>Show Customer</Button>
                </div>
            </Col>

            <Col md={3} className="mx-auto">
                <div>
                    <ol>
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                    </ol>
                    <Button onClick={() => navigate('products')}>Show Products</Button>
                </div>
            </Col>

            <Col md={3} className="mx-auto">
                <div>
                    <ol>
                        <li>Sale 1</li>
                        <li>Sale 2</li>
                        <li>Sale 3</li>
                    </ol>
                    <Button onClick={() => navigate('sales')}>Show Sales</Button>
                </div>
            </Col>
        </Row>
    );
}

export default Home;