import React from 'react';
import SendToClient from './components/sendToClient'
import ProductReference from './components/productReference'
import AddItem from './components/addItem';

function App() {
  return (
    <React.Fragment>
      <SendToClient />
      <ProductReference />
      <AddItem />
    </React.Fragment>
  );
}

export default App;
