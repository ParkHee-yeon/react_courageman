import React, { Component } from 'react';
import '../../css/login.css';

class LoginComponent extends Component {
  render() {
    return (
      <div id='main'>
        <section id="login">
          <div className="container">
            <div className="gap">
              <div className="wrap">  
                <div className="login_title">
                  <span>LOGIN</span>
                </div>
                <div className="login_input">
                  <input type="text" placeholder="아이디" required />
                  <input type="password" placeholder="비밀번호" required />
                </div>
                <div className="login_btn">
                  <button>LOGIN</button>
                </div>
                <div className="login_join">
                  <ul>
                    <li><a href="#!">아이디 찾기</a></li>
                    <li>|</li>
                    <li><a href="#!">비밀번호 찾기</a></li>
                    <li>|</li>
                    <li><a href="#!">회원가입</a></li>
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

export default LoginComponent;