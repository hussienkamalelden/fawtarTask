import React, { useState, useEffect } from 'react';
import NewItem from './newItem';
import TotalReceipt from './totalReceipt';

const AddItem = ({ currency }) => {

    const [items, setItems] = useState([{ key: Math.random() * 1000, description: "", cost: 0, quantity: 0 }]);

    const addNewItem = () => {
        setItems([...items, { key: Math.random() * 1000, description: "", cost: 0, quantity: 0 }]);
    }
    const deleteItem = (obj) => {
        console.log(obj);
    }

    return (
        <>
            <div className="add-item">
                <div className='container pt-4'>
                    <span className='main-title'>إضافة بند</span>
                </div>
                <div id="add-new-items">
                    {items.map(item => {
                        return (<NewItem key={item.key} deleteItem={deleteItem} description={item.description} cost={item.cost} quantity={item.quantity} currency={currency} />)
                    })}
                </div>
                <div className='container'>
                    <button className="add-item-btn btn btn-primary mt-4" onClick={() => addNewItem()}>+ إضافة بند جديد</button>
                </div>
            </div>
            <TotalReceipt currency={currency} />
        </>
    );
}

export default AddItem;