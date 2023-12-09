import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";
import Harry from './HappyHarry.png'
import BookList from "./BookList";
import {Col, Row} from "react-bootstrap";

function NavBar() {

    return (
        <Row className="mainNav" style={{ backgroundColor: '#5b9bd5', padding: '10px 0' }}>
            <Col xs={2}>
                {/* Logo */}
                <img src={Harry} alt="Logo" style={{ height: '40px' }} />
            </Col>
            <Col xs={10} className="d-flex align-items-center justify-content-between">
                {/* Header */}
                <h3 className="text-light" style={{paddingLeft: '25%'}}>Happy Harry's Hardware</h3>
                {/* Navigation Links */}
                <Nav>
                    <Nav.Item style={{ backgroundColor: '#F8CBAD', marginRight: '10px' }}>
                        <Nav.Link as={NavLink} to="/" activeClassName="active">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ backgroundColor: '#F8CBAD', marginRight: '10px' }}>
                        <Nav.Link as={NavLink} to="/customers" activeClassName="active">Customers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ backgroundColor: '#F8CBAD', marginRight: '10px' }}>
                        <Nav.Link as={NavLink} to="/products" activeClassName="active">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ backgroundColor: '#F8CBAD', marginRight: '10px' }}>
                        <Nav.Link as={NavLink} to="/sales" activeClassName="active">Sales</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </Row>
    );
}

export default NavBar;