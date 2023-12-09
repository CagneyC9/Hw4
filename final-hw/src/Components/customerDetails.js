import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateCustomer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ids, setIds] = useState(''); // Corrected name to match the state variable
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming you get the ID from the URL parameters

    useEffect(() => {
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
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedCustomer = { CustomerID: id, CustomerName: name, CustomerEmail: email };

        // Send a PUT or PATCH request to update the existing customer
        console.log(`http://localhost:8000/customer/${id}`)
        fetch(`http://localhost:8000/customer/${id}`, {
            method: 'PUT', // or 'PATCH'
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCustomer),
        })
            .then(() => {
                console.log('Customer updated successfully');
                navigate('/customers');
            })
            .catch((error) => {
                console.error('Error updating customer:', error);
                setError('Failed to update customer. Please try again.');
            });
    };

    return (
        <div className="update">
            <h2> Update Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>Customer name: </label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>
                    <label>Customer Email: </label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button> Update Customer</button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default UpdateCustomer;