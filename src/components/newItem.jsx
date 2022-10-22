import React, { useState, useEffect, useRef } from 'react';

const NewItem = ({ props, currency }) => {

    const [description, setDescription] = useState('مواصفات البند');
    const [cost, setCost] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [totalItem, setTotalItem] = useState(0);

    useEffect(() => {
        setTotalItem(cost * quantity);
    }, [cost, quantity])

    return (
        <div className="new-item">
            <div className='py-4 container'>
                <div className='d-flex mx-4 w-100 flex-wrap'>
                    <div className='ms-3'>
                        <span className='label-title d-block mb-1'>مواصفات البند</span>
                        <textarea className="common-input common-input-textarea" name="" onChange={(e) => setDescription(e.target.value)} placeholder={description} ></textarea>
                    </div>
                    <div className='ms-3'>
                        <span className='label-title d-block mb-1'>التكلفة بالجنية</span>
                        <input className="common-input" type="number" name="" placeholder={cost} onChange={(e) => setCost(e.target.value)} />
                        <span className='currency me-1'>{currency}</span>
                    </div>
                    <div className='ms-3'>
                        <span className='label-title d-block mb-1'>العدد</span>
                        <input className="common-input" type="number" name="" placeholder={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div className='delete-icon'>
                        <svg onClick={() => props.deleteItem(props)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </div>
                    <div className='ms-3 me-auto'>
                        <span className='label-title d-block mb-1'>إجمالي البند</span>
                        <span className='main-title'>{currency} {totalItem}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewItem;
