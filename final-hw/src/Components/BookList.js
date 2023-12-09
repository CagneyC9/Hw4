import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookList({ customers, title, handleDelete }) {
    console.log(customers);

    if (!customers) {
        return <div>Loading...</div>;
    }

    if (customers.length === 0) {
        return <div>No customers found.</div>;
    }

    return (
        <div>
            <h2>{title}</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((cust) => (
                    <tr key={cust.CustomerID}>
                        <td>{cust.CustomerName}</td>
                        <td>{cust.CustomerEmail}</td>
                        <td>
                            <Link to={`/customers/${cust.CustomerID}`} className="btn btn-primary">Update</Link>
                        </td>
                        <td>
                            <Link to={`/DeleteCustomer/${cust.CustomerID}`} className="btn btn-danger">Delete</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default BookList;