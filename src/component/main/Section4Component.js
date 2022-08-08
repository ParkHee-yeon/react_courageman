import React, { Component } from 'react';

class Section4Component extends Component {
  render() {
    return (
      <div id='section4'>
        <section>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="service-title-box">
                  <h3>용기맨은 고객님의 의견을 <span>소중히 생각합니다.</span></h3>
                  <ul>
                    <li>
                      <div className="service-wrap">
                        <h4><span>자주 묻는 질문</span>에서<br />먼저 확인해주세요.</h4>
                      </div>
                    </li>
                    <li>
                      <div className="service-wrap">
                        <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/질문아이콘.png" alt="자주묻는질문" />
                      </div>
                    </li>
                    <li>
                      <div className="service-wrap">
                        <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/화살표아이콘.png" alt="화살표" />
                      </div>
                    </li>
                    <li>
                      <div className="service-wrap">
                        <h4><span>서비스 문의하기</span>를<br /> 이용해주세요.</h4>
                      </div>
                    </li>
                    <li>
                      <div className="service-wrap">
                        <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/문의아이콘.png" alt="서비스 문의" />
                      </div>
                    </li>
                    <li>
                      <div className="service-wrap">
                        <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/화살표아이콘.png" alt="화살표" />
                      </div>
                    </li>
                    <li>
                      <div className="service-wrap">
                        <h4>고객센터 상담원에게<br /><span>전화문의</span>를 해주세요.</h4>
                      </div>
                    </li>
                    <li>
                      <div className="service-wrap">
                        <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/콜아이콘.png" alt="전화문의" />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="service-content-box">
                  <ul>
                    <li>
                      <div className="service-content-title">
                        <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/체크아이콘.png" alt="공지사항" />
                        <p>공지사항</p>
                      </div>
                    </li>
                    <li>
                      <div className="service-content-title">
                        <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/체크아이콘.png" alt="자주 묻는 질문" />
                        <p>자주 묻는 질문</p>
                      </div>
                    </li>
                    <li>
                      <div className="service-content-title">
                        <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/체크아이콘.png" alt="고객센터" />
                        <p>고객센터</p>
                      </div>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div className="service-gap">
                        <div className="service-content-table">
                          <table>
                            <th>제목</th>
                            <th>등록일</th>
                            <tr>
                              <td>개인정보처리방침 변경 안내</td>
                              <td>2021.07.26</td>
                            </tr>
                            <tr>
                              <td>결제하기 버튼이 눌리지 않을 경우</td>
                              <td>2021.07.20</td>
                            </tr>
                            <tr>
                              <td>서버 점검에 따른 이용안내</td>
                              <td>2021.07.14</td>
                            </tr>
                            <tr>
                              <td>회원가입시 1,000원 할인쿠폰 증정</td>
                              <td>2021.06.20</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="service-gap">
                        <div className="service-content-table">
                          <table>
                            <th>분류</th>
                            <th>질문</th>
                            <tr>
                              <td>상품문의</td>
                              <td>재입고 일정이 어떻게 되나요?</td>
                            </tr>
                            <tr>
                              <td>회원정보</td>
                              <td>아이디/비밀번호를 분실했습니다.</td>
                            </tr>
                            <tr>
                              <td>회원정보</td>
                              <td>회원정보를 변경하고싶어요.</td>
                            </tr>
                            <tr>
                              <td>취소/환불/반품</td>
                              <td>주문취소는 어떻게 하나요?</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="service-gap">
                        <div className="service-call-box">
                          <div className="call-number">
                            <img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/전화아이콘.png" alt="고객센터 전화번호" />
                            <h3>02-123-4567</h3>
                          </div>
                          <div className="call-info">
                            <p>평일 &gt; 오전 9시 ~ 오후 6시<br />(점심시간 &gt; 오후 12시 ~ 1시)</p>
                            <p>주말 & 공휴일 &gt; 휴무</p>
                            <p>업무 외 시간에는 <span>서비스 문의하기</span>를 이용해주세요.</p>
                          </div>
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

export default Section4Component;