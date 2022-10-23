import React, { useEffect } from 'react';

const TotalReceipt = ({ currency, itemsCosts, discount, setDiscount, taxes, setTaxes, finalCost, setFinalCost }) => {

    //Functions
    useEffect(() => {
        let finalDiscount = itemsCosts * (discount / 100);
        let finalTaxes = itemsCosts * (taxes / 100);
        let final = parseInt(itemsCosts) - finalDiscount + finalTaxes;
        setFinalCost(Math.round(final * 10) / 10)
    }, [taxes, discount, itemsCosts])

    return (
        <>
            <div className='container p-5'>
                <div className='total-receipt'>
                    <div className='total-receipt-box mb-3'>
                        <h3>إجمالي السعر</h3>
                        <div className='total-price-holder'>
                            <h3><span className='currency me-1'>{currency}</span> {itemsCosts}</h3>
                        </div>
                    </div>
                    <div className='total-receipt-box mb-2'>
                        <div className="w-50 d-flex align-items-center">
                            <h4>خصم</h4>
                            <input className='common-input special-common-input me-auto ms-0' type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} /> <h3 className='me-1'> % </h3>
                        </div>
                        <div className='total-price-holder'>
                            <h4>
                                <span className='currency me-1'>{currency}</span>
                                <span className='discount-total' style={{ color: 'limegreen' }}>{Math.round((itemsCosts * (discount / 100)) * 10) / 10}</span>
                            </h4>
                        </div>
                    </div>
                    <div className='total-receipt-box'>
                        <div className="w-50 d-flex align-items-center">
                            <h4>ضرائب</h4>
                            <input className='common-input special-common-input me-auto ms-0' type="number" value={taxes} onChange={(e) => setTaxes(e.target.value)} /> <h3 className='me-1'> % </h3>
                        </div>
                        <div className='total-price-holder'>
                            <h4>
                                <span className='currency me-1'>{currency}</span>
                                <span className='taxes-total' style={{ color: 'red' }}>{Math.round((itemsCosts * (taxes / 100)) * 10) / 10}</span>
                            </h4>
                        </div>
                    </div>
                    <div className='total-receipt-box mt-3'>
                        <div>
                            <h3>السعر الكلي</h3>
                        </div>
                        <div className='total-price-holder'>
                            <h3><span className='currency me-1'>{currency} {finalCost}</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TotalReceipt;