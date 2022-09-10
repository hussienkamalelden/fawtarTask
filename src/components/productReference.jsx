import React from 'react';

function ProductReference() {
    return (
        <div className="product-reference" style={{ backgroundColor: "#F8F9FB" }}>
            <div className="container">
                <div className='py-4 d-flex'>
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
                        <select className="common-input">
                            <option>EGP</option>
                            <option>USD</option>
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
    );
}

export default ProductReference;
