import React, { Component } from 'react';
import {Outlet, Link} from 'react-router-dom';

class Section2Component extends Component {
  render() {
    return (
      <div id='section2'>
        <section>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="ecostore">
                  <Link to='/StoreComponent'>
                    <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/ico_ecostore.png" alt="친환경스토어" />
                    <div className="description-box">
                      <h4>친환경 소재인 제품을 소비자들이 보다 <br />쉽게 구입할 수 있는 스토어</h4>
                      <h3>친환경 제품 스토어</h3>
                    </div>
                  </Link>
                </div>
                <div className="zero_news">
                  <div className="zerowaste">
                  <Link to='/ZerowasteComponent'>
                    <div className="description-box">
                      <h4>낭비 없는 착한 소비를 도와주는</h4>
                      <h3>제로웨이스트샵</h3>
                    </div>
                    <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/ico_zerowaste.png" alt="제로웨이스트" />
                  </Link>
                  </div>
                  <div className="greennews">
                  <Link to='/GreenComponent'>
                    <div className="description-box">
                      <h4>환경인식 재고 및 동참을 격려하는</h4>
                      <h3>그린마케팅 및 챌린지 알림</h3>
                    </div>
                    <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/ico_greennews.png" alt="그린마케팅 및 챌린지" />
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Outlet/>
        </section>
      </div>
    );
  }
}

export default Section2Component;