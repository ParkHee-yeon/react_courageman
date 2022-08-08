import React, { Component } from 'react';
import {Outlet, Link} from 'react-router-dom';
import $ from 'jquery';

class Section3Component extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    const list = $('.title-list');
    const list1 = $(".title-list1");
    const list2 = $(".title-list2");
    const list3 = $(".title-list3");

    const list_product_box = $(".list-product-box");
    const list_product_box1 = $(".list-product-box1");
    const list_product_box2 = $(".list-product-box2");
    const list_product_box3 = $(".list-product-box3");

    list1.addClass('btn-click-back');
    list_product_box1.addClass('click-product-box');

    list1.on({
      click(){
        list.removeClass('btn-click-back');
        $(this).addClass('btn-click-back');

        list_product_box.removeClass('click-product-box');
        list_product_box1.addClass('click-product-box');
      }
    });

    list2.on({
      click(){
        list.removeClass('btn-click-back');
        $(this).addClass('btn-click-back');

        list_product_box.removeClass('click-product-box');
        list_product_box2.addClass('click-product-box');
      }
    });

    list3.on({
      click(){
        list.removeClass('btn-click-back');
        $(this).addClass('btn-click-back');

        list_product_box.removeClass('click-product-box');
        list_product_box3.addClass('click-product-box');
      }
    });
  }
  render() {
    return (
      <div id='section3'>
        <section>
          <div className="container">
            <div className="gap"> 
              <div className="wrap">
                <div className="title-box">
                  <h3>New Products</h3>
                  <ul>
                    <li className="title-list title-list1"><a href="#!">LATEST</a></li>
                    <li className="title-list title-list2"><a href="#!">BEST SELLER</a></li>
                    <li className="title-list title-list3"><a href="#!">HOT SALE</a></li>
                  </ul>
                </div>
                <div className="product-box">
                  <ul className="list-product-box list-product-box1">
                    <li>
                      <div className="product-box-gap">
                        <Link to='/StoreInfoComponent'>
                          <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list1/빨아쓰는마스크.png" alt="빨아쓰는 마스크" />
                            </div>
                            <div className="product-info">
                              <h3>빨아쓰는 마스크</h3>
                              <h4>22,000원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="product-box-gap">
                        <Link to='/StoreInfoComponent'>
                          <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list1/친환경포장지.png" alt="친환경포장지" />
                            </div>
                            <div className="product-info">
                              <h3>친환경포장지 [허니포켓]</h3>
                              <h4>15,000원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="product-box-gap">
                        <Link to='/StoreInfoComponent'>
                          <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list1/대나무칫솔.png" alt="대나무칫솔" />
                            </div>
                            <div className="product-info">
                              <h3>대나무칫솔</h3>
                              <h4>7,000원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="product-box-gap">
                        <Link to='/StoreInfoComponent'>
                          <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list1/생분해성봉투.png" alt="생분해성봉투" />
                            </div>
                            <div className="product-info">
                              <h3>생분해성 우편봉투 50개입</h3>
                              <h4>42,000원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-product-box list-product-box2">
                    <li>
                      <div className="product-box-gap">
                      <Link to='/StoreInfoComponent'>
                        <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list2/세탁비누.png" alt="무첨가EM 세탁비누 250g" />
                            </div>
                            <div className="product-info">
                              <h3>무첨가EM 세탁비누 250g</h3>
                              <h4>2,000원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="product-box-gap">
                      <Link to='/StoreInfoComponent'>
                        <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list2/친환경화장지.png" alt="친환경 3겹 화장지 휴지 (12롤)" />
                            </div>
                            <div className="product-info">
                              <h3>친환경 3겹 화장지 휴지 (12롤)</h3>
                              <h4>18,900원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="product-box-gap">
                        <Link to='/StoreInfoComponent'>
                          <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list2/비건가글.png" alt="비건가글" />
                            </div>
                            <div className="product-info">
                              <h3>비건 가글</h3>
                              <h4>7,900원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="product-box-gap">
                        <Link to='/StoreInfoComponent'>
                          <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list2/샤워타올.png" alt="삼베 샤워타올" />
                            </div>
                            <div className="product-info">
                              <h3>삼베 샤워타올</h3>
                              <h4>11,900원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-product-box list-product-box3">
                    <li>
                      <div className="product-box-gap">
                        <Link to='/StoreInfoComponent'>
                          <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list3/수세미.png" alt="코코넛수세미(2개입)" />
                            </div>
                            <div className="product-info">
                              <h3>코코넛수세미(2개입)</h3>
                              <h4>2,500원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="product-box-gap">
                        <Link to='/StoreInfoComponent'>
                          <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list3/밀폐용기.png" alt="생분해 밀폐용기 3P세트 2종" />
                            </div>
                            <div className="product-info">
                              <h3>생분해 밀폐용기 3P세트 2종</h3>
                              <h4>15,000원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="product-box-gap">
                        <Link to='/StoreInfoComponent'>
                          <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list3/지퍼백.png" alt="[슈가랩] 사탕수수로 만든 지퍼백(중)" />
                            </div>
                            <div className="product-info">
                              <h3>[슈가랩] 사탕수수로 만든 지퍼백(중)</h3>
                              <h4>2,200원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="product-box-gap">
                        <Link to='/StoreInfoComponent'>
                          <div className="product-box-wrap">
                            <div className="product-img">
                              <img src="https://ParkHee-yeon.github.io/react_courageman/img/제품스토어/메인화면/list3/위생장갑.png" alt="사탕수수로만든 위생장갑 (50매)" />
                            </div>
                            <div className="product-info">
                              <h3>사탕수수로만든 위생장갑 (50매)</h3>
                              <h4>2,200원</h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                  </ul>
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

export default Section3Component;