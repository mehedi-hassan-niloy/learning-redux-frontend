/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const [cart, setCart] = useState([])
    const { userReducer } = useSelector(state => state.userReducer)
    useEffect(() => {
        if (userReducer.cart.length > 0) {
            const promise = userReducer.cart.map(id => fetch("http://link/id").then(res => res.json()))
            const response = Promise.allSettled(promise);
            setCart(response)
        }
    }, [userReducer]);

    return (
        <div>
            {
                cart.map(ele => <ele key={ele} data={ele}></ele>)
            }
        </div>
    );
};

export default Cart;