import React, { useState } from 'react';
import ProductReference from './productReference';

function SendToClient() {

    const [clientName, setClientName] = useState('اسم العميل');

    return (
        <>
            <div className='send-to-client container py-4'>
                <span className='label-title d-block mb-1'>إرسل الي العميل</span>
                <input className="common-input w-25" type="text" name="client-name" onChange={(e) => setClientName(e.target.value)} placeholder={clientName} />
            </div>
            <ProductReference clientName={clientName} />
        </>
    );
}

export default SendToClient;
