import "./PopSlider.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const PopSlider = () => {
  return (
    <section id="popslider">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        loop={true}
        navigation={true}
      >
        <SwiperSlide>
          <a herf="#">
            <img
              src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_06.png"
              alt="월 300 이상 버는 자격증이 있다?!"
            ></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_01.png"
              alt="한달만에 취득 가능한 자격증 BEST"
            ></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_02.png"
              alt="내게 꼭 필요한 자격증 따기 전 알아둬야 할 것 자격증따기"
            ></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_03.png"
              alt="가~장 따~기 쉬운 자격증"
            ></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_04.png"
              alt="시험없이 취득 할 수 있는 국가자격증"
            ></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_05.png"
              alt="이력서 칸채우기용 자격증은 이제 그만! 전략적인 자격증 따기"
            ></img>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PopSlider;
