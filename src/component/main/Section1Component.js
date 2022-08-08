import React, { Component } from 'react';

class Section1Component extends Component {
  render() {
    return (
      <div id='section1'>
        <section>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="description">
                  <h2>작은 움직임의 시작 "용기맨"</h2>
                  <h3>
                    플라스틱이라는 편리함이 이제는 고통으로 다가온 현 상황에<br />
                    다가가기 위해 적극적으로 나서서 실천 가능한 방법들을 소개합니다.
                  </h3>
                  <h3>
                    플라스틱을 줄이고<br />
                    재활용이 가능한 재료를 사용하여<br />
                    쓰레기 없는 삶을 지향하는 움직임<br />
                    #지속가능한소비 #제로웨이스트 #용기낸소비자 #용기맨
                  </h3>
                </div>
                <div className="img_box1"><img src="https://ParkHee-yeon.github.io/react_courageman/img/메인화면/section1_img.png" alt="section1_img" /></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Section1Component;