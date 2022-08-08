import React, { Component } from 'react';
import {Outlet, Link} from 'react-router-dom';

class BestItemComponent extends Component {
  render() {
    return (
      <div id='best_item'>
        <section>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="best_title_box">
                  <h2>베스트 아이템</h2>
                </div>
                <div className="best_item_box">
                  <ul>
                    <li>
                      <div className="best_img_box">
                        <Link to='/StoreInfoComponent'>
                          <img src="./img/제품스토어/메인화면/list3/밀폐용기.png" alt="생분해 밀폐용기 3P세트 2종" />
                        </Link>
                      </div>
                      <div className="best_info_box">
                        <strong className="name">
                          <Link to='/StoreInfoComponent'>
                            <span>
                              생분해 밀폐용기 3P세트 2종
                            </span>
                          </Link>
                        </strong>
                        <div className="line"></div>
                        <span>15,000원</span>
                      </div>
                    </li>
                    <li>
                      <div className="best_img_box">
                        <Link to='/StoreInfoComponent'>
                          <img src="./img/제품스토어/메인화면/list3/지퍼백.png" alt="사탕수수로 만든 지퍼백(중)" />
                        </Link>
                      </div>
                      <div className="best_info_box">
                        <strong className="name">
                          <Link to='/StoreInfoComponent'>
                            <span>
                              사탕수수로 만든 지퍼백(중)
                            </span>
                          </Link>
                        </strong>
                        <div className="line"></div>
                        <span>2,200원</span>
                      </div>
                    </li>
                    <li>
                      <div className="best_img_box">
                        <Link to='/StoreInfoComponent'>
                          <img src="./img/제품스토어/메인화면/list3/위생장갑.png" alt="사탕수수로만든 위생장갑 (50매)" />
                        </Link>
                      </div>
                      <div className="best_info_box">
                        <strong className="name">
                          <Link to='/StoreInfoComponent'>
                            <span>
                              사탕수수로만든 위생장갑 (50매)
                            </span>
                          </Link>
                        </strong>
                        <div className="line"></div>
                        <span>2,200원</span>
                      </div>
                    </li>
                  </ul>
                  <Outlet/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BestItemComponent;