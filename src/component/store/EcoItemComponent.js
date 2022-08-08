import React, { Component } from 'react';
import {Outlet, Link} from 'react-router-dom';

class EcoItemComponent extends Component {
  render() {
    return (
      <div id='eco_item'>
        <section>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="eco_title_box">
                  <h2>주방용품</h2>
                  <ul>
                    <li>#조리도구</li>
                    <li>#밀폐용기</li>
                    <li>#생분해성비닐</li>
                  </ul>
                </div>
                <div className="eco_item_box">
                  <ul>
                    <li>
                      <div className="eco_img_box">
                        <Link to='/StoreInfoComponent'>
                          <img src="./img/제품스토어/메인화면/list3/위생장갑.png" alt="사탕수수로만든 위생장갑 (50매)" />
                        </Link>
                      </div>
                      <div className="eco_info_box">                     
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
                    <li>
                      <div className="eco_img_box">
                        <Link to='/StoreInfoComponent'>
                          <img src="./img/제품스토어/주방용품/키친타올.png" alt="[BOHO] 친환경 먼지없는 대나무 롤 키친타올 (130매/6롤)" />
                        </Link>
                      </div>
                      <div className="eco_info_box">                     
                        <strong className="name">
                          <Link to='/StoreInfoComponent'>
                            <span>
                              친환경 먼지없는 대나무 롤 키친타올 (130매/6롤)
                            </span>
                          </Link>
                        </strong>
                        <div className="line"></div>
                        <span>6,900원</span>
                      </div>
                    </li>
                    <li>
                      <div className="eco_img_box">
                        <Link to='/StoreInfoComponent'>
                          <img src="./img/제품스토어/메인화면/list3/밀폐용기.png" alt="생분해 밀폐용기 3P세트 2종" />
                        </Link>
                      </div>
                      <div className="eco_info_box">                     
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
                      <div className="eco_img_box">
                        <Link to='/StoreInfoComponent'>
                          <img src="./img/제품스토어/메인화면/list3/지퍼백.png" alt="사탕수수로 만든 지퍼백(중)" />
                        </Link>
                      </div>
                      <div className="eco_info_box">                     
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
                      <div className="eco_img_box">
                        <Link to='/StoreInfoComponent'>
                          <img src="./img/제품스토어/주방용품/수세미.png" alt="코코넛수세미" />
                        </Link>
                      </div>
                      <div className="eco_info_box">                     
                        <strong className="name">
                          <Link to='/StoreInfoComponent'>
                            <span>
                              코코넛수세미(2개입)
                            </span>
                          </Link>
                        </strong>
                        <div className="line"></div>
                        <span>2,500원</span>
                      </div>
                    </li>
                    <li>
                      <div className="eco_img_box">
                        <Link to='/StoreInfoComponent'>
                          <img src="./img/제품스토어/메인화면/list1/친환경포장지.png" alt="친환경포장지 [허니포켓]" />
                        </Link>
                      </div>
                      <div className="eco_info_box">                     
                        <strong className="name">
                          <Link to='/StoreInfoComponent'>
                            <span>
                              친환경포장지 [허니포켓]
                            </span>
                          </Link>
                        </strong>
                        <div className="line"></div>
                        <span>15,000원</span>
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

export default EcoItemComponent;