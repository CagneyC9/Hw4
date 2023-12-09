import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {FormLabel} from "react-bootstrap"
import "./CreateStyle.css"
import {useNavigate} from "react-router-dom";


function InsertCustomer(props) {
    // const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [sales, setSales] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const customer = {name, email };
        console.log(customer);

        fetch('http://localhost:8000/customer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer),
        })
            .then(() => {
                console.log('New customer added');
                // Redirect or perform any other action after successful submission
                navigate('/customers');
            })
            .catch((error) => {
                console.error('Error in fetch:', error);
                setError('Failed to add a new customer. Please try again.');
            });
    };

    return (
        <div className="create">
            <h2> Add a new Customer</h2>
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
                    <button> Insert Customer</button>
                </div>
                {error && <p className="error-message">{error}</p>}
                <p>{name}</p>
                <p>{email}</p>
                {/*<p>{sales}</p>*/}
            </form>
        </div>
    );
}

export default InsertCustomer;