import React, { Component } from 'react';
import ItemMainComponent from './ItemMainComponent';
import ItemInfoComponent from './ItemInfoComponent';
import '../../css/store_info.css';

class StoreInfoComponent extends Component {
  render() {
    return (
      <div id='main'>
        <ItemMainComponent/>
        <ItemInfoComponent/>
      </div>
    );
  }
}

export default StoreInfoComponent;