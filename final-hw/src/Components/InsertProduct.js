import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function InsertProduct(props) {
    // const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    // const [sales, setSales] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {name, price };
        console.log(product);

        fetch('http://localhost:8000/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
            .then(() => {
                console.log('New customer added');
                // Redirect or perform any other action after successful submission
                navigate('/products');
            })
            .catch((error) => {
                console.error('Error in fetch:', error);
                setError('Failed to add a new product. Please try again.');
            });
    };

    return (
        <div className="create">
            <h2> Add a new Product</h2>
            <form onSubmit={handleSubmit}>
                <label>Product name: </label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>
                    <label>Product Sales: </label>
                    <input
                        type="text"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <button> Insert Product</button>
                </div>
                {error && <p className="error-message">{error}</p>}
                <p>{name}</p>
                <p>{price}</p>
            </form>
        </div>
    );
}

export default InsertProduct;