import React, { Component } from 'react';
import SendToClient from './sendToClient'
import ProductReference from './productReference'
import AddItem from './addItem';

class Fatwra extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <SendToClient />
                <ProductReference />
                <AddItem />
            </React.Fragment>
        );
    }
}

export default Fatwra;