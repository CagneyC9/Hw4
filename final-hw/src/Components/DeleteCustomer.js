import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteCustomer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming you get the ID from the URL parameters

    useEffect(() => {
        // Check if id is defined before making the fetch request
        if (id) {
            // Fetch existing customer details when the component mounts
            fetch(`http://localhost:8000/customer/${id}`)
                .then((response) => response.json())
                .then((customer) => {
                    setName(customer.CustomerName);
                    setEmail(customer.CustomerEmail);
                })
                .catch((error) => {
                    console.error('Error fetching customer details:', error);
                    setError('Failed to fetch customer details. Please try again.');
                });
        }
    }, [id]);

    const handleDelete = (e) => {
        e.preventDefault();

        // Send a DELETE request to remove the customer
        fetch(`http://localhost:8000/customer/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ CustomerID: id }), // Pass only the id as an object
        })
            .then(() => {
                console.log('Customer deleted successfully');
                // navigate('/customers');
            })
            .catch((error) => {
                console.error('Error deleting customer:', error);
                setError('Failed to delete customer. Please try again.');
            });
    };

    return (
        <div className="delete">
            <h2>Delete Customer</h2>
            <form onSubmit={handleDelete}>
                <button>Delete Customer</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default DeleteCustomer;