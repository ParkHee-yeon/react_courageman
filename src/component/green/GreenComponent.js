import React, { Component } from 'react';
import '../../css/green.css';
import $ from 'jquery';

class GreenComponent extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    const green_menu = $(".green_menu");
    const green_menu1 = $(".green_menu1");
    const green_menu2 = $(".green_menu2");
    const green_menu3 = $(".green_menu3");

    const banner = $("#banner");
    const banner_img = $(".banner_img");

    const green_mk_list = $(".green_mk_list");
    const eco_ch_list = $(".eco_ch_list");
    const eco_news_list = $(".eco_news_list");
    
    green_menu1.addClass('click_menu');
    banner.addClass('green_bg_banner');
    banner_img.addClass('green_banner');
    green_mk_list.addClass('mk_menu');

    green_menu1.on({
      click(){
        green_menu.removeClass('click_menu');
        green_menu1.addClass('click_menu');

        banner.removeClass('challenge_bg_banner');
        banner.removeClass('news_bg_banner');
        banner.addClass('green_bg_banner');

        banner_img.removeClass('challenge_banner');
        banner_img.removeClass('news_banner');
        banner_img.addClass('green_banner');

        eco_ch_list.removeClass('mk_menu');
        eco_news_list.removeClass('mk_menu');
        green_mk_list.addClass('mk_menu');
      }
    });
    green_menu2.on({
      click(){
        green_menu.removeClass('click_menu');
        green_menu2.addClass('click_menu');

        banner.removeClass('green_bg_banner');
        banner.removeClass('news_bg_banner');
        banner.addClass('challenge_bg_banner');

        banner_img.removeClass('green_banner');
        banner_img.removeClass('news_banner');
        banner_img.addClass('challenge_banner');

        green_mk_list.removeClass('mk_menu');
        eco_news_list.removeClass('mk_menu');
        eco_ch_list.addClass('mk_menu');
      }
    });
    green_menu3.on({
      click(){
        green_menu.removeClass('click_menu');
        green_menu3.addClass('click_menu');

        banner.removeClass('green_bg_banner');
        banner.removeClass('challenge_bg_banner');
        banner.addClass('news_bg_banner');

        banner_img.removeClass('green_banner');
        banner_img.removeClass('challenge_banner');
        banner_img.addClass('news_banner');

        green_mk_list.removeClass('mk_menu');
        eco_ch_list.removeClass('mk_menu');
        eco_news_list.addClass('mk_menu');
      }
    });
  }
  render() {
    return (
      <div id='main'>
        <div id='banner'>
          <section>
            <div className="container">
              <div className="gap">
                <div className="wrap">
                  <div className="banner-box">
                    <div className="banner_img"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id='green_list'>
        <section>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="green_menu_box">
                  <ul>
                    <li className="green_menu green_menu1"><a href="#!">그린마케팅</a></li>
                    <li className="green_menu green_menu2"><a href="#!">친환경챌린지</a></li>
                    <li className="green_menu green_menu3"><a href="#!">친환경뉴스</a></li>
                  </ul>
                </div>
                <div className="green_list_box">
                  <ul className="green_mk_list">
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_img">
                          <img src="./img/그린마케팅/에뛰드.png" alt="에뛰드, 지구의 날 기념 비건 화장품 출시" />
                        </div>
                        <div className="green_mk_info">
                          <h2>에뛰드, 지구의 날 기념 비건 화장품 출시</h2>
                          <h4>2021.09.26</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_img">
                          <img src="./img/그린마케팅/코카콜라.png" alt="코카콜라, 100% 식물성 페트병 시제품 발표" />
                        </div>
                        <div className="green_mk_info">
                          <h2>코카콜라, 100% 식물성 페트병 시제품 발표</h2>
                          <h4>2021.09.26</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_img">
                          <img src="./img/그린마케팅/맥도날드.png" alt="맥도날드 친환경 캠페인 '스케이 포 굳' 시행" />
                        </div>
                        <div className="green_mk_info">
                          <h2>맥도날드 친환경 캠페인 '스케이 포 굳' 시행</h2>
                          <h4>2021.09.26</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_box">
                          <div className="green_mk_img">
                            <img src="./img/그린마케팅/올리브영.png" alt="올리브영 뷰티사이클 실행" />
                          </div>
                          <div className="green_mk_info">
                            <h2>올리브영 뷰티사이클 실행</h2>
                            <h4>2021.09.26</h4>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_box">
                          <div className="green_mk_img">
                            <img src="./img/그린마케팅/스타벅스.png" alt="스타벅스 국내 컵커피 최초 종이빨대 출시" />
                          </div>
                          <div className="green_mk_info">
                            <h2>스타벅스 국내 컵커피 최초 종이빨대 출시</h2>
                            <h4>2021.09.26</h4>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="eco_ch_list">
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_img">
                          <img src="./img/친환경챌린지/굿네이버스챌린지.jpg" alt="[굿네이버스 x 환경부] 지구를 위한 거절, 괜찮아요 챌린지" />
                        </div>
                        <div className="green_mk_info">
                          <h2>[굿네이버스 x 환경부] 지구를 위한 거절, 괜찮아요 챌린지</h2>
                          <h4>2021.08.11 - 2021.08.31</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_box">
                          <div className="green_mk_img">
                            <img src="./img/친환경챌린지/글라스락챌린지.jpg" alt="[글라스락] No 플라스틱 용기내 픽업 챌린지" />
                          </div>
                          <div className="green_mk_info">
                            <h2>[글라스락] No 플라스틱 용기내 픽업 챌린지</h2>
                            <h4>2021.04.25 - 2021.05.20</h4>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_img">
                          <img src="./img/친환경챌린지/용기내챌린지.jpg" alt="지구의 날 SNS 챌린지 #용기내서 용기내" />
                        </div>
                        <div className="green_mk_info">
                          <h2>지구의 날 SNS 챌린지 #용기내서 용기내</h2>
                          <h4>2021.04.01 - 2021.04.30</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_img">
                          <img src="./img/친환경챌린지/스타벅스챌린지.png" alt="[스타벅스 x 환경재단] 스타벅스와 함께하는 #친환경다짐챌린지" />
                        </div>
                        <div className="green_mk_info">
                          <h2>[스타벅스 x 환경재단] 스타벅스와 함께하는 #친환경다짐챌린지</h2>
                          <h4>2020.10.08 - 2020.10.20</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="eco_news_list">
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_img">
                          <img src="./img/친환경뉴스/분리배출뉴스.jpg" alt="긴 '집콕'에 늘어난 쓰레기…올바른 분리 배출법" />
                        </div>
                        <div className="green_mk_info">
                          <h2>긴 '집콕'에 늘어난 쓰레기…올바른 분리 배출법</h2>
                          <h4>2021.09.26</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_img">
                          <img src="./img/친환경뉴스/요일분리배출.jpg" alt="라벨은 떼고, 뚜껑은? 투명페트병 분리수거 이렇게 하세요" />
                        </div>
                        <div className="green_mk_info">
                          <h2>라벨은 떼고, 뚜껑은? 투명페트병 분리수거 이렇게 하세요</h2>
                          <h4>2021.09.20</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="green_mk_box">
                        <div className="green_mk_img">
                          <img src="./img/친환경뉴스/지구온도.jpg" alt="지구 온도가 1℃ 오르면?…" />
                        </div>
                        <div className="green_mk_info">
                          <h2>지구 온도가 1℃ 오르면?…</h2>
                          <h4>2021.08.01</h4>
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
      </div>
    );
  }
}

export default GreenComponent;