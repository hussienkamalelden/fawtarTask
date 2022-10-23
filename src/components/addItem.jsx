import React, { useState } from 'react';
import NewItem from './newItem';
import TotalReceipt from './totalReceipt';

const AddItem = ({ currency }) => {

    //States
    const [items, setItems] = useState([{ id: Math.random() * 1000, description: "", cost: '', quantity: '', total: 0 }]);
    const [discount, setDiscount] = useState('');
    const [taxes, setTaxes] = useState('');
    const [finalCost, setFinalCost] = useState('');

    const addNewItem = () => setItems([...items, { id: Math.random() * 1000, description: "", cost: '', quantity: '', total: 0 }]);
    const handleController = (obj, value, controller) => {
        let newArr = [...items];
        let index = newArr.indexOf(obj);
        if (controller === "description")
            newArr[index].description = value;
        else if (controller === "cost")
            newArr[index].cost = value < 0 ? 0 : value;
        else if (controller === "quantity")
            newArr[index].quantity = value < 0 ? 0 : value;

        let totalCost = Math.round(parseFloat(newArr[index].cost) * parseFloat(newArr[index].quantity) * 10) / 10;
        newArr[index].total = isNaN(totalCost) ? 0 : totalCost;
        setItems(newArr);
    }
    const deleteItem = (obj) => setItems(items.filter(ele => ele.id !== obj.id));
    const resetItem = (obj) => {
        let newArr = [...items];
        let index = newArr.indexOf(obj);
        newArr[index].description = "";
        newArr[index].cost = 0;
        newArr[index].quantity = 0;
        newArr[index].total = 0;
        setItems(newArr);
    };

    return (
        <>
            <div className="add-item">
                <div className='container pt-4'>
                    <span className='main-title'>إضافة بند</span>
                </div>
                <div id="add-new-items">
                    {items.map(item => {
                        return (
                            <NewItem key={item.id} deleteItem={deleteItem} resetItem={resetItem} data={item} currency={currency} handleController={handleController} />
                        )
                    })}
                </div>
                <div className='container'>
                    <button className="add-item-btn btn btn-primary mt-4" onClick={() => addNewItem()}>+ إضافة بند جديد</button>
                </div>
            </div>
            <TotalReceipt
                discount={discount}
                setDiscount={setDiscount}
                taxes={taxes}
                setTaxes={setTaxes}
                finalCost={finalCost}
                setFinalCost={setFinalCost}
                currency={currency}
                itemsCosts={items.reduce((acc, obj) => acc + obj.total, 0)}
            />
        </>
    );
}

export default AddItem;