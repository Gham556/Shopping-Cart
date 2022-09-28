import React, { useState } from "react";
import ItemManager from './itemManager'

const ShoppingCart = () => {
    const [ itemsNum, setItemsNum ] = useState(0);

    const incrementItems = (e) => {
        e.preventDefault();
        setItemsNum(itemsNum + Number(e.target[0].value)); 
    }

    return (
        <div>
            <div>
                <h1>Shopping Cart</h1>
                <div>Items In Cart: {itemsNum}</div>
            </div>
            <ItemManager incrementItems={incrementItems}/>
        </div>    
    )
}; 

export default ShoppingCart;