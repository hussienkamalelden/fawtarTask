import React from 'react';
import { DeleteIcon, ResetIcon } from './icons';

const NewItem = (props) => {

    return (
        <div className="new-item">
            <div className='py-4 container'>
                <div className='d-flex mx-4 w-100 flex-wrap'>
                    <div className='ms-3'>
                        <span className='label-title d-block mb-1'>مواصفات البند</span>
                        <textarea className="common-input common-input-textarea" name="" onChange={(e) => props.handleController(props.data, e.target.value, 'description')} value={props.data.description} placeholder='مواصفات البند' ></textarea>
                    </div>
                    <div className='ms-3'>
                        <span className='label-title d-block mb-1'>التكلفة بالجنية</span>
                        <input className="common-input" type="number" name="" placeholder={props.data.cost} value={props.data.cost} onChange={(e) => props.handleController(props.data, e.target.value, 'cost')} />
                        <span className='currency me-1'>{props.currency}</span>
                    </div>
                    <div className='ms-3'>
                        <span className='label-title d-block mb-1'>العدد</span>
                        <input className="common-input" type="number" name="" placeholder={props.data.quantity} value={props.data.quantity} onChange={(e) => props.handleController(props.data, e.target.value, 'quantity')} />
                    </div>
                    <div className='reset-icon'>
                        <ResetIcon data={props.data} resetItem={props.resetItem} />
                    </div>
                    <div className='delete-icon'>
                        <DeleteIcon data={props.data} deleteItem={props.deleteItem} />
                    </div>
                    <div className='ms-3 me-auto'>
                        <span className='label-title d-block mb-1'>إجمالي البند</span>
                        <span className='main-title'>{props.currency} {props.data.total}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewItem;
