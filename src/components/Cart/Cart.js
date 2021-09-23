import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const totalReducer = (previous, product)=> previous + product.price;
    const total = cart.reduce(totalReducer,0);
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax; 
    
    return (
        <div>
            <h2>Order Summary</h2>
            <p><small>Items Ordered:{props.cart.length}</small></p>
            <p>Total: ${total.toFixed(2)}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            <button className="orderBtn">Review your order</button>
        </div>
    );
};

export default Cart;