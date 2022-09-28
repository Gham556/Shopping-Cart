import React, { useState } from "react";

const ShoppingCart = () => {
    const [ itemsNum, setItemsNum ] = useState(0);

    const incrementItems = () => {
        setItemsNum(itemsNum + 1);
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div>Items In Cart: {itemsNum}</div>
            <button type='button' onClick={incrementItems}>Increment</button>
        </div>
    )
}; 

export default ShoppingCart;