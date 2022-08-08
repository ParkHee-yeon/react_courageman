import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <div id='footer'>
        <footer>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="footer-menu">
                  <ul>
                    <li>개인정보처리방침</li>
                    <li>|</li>
                    <li>홈페이지 이용약관</li>
                    <li>|</li>
                    <li>위치정보 이용약관</li>
                    <li>|</li>
                    <li>비회원 이용약관</li>
                    <li>|</li>
                    <li>광고상품안내</li>
                    <li>|</li>
                    <li>회사소개</li>
                  </ul>
                </div>
                <div className="footer-info">
                  <ul>
                    <li>사업자등록번호 : 123-45-67890</li>
                    <li>|</li>
                    <li>회사명 : (주)용기맨 대표자: 박희연 </li>
                    <li>|</li>
                    <li>개인정보 책임자 : 박희연</li>
                  </ul>
                </div>
                <div className="company-info">
                  <ul>
                    <li>주소 : 서울특별시 가나다구 라마로 123</li>
                    <li>|</li>
                    <li>대표전화 : 02-123-4567 </li>
                    <li>|</li>
                    <li>E-mail : CouarageEnvironment@naver.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;