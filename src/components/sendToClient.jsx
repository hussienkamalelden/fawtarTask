import React from 'react';

function SendToClient() {
    return (
        <div className='send-to-client container py-4'>
            <span className='label-title d-block mb-1'>إرسل الي العميل</span>
            <input className="common-input w-25" type="text" name="client-name" placeholder='اسم العميل' />
        </div>
    );
}

export default SendToClient;
