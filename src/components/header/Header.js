import "./Header.css";

const Header = () => {
  return (
    <div id="hd">
      <div className="hdSub">
        <div className="hdSubInner">
          <div id="tnb">
            <ul className="hd_login">
              <li>
                <div className="logo">
                  <a href="/">
                    <img
                      src="https://janet.co.kr/html_demo/img/common/logo.png"
                      alt="자격증넷"
                    ></img>
                  </a>
                </div>
              </li>

              <li>
                <div className="hd_sch" id="hdSchWr">
                  <form>
                    <fieldset id="hd_sch">
                      <legend>사이트 내 전체검색</legend>
                      <div className="search_tit">통합검색</div>
                      <input
                        type="text"
                        name="stx"
                        id="sch_stx"
                        maxLength="50"
                        placeholder="자격증 꿀팁 보러가기 #취준 #취뽀"
                      />
                      <button type="submit" id="sch_submit" value="검색">
                        <img
                          src="https://janet.co.kr/html_demo/img/common/mainSrchBtn.png"
                          alt="검색"
                        ></img>
                      </button>
                    </fieldset>
                  </form>
                </div>
              </li>
              <ul className="login_wr">
                <li>
                  <a href="#">
                    <span></span>
                    회원가입
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span></span>
                    로그인
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span></span>
                    기업서비스
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          <div id="hd_wrapper">
            <nav id="gnb">
              <div className="logo2">
                <a href="/">
                  <img
                    src="https://janet.co.kr/img/common/header/fix_logo.png"
                    alt="자격증넷"
                  ></img>
                </a>
              </div>

              <div className="gnb_wrap">
                <ul>
                  <li>
                    <button
                      type="button"
                      className="gnb_menu_btn"
                      title="전체메뉴"
                    >
                      <img
                        src="https://janet.co.kr/img/common/header/gnb.png"
                        alt="전체메뉴열기"
                      />
                      <span>전체메뉴열기</span>
                    </button>
                  </li>

                  <li className="gnb_1dli">
                    <a href="#">Top100</a>
                  </li>
                  <li className="gnb_1dli">
                    <a href="#">자격증정보</a>
                  </li>
                  <li className="gnb_1dli">
                    <a href="#">어학/공무원</a>
                  </li>
                  <li className="gnb_1dli">
                    <a href="#">자넷info</a>
                  </li>
                  <li className="gnb_1dli">
                    <a href="#">자넷톡</a>
                  </li>

                  <ul className="float-r">
                    <li className="gnb_1dli">
                      <a href="#" className="gnb_1da">
                        우리동네학원
                      </a>
                    </li>
                    <li className="gnb_1dli">
                      <a href="#" className="gnb_1da">
                        커뮤니티
                      </a>
                    </li>
                    <li className="gnb_1dli">
                      <a href="#" className="gnb_1da">
                        추천
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </nav>
          </div>

          <div id="gnb_all">
            <ul className="gnb_al_ul inner">
              <li className="gnb_al_li">
                <a href="#" className="gnb_al_a">
                  자격증정보
                </a>
                <ul>
                  <li>
                    <a href="#">직무별 자격증</a>
                  </li>
                  <li>
                    <a href="#">계열별정보</a>
                  </li>
                  <li>
                    <a href="#">국제자격증</a>
                  </li>
                  <li>
                    <a href="#">자격증일정</a>
                  </li>
                  <li>
                    <a href="#">시험접수안내</a>
                  </li>
                  <li>
                    <a href="#">학점은행제</a>
                  </li>
                  <li>
                    <a href="#">과정평가형 자격</a>
                  </li>
                  <li>
                    <a href="#">직업정보검색</a>
                  </li>
                  <li>
                    <a href="#">직업사전</a>
                  </li>
                  <li>
                    <a href="#">국가자격대여 근절캠패인</a>
                  </li>
                </ul>
              </li>

              <li className="gnb_al_li">
                <a href="#" className="gnb_al_a">
                  어학/공무원
                </a>
                <ul>
                  <li>
                    <a href="#">어학</a>
                  </li>
                  <li>
                    <a href="#">어학 원서접수 안내</a>
                  </li>
                  <li>
                    <a href="#">공무원</a>
                  </li>
                  <li>
                    <a href="#">공무원 원서접수 안내</a>
                  </li>
                </ul>
              </li>

              <li className="gnb_al_li">
                <a href="#" className="gnb_al_a">
                  자넷info
                </a>
                <ul>
                  <li>
                    <a href="#">자넷뉴스</a>
                  </li>
                  <li>
                    <a href="#">자넷매거진</a>
                  </li>
                  <li>
                    <a href="#">큐넷 이용안내</a>
                  </li>
                  <li>
                    <a href="#">청년지원정책</a>
                  </li>
                  <li>
                    <a href="#">자격증 공모전</a>
                  </li>
                  <li>
                    <a href="#">국가혜택정보</a>
                  </li>
                  <li>
                    <a href="#">대학별 자격특전</a>
                  </li>
                </ul>
              </li>

              <li className="gnb_al_li">
                <a href="#" className="gnb_al_a">
                  자넷톡
                </a>
                <ul>
                  <li>
                    <a href="#">자격증 토론방</a>
                  </li>
                  <li>
                    <a href="#">일반 토론방</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">자넷TV</a>
                  </li>
                  <li></li>
                </ul>
                <a href="#" className="gnb_al_a">
                  우리동네학원
                </a>
                <ul>
                  <li>
                    <a href="#">맞춤학원검색</a>
                  </li>
                  <li>
                    <a href="#">학원 찾아드림</a>
                  </li>
                  <li>
                    <a href="#">우리동네학원 info</a>
                  </li>
                </ul>
              </li>

              <li className="gnb_al_li">
                <a href="#" className="gnb_al_a">
                  자넷추천
                </a>
                <ul>
                  <li>
                    <a href="#">추천테스트</a>
                  </li>
                  <li>
                    <a href="#">추천AI</a>
                  </li>
                  <li>
                    <a href="#">커뮤니티</a>
                  </li>
                </ul>
              </li>

              <li className="gnb_al_li">
                <a href="#" className="gnb_al_a">
                  MY PAGE
                </a>
                <ul>
                  <li>
                    <a href="#">나의 자격증</a>
                  </li>
                  <li>
                    <a href="#">자넷톡</a>
                  </li>
                  <li>
                    <a href="#">즐겨찾기</a>
                  </li>
                  <li>
                    <a href="#">나의정보수정</a>
                  </li>
                  <li>
                    <a href="#">자격증정보수정</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
