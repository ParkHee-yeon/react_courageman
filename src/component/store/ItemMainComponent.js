import React, { Component } from 'react';

class ItemMainComponent extends Component {
  render() {
    return (
      <div id='item_main'>
        <section>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="item_title_box">
                  <h2>생분해 밀폐용기 3P세트 2종</h2>
                </div>
                <div className="item_img_info">
                  <ul>
                    <li>
                      <div className="item_img_box">
                        <img src="./img/제품스토어/메인화면/list3/밀폐용기.png" alt="생분해 밀폐용기 3P세트 2종" />
                      </div>
                      <div className="item_menu_box">
                        <ul>
                          <li><a href="#!">사용자리뷰</a></li>
                          <li><a href="#!">배송문의</a></li>
                          <li><a href="#!">상품문의</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="item_option_box">
                        <div className="item_price">
                          <dl className="item_sale">
                              <dt>판매가</dt>
                              <dd><em className="item_ori_price">32,000</em>원</dd>
                              <dt>할인가</dt>
                              <dd><strong>26,900</strong>원</dd>
                          </dl>
                          <dl className="item_volume">
                              <dt>용량/사이즈</dt>
                              <dd>3종세트(450ml, 900ml, 2L)</dd>
                          </dl>
                          <dl className="item_delivery">
                            <dt>배송비</dt>
                            <dd>3,000원</dd>
                            <dt>제조사</dt>
                            <dd>EARTHMILE</dd>
                            <dt>원산지</dt>
                            <dd>한국</dd>
                          </dl>
                        </div>
                        <div className="input_option">
                          <div className="input_option_chk">
                            <span className="chk_icon"></span>
                            <span className="chk">수량</span>
                            <span className="chk_option"><strong>26,900</strong>원</span>
                            <input type="number" min="1" max="10" value="1" />
                          </div>
                          <div className="input_option_total">
                            <dl className="total">
                                <dt>
                                    <strong>총 상품금액</strong>
                                </dt>
                                <dd>
                                    <strong>26,900</strong>
                                    <span>원</span>
                                </dd>
                            </dl>
                        </div>
                        </div>
                        <div className="item_btn">
                          <a href="#!" className="item_order">바로구매</a>
                          <a href="#!" className="item_cart">장바구니</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ItemMainComponent;