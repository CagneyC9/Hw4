import React from 'react'
import './App.css';
import NavComponent from "./Components/NavComponent";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Customers from "./Components/customers";
import Products from "./Components/products";
import Sales from "./Components/sales";
import NotFound from "./Components/notfound";
import CustomerDetails from "./Components/customerDetails";
import InsertCustomer from "./Components/InsertCustomer";
import UpdateCustomer from "./Components/UpdateCustomer";
import DeleteCustomer from "./Components/DeleteCustomer";
import InsertProduct from "./Components/InsertProduct";
import UpdateProduct from "./Components/UpdateProduct";
import DeleteProduct from "./Components/DeleteProduct";

function App() {
    return (
        <div className="App">
            <NavComponent/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/customers' element={<Customers/>}></Route>
                {/*<Route path='/customers/:id' element={<CustomerDetails/>}></Route>*/}
                <Route path='/InsertCustomer' element={<InsertCustomer/>}></Route>
                <Route path='/customers/:id' element={<UpdateCustomer/>}></Route>
                <Route path='/DeleteCustomer' element={<DeleteCustomer/>}></Route>
                <Route path='/DeleteProduct' element={<DeleteProduct/>}></Route>
                <Route path='/InsertProduct' element={<InsertProduct/>}></Route>
                <Route path='/products/:id' element={<UpdateProduct/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/sales' element={<Sales/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
