import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

function CustomerDetails(props) {
    const { id } = useParams();
    const urls = ['http://localhost:8000/customer/' + id];
    const { data, error, isPending } = useFetch(urls);
    const customer = data[0];
    console.log('Customer D:', customer); // Log the customer data

    return (
        <div className={'customer-details'}>
            <h2>Customer Details - {id}</h2>
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {customer && (
                <article>
                    <h2>{customer.CustomerID}</h2>
                    <p>With the name of {customer.CustomerName}</p>
                    <div>{customer.CustomerEmail}</div>
                </article>
            )}
        </div>
    );
}

export default CustomerDetails;