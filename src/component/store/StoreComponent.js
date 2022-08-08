import React, { Component } from 'react';
import BestItemComponent from './BestItemComponent';
import EcoItemComponent from './EcoItemComponent';
import '../../css/store.css';

class StoreComponent extends Component {
  render() {
    return (
      <div id='main'>
        <BestItemComponent/>
        <EcoItemComponent/>
      </div>
    );
  }
}

export default StoreComponent;