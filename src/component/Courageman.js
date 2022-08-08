import React, { Component } from 'react';
import SkipComponent from './skip/SkipComponent';
import WrapComponent from './wrap/WrapComponent';



class courageman extends Component {
  render() {
    return (
      <div id='courageman'>
        <SkipComponent/>
        <WrapComponent/>
      </div>
    );
  }
}

export default courageman;