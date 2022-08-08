import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeaderComponent from '../header/HeaderComponent';
import FooterComponent from '../footer/FooterComponent';
import MainComponent from '../main/MainComponent';
import StoreComponent from '../store/StoreComponent';
import StoreInfoComponent from '../store/StoreInfoComponent';
import ZerowasteComponent from '../zerowaste/ZerowasteComponent';
import GreenComponent from '../green/GreenComponent';
import LoginComponent from '../login/LoginComponent';
import JoinComponent from '../join/JoinComponent';

class WrapComponent extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div id='wrap'>
          <HeaderComponent/>
          <Routes>
            <Route path='/' element={<HeaderComponent/>}/>
            <Route index element={<MainComponent/>}/>
            <Route path='/MainComponent' element={<MainComponent/>}/>
            <Route path='/StoreComponent' element={<StoreComponent/>}/>
            <Route path='/StoreInfoComponent' element={<StoreInfoComponent/>}/>
            <Route path='/ZerowasteComponent' element={<ZerowasteComponent/>}/>
            <Route path='/GreenComponent' element={<GreenComponent/>}/>
            <Route path='/LoginComponent' element={<LoginComponent/>}/>
            <Route path='/JoinComponent' element={<JoinComponent/>}/>
          </Routes>
          <FooterComponent />
        </div>
      </BrowserRouter>
    );
  }
}

export default WrapComponent;