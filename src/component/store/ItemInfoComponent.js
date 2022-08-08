import React, { Component } from 'react';

class ItemInfoComponent extends Component {
  render() {
    return (
      <div id='item_info'>
        <section>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="info_menu_box">
                  <ul>
                    <li className="info_click">상품상세정보</li>
                    <li>사용자리뷰</li>
                    <li>상품정보제공고시</li>
                    <li>구매시 유의사항</li>
                  </ul>
                </div>
                <div className="info_img_box">
                  <img src="./img/제품스토어/상세화면/밀폐용기_상세화면.jpg" alt="생분해 밀폐용기 3P세트 2종 상세이미지" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ItemInfoComponent;