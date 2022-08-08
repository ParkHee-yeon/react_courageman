import React, { Component } from 'react';
import {Outlet, Link} from 'react-router-dom';
import $ from 'jquery';

class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    $('.main_menu').on({
      mouseenter(){
        $('.sub_menu').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);
        $('.sub_menu').addClass('menu_border');
      }
    });

    $('#nav').on({
      mouseleave(){
        $('.sub_menu').stop().fadeOut(300);
      }
    });

    $('.sub_menu').on({
      mouseleave(){
        $(this).stop().fadeOut(300);
      }
    });
  }
  render() {
    return (
      <div id='header'>
        <header>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div id="sub_nav">
                  <ul>
                    <li><Link to='/LoginComponent'>로그인</Link></li>
                    <li><Link to='/JoinComponent'>회원가입</Link></li>
                    <li><Link to=''>장바구니</Link></li>
                  </ul>
                </div>
                <div id="main_nav">
                  <div id="logo">
                    <h1><Link to='/MainComponent'><img src="./img/메인화면/logo.png" alt="logo" /></Link></h1>
                  </div>
                  <nav id="nav">
                    <ul>
                      <li>
                        <Link to='/StoreComponent' className="main_menu">제품스토어</Link>
                        <div className="sub_menu">
                          <div className="sub_gap">
                            <ul>
                              <li>
                                <Link to='/StoreComponent'>주방용품</Link>
                              </li>
                              <li>
                                <Link to='/StoreComponent'>세탁용품</Link>
                              </li>
                              <li>
                                <Link to='/StoreComponent'>욕실용품</Link>
                              </li>
                              <li>
                                <Link to='/StoreComponent'>사무용품</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to='/ZerowasteComponent' className="main_menu">제로웨이스트샵</Link>
                        <div className="sub_menu">
                          <div className="sub_gap">
                            <ul>
                              <li><Link to='/ZerowasteComponent'>제로웨이스트샵 검색</Link></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to='/GreenComponent' className="main_menu">그린마케팅/챌린지</Link>
                        <div className="sub_menu">
                          <div className="sub_gap">
                            <ul>
                              <li>
                                <Link to='/GreenComponent'>그린마케팅</Link>
                              </li>
                              <li>
                                <Link to='/GreenComponent'>친환경챌린지</Link>
                              </li>
                              <li>
                                <Link to='/GreenComponent'>친환경뉴스</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to='' className="main_menu">고객센터</Link>
                        <div className="sub_menu">
                          <div className="sub_gap">
                            <ul>
                              <li>
                                <Link to=''>공지사항</Link>
                              </li>
                              <li>
                                <Link to=''>자주묻는질문</Link>
                              </li>
                              <li>
                                <Link to=''>상품문의</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>      
        </header>
      </div>
    );
  }
}

export default HeaderComponent;