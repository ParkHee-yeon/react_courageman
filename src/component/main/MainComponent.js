import React, { Component } from 'react';
import Section1Component from './Section1Component';
import Section2Component from './Section2Component';
import Section3Component from './Section3Component';
import Section4Component from './Section4Component';

class MainComponent extends Component {
  render() {
    return (
      <div id='main'>
        <Section1Component />
        <Section2Component />
        <Section3Component />
        <Section4Component />
      </div>
    );
  }
}

export default MainComponent;