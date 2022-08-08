import React, { Component } from 'react';
import '../../css/zerowaste.css';

class ZerowasteComponent extends Component {
  render() {
    return (
      <div id='main'>
        <div className="container">
          <div className="gap">
            <div className="wrap">
              <div className="zero_waste_title">
                <h3>FIND US</h3>
                <h2>제로웨이스트샵 매장 안내</h2>
                <p>원하는 지역에서 제로웨이스트샵을 찾아 폐기물을 줄이고 비용을 절약하세요.</p>
              </div>
              <div className="zero_waste_map">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1HLziDjUTyTIHxjZAb9plpIZraimJ4afK"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ZerowasteComponent;