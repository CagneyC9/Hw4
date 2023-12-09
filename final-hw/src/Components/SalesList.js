import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function SalesList({ sales, title, handleDelete }) {
    console.log(sales);

    return (
        <div>
            <h2>{title}</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>CustomerName</th>
                    <th>ItemName</th>
                    <th>Quantity</th>
                    <th>TotalSales</th>
                </tr>
                </thead>
                <tbody>
                {sales.map((mysales) => (
                    <tr key={mysales.id}>
                        <td>{mysales.Date}</td>
                        <td>{mysales.CustomerName}</td>
                        <td>{mysales.ItemName}</td>
                        <td>{mysales.Quantity}</td>
                        <td>{mysales.TotalSales}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default SalesList;