import "./Info.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Info = () => {
  return (
    <section id="info">
      <div className="infoInner">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            type: "fraction",
          }}
          className="imgBanner"
        >
          <SwiperSlide className="sw1">
            <a herf="#"></a>
          </SwiperSlide>
          <SwiperSlide className="sw2">
            <a href="#"></a>
          </SwiperSlide>
          <SwiperSlide className="sw3">
            <a href="#"></a>
          </SwiperSlide>
          <SwiperSlide className="sw4">
            <a href="#"></a>
          </SwiperSlide>
        </Swiper>

        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={true}
          spaceBetween={30}
          className="mainInfo"
        >
          <SwiperSlide>
            <h1 className="title">자격증정보</h1>
            <ul className="mainList">
              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/inCrfc.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>자격증정보</h3>
                    <p>자격증정보의 모든 것</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/iCrtfc.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>계열별정보</h3>
                    <p>자격증에 대하여 알려드립니다.</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/sCrtfc.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>자격증 공모전</h3>
                    <p>자격증 관련 공모전 정보 확인하기</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/rCrtfc.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>시험접수안내</h3>
                    <p>필기/실기 기본접수안내</p>
                  </div>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <SwiperSlide>
            <h1 className="title">자넷Info</h1>
            <ul className="mainList">
              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/bMagazine.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>자넷매거진</h3>
                    <p>다양한 자격증 매거진</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/bNews.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>뉴스</h3>
                    <p>오늘의 최신뉴스는?</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/event.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>청년지원정책</h3>
                    <p>다양한 지원정책을 한눈에!</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/ad_info.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>
                      공인중개사
                      <br />
                      원서접수
                    </h3>
                    <p>가장빠른 원서 접수 꿀팁</p>
                  </div>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <SwiperSlide>
            <h1 className="title">커뮤니티</h1>
            <ul className="mainList">
              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/bBest.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>베스트글</h3>
                    <p>자넷의 인기 베스트글 모음</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/hot_issue.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>오늘의 핫이슈</h3>
                    <p>핫이슈 키워드가 궁금하다면?</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/bFree.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>자유게시판</h3>
                    <p>자유로운 주제를 나누는 공간</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/bHumor.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>유머게시판</h3>
                    <p>나만의 유머를 소통해보세요</p>
                  </div>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <SwiperSlide>
            <h1 className="title">추천</h1>
            <ul className="mainList">
              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/ai_rcmd.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>자넷 AI 추천</h3>
                    <p>AI 분석을 통한 자격증 추천</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/jprs_test.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>
                      JPRS추천
                      <br />
                      테스트
                    </h3>
                    <p>내성향에 맞는 자격증은?</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/job_test.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>
                      직업성향
                      <br />
                      테스트
                    </h3>
                    <p>내게 맞는 직업은?</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/big5_test.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>
                      Oxford
                      <br />
                      BIG5테스트
                    </h3>
                    <p>자세한 직업분석이 필요하다면?</p>
                  </div>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <SwiperSlide>
            <h1 className="title">자넷톡</h1>
            <ul className="mainList">
              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/bQna.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>자넷 질문톡</h3>
                    <p>궁금증을 풀어드려요!</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/janettv.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>자넷 TV</h3>
                    <p>자넷의 영상컨텐츠 살펴보기</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/faq.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>FAQ</h3>
                    <p>
                      자넷에 대해
                      <br />
                      궁금할 땐?
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <SwiperSlide>
            <h1 className="title">우리동네 학원은 ?</h1>
            <ul className="mainList">
              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/jnTown1.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>맞춤학원검색</h3>
                    <p>나에게 맞는 맞춤 학원은?</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/jnTown2.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>우리동네학원 info</h3>
                    <p>우리동네 학원 소식 살펴보기!</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/jnTown3.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>학원차아드림</h3>
                    <p>학원을 비교해서 선택해보세요!</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="icon">
                    <img src="https://janet.co.kr/html_demo/img/main/jnTown4.png"></img>
                  </span>
                  <div className="txt_box">
                    <h3>지도보기</h3>
                    <p>내주변 자격증 학원 찾아보기</p>
                  </div>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <div className="mainInfoAdv">
            <a href="#">
              <img
                src="https://janet.co.kr/data/ebslider/eb4_basic/img/d0942d969f0a37cb73a46db345ea874b.png"
                alt="자격증 매칭 시스템 - 자넷 데이터랩 장착"
              ></img>
            </a>
          </div>
        </Swiper>

        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={true}
          spaceBetween={30}
          className="mainChart"
        >
          <SwiperSlide>
            <h1>기사 인기순위</h1>
            <ul>
              <li>
                <a href="#">
                  <span>전기기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>산업안전기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>위험물산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>전기산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>건축기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>건설안전기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>소방설비기사(전기분야)</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>제품디자인산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>건설기계정비산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>사출금형산업기사</span>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <SwiperSlide>
            <h1>기능장 인기순위</h1>
            <ul>
              <li>
                <a href="#">
                  <span>위험물기능장</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>전기기능장</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>가스기능장</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>용접기능장</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>기계가공기능장</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>건설기계정비기능장</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>건축일반시공기능장</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>귀금속가공기능장</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>금형제작기능장</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>판금제관기능장</span>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <SwiperSlide>
            <h1>베스트 글 Top 10</h1>
            <ul>
              <li>
                <a href="#">
                  <span>직업 적성 결과</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>2급 생활스포츠 지도사 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>얼마전에 장르만 로맨스 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>동물들은 죽음의 공포를 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>유튜브에서 K-POP …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>강남역 근처 미용학원 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>20대 카톡방에 숨은 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>ai 테스트 후기입니다 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>종목별 특징이 보이는 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>김하성 시즌 2호 솔로 …</span>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <SwiperSlide>
            <h1>핫클릭 Top 10</h1>
            <ul>
              <li>
                <a href="#">
                  <span>자넷 커뮤니티 사용자 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>ai 테스트 후기입니다 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>아몬드 브리즈 아시나요 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>다들 오늘 집가시자마자 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>왜 여기에는 최신글보기 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>이제 슬슬 가을이 오나 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>점심 메뉴 머가 좋을까 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>20대 카톡방에 숨은 …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>다들 반려동물 키우니? …</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>있잖아............ …</span>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <SwiperSlide>
            <h1>기능사 인기순위</h1>
            <ul>
              <li>
                <a href="#">
                  <span>한식조리기능사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>지게차운전기능사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>전기기능사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>위험물기능사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>지적기능사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>광산보안기능사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>방사선비파괴검사기능사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>수산양식기능사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>반도체장비유지보수기능사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>영사기능사</span>
                </a>
              </li>
            </ul>
          </SwiperSlide>

          <SwiperSlide>
            <h1>산업기사 인기순위</h1>
            <ul>
              <li>
                <a href="#">
                  <span>위험물산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>전기산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>제품디자인산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>건설기계정비산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>사출금형산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>영사산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>철도신호산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>시각디자인산업기사</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>소방설비산업기사(기계분야)</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span>생산자동화산업기사</span>
                </a>
              </li>
            </ul>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Info;
