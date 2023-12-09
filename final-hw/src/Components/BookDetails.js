import React from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {Table, Button} from "react-bootstrap";

function BookDetails(props) {
    const {id} = useParams();
    let url = `http://localhost:8000/books/${id}` ;
    const {data : book, error, isPending} = useFetch( url );
    const history = useHistory();
    const handleClick = () => {
        let URL = `http://localhost:8000/books/${book.id}`;
        fetch(URL , {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div>
             { isPending  && <div> Loading </div>}
             { error  && <div> {error} </div>}
             { book  && (
                 <div>
                     <h2> Book Details for id={book.id} </h2>

                     <Table striped bordered hover>
                         <thead>
                         <tr>
                             <th> Title</th>
                             <th> Author</th>
                             <th> Price</th>
                             <th> Description</th>
                         </tr>
                 </thead>
                         <tbody>
                         <tr key={book.id}>
                             <td> {book.title}</td>
                             <td> {book.author}</td>
                             <td> {book.price}</td>
                             <td> {book.description}</td>
                             <td> <Button onClick={handleClick}> Delete {book.id}  </Button></td>
                         </tr>
                         </tbody>
                     </Table>
                     <Link to="/"> Back Home </Link>
                 </div>
             )}
        </div>
    );
}
export default BookDetails;