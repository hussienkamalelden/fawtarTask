import React from 'react';

function NewItem() {
    return (

        <div className="new-item">
            <div className='py-4 container'>
                <div className='d-flex mx-4 w-100 flex-wrap'>
                    <div className='ms-3'>
                        <span className='label-title d-block mb-1'>مواصفات البند</span>
                        <textarea className="common-input common-input-textarea" name="" placeholder='مواصفات البند'></textarea>
                    </div>
                    <div className='ms-3'>
                        <span className='label-title d-block mb-1'>التكلفة</span>
                        <input className="common-input" type="number" name="" placeholder='0' />
                    </div>
                    <div className='ms-3'>
                        <span className='label-title d-block mb-1'>العدد</span>
                        <input className="common-input" type="number" name="" placeholder='0' />
                    </div>
                    <div className='ms-3 me-auto'>
                        <span className='label-title d-block mb-1'>إجمالي البند</span>
                        <span className='main-title'>0 EGP</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewItem;
