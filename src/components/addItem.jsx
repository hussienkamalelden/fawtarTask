import React, { Component } from 'react';
import NewItem from './newItem';

class AddItem extends Component {
    state = {
        items: [
            <NewItem key="1" />
        ]
    }
    addNewItem = () => {
        let items = [...this.state.items];
        items.push(<NewItem key={Math.random() * 1000} />);
        this.setState({ items });
    }
    render() {
        return (
            <div className="add-item">
                <div className='container pt-4'>
                    <span className='main-title'>إضافة بند</span>
                </div>
                <div id="add-new-items">
                    {this.state.items.map(component => component)}
                </div>
            </div>
        );
    }
}

export default AddItem;
