import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Deleteproduct() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming you get the ID from the URL parameters

    useEffect(() => {
        // Check if id is defined before making the fetch request
        if (id) {
            // Fetch existing product details when the component mounts
            fetch(`http://localhost:8000/product/${id}`)
                .then((response) => response.json())
                .then((product) => {
                    setName(product.productName);
                    setEmail(product.productEmail);
                })
                .catch((error) => {
                    console.error('Error fetching product details:', error);
                    setError('Failed to fetch product details. Please try again.');
                });
        }
    }, [id]);

    const handleDelete = (e) => {
        e.preventDefault();

        // Send a DELETE request to remove the product
        fetch(`http://localhost:8000/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productID: id }), // Pass only the id as an object
        })
            .then(() => {
                console.log('product deleted successfully');
                // navigate('/products');
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
                setError('Failed to delete product. Please try again.');
            });
    };

    return (
        <div className="delete">
            <h2>Delete product</h2>
            <form onSubmit={handleDelete}>
                <button>Delete product</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default Deleteproduct;