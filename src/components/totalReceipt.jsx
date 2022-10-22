import React, { useState, useEffect } from 'react';

const TotalReceipt = ({ currency, clientName }) => {

    // const [totalItem, setTotalItem] = useState(0);

    return (
        <>
            <div className='container'>
                <div className='total-receipt'>
                    <div className='total-receipt-box mb-3'>
                        <h3>إجمالي السعر</h3>
                        <div className='total-price-holder'>
                            <h3>0 <span className='currency me-1'>{currency}</span></h3>
                        </div>
                    </div>
                    <div className='total-receipt-box mb-2'>
                        <div class="w-50 d-flex align-items-center">
                            <h4>خصم</h4>
                            <input className='common-input special-common-input me-auto ms-0' type="number" /> <h3 className='me-1'> % </h3>
                        </div>
                        <div className='total-price-holder'>
                            <h4>0 <span className='currency me-1'>{currency}</span></h4>
                        </div>
                    </div>
                    <div className='total-receipt-box'>
                        <div class="w-50 d-flex align-items-center">
                            <h4>ضرائب</h4>
                            <input className='common-input special-common-input me-auto ms-0' type="number" /> <h3 className='me-1'> % </h3>
                        </div>
                        <div className='total-price-holder'>
                            <h4>0 <span className='currency me-1'>{currency}</span></h4>
                        </div>
                    </div>
                    <div className='total-receipt-box mt-3'>
                        <div>
                            <h3>السعر الكلي</h3>
                        </div>
                        <div className='total-price-holder'>
                            <h3>0 <span className='currency me-1'>{currency}</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TotalReceipt;