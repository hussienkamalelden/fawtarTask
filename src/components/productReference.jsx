import React, { useState, useEffect } from 'react';
import AddItem from './addItem';

function ProductReference({ props, clientName }) {

    const [currency, setCurrency] = useState('EGP');

    return (
        <>
            <div className="product-reference" style={{ backgroundColor: "#F8F9FB" }}>
                <div className="container">
                    <div className='py-4 d-flex flex-wrap'>
                        <div className='ms-3'>
                            <span className='label-title d-block mb-1'>رقم المنتج المرجعي (اختياري)</span>
                            <input className="common-input w-100" type="text" name="client-name" placeholder='رقم المنتج' />
                        </div>
                        <div className='ms-3'>
                            <span className='label-title d-block mb-1'>إنتهاء الفاتوة في</span>
                            <input className="common-input" type="date" name="invoice-endate" />
                        </div>
                        <div className='ms-3'>
                            <span className='label-title d-block mb-1'>العملة</span>
                            <select className="common-input" onChange={(e) => setCurrency(e.target.value)}>
                                <option value='EGP'>EGP</option>
                                <option value='USD'>USD</option>
                            </select>
                        </div>
                        <div className='ms-3'>
                            <span className='label-title d-block mb-1'>اختار القسم</span>
                            <select className="common-input">
                                <option>مكتب مبيعات القاهرة</option>
                                <option>مكتب مبيعات اسكندرية</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <AddItem currency={currency} />
        </>
    );
}

export default ProductReference;
