import {Container, Table} from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductList({ products, title, handleDelete }) {
    console.log(products);

    return (
        <Container>
        <div>
            <h2>{title}</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Sales</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {products.map((prod) => (
                    <tr key={prod.id}>
                        <td>{prod.ItemName}</td>
                        <td>{prod.TotalSales}</td>

                        {/*<td>*/}
                        {/*    <Link to={`/product/${prod.id}`}>Show {prod.id}</Link>*/}
                        {/*</td>*/}
                        <td>
                            <Link to={`/product/${prod.id}`} className="btn btn-primary">Update</Link>
                        </td>
                        <td>
                            <Link to={`/DeleteProduct`} className="btn btn-danger">Delete</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </div>
        </Container>
    );
}

export default ProductList;