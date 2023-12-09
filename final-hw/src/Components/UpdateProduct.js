import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Updateproduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [ids, setIds] = useState(''); // Corrected name to match the state variable
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming you get the ID from the URL parameters

    useEffect(() => {
        fetch(`http://localhost:8000/product/${id}`)
            .then((response) => response.json())
            .then((product) => {
                setName(product.ItemName);
                setPrice(product.ItemPrice);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
                setError('Failed to fetch product details. Please try again.');
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedproduct = { ItemID: id, ItemName: name, ItemPrice: price };
            console.log(updatedproduct)

        // Send a PUT or PATCH request to update the existing product
        console.log(`http://localhost:8000/product/${id}`)
        fetch(`http://localhost:8000/product/${id}`, {
            method: 'PUT', // or 'PATCH'
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedproduct),
        })
            .then(() => {
                console.log('product updated successfully');
                navigate('/products');
            })
            .catch((error) => {
                console.error('Error updating product:', error);
                setError('Failed to update product. Please try again.');
            });
    };

    return (
        <div className="update">
            <h2> Update product - {id}</h2>
            <form onSubmit={handleSubmit}>
                <label>product name: </label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>
                    <label>product Email: </label>
                    <input
                        type="email"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <button> Update product</button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default Updateproduct;