import "./HotKeyword.css";

const hotkeyword = [
  {
    id: 1,
    title: "토익(TOEIC)",
    licenseOrgan: "미국 ETS",
    esRegdt: "2021-06-11T00:00:00.000+00:00",
    img: "https://janet.co.kr/data/licenseitem/155/hotKeyword_02.jpg",
  },
  {
    id: 2,
    title: "한국사능력검정시험",
    licenseOrgan: "국사편찬위원회",
    esRegdt: "2021-07-13T00:00:00.000+00:00",
    img: "https://janet.co.kr/data/licenseitem/144/hotKeyword_03.jpg",
  },
  {
    id: 3,
    title: "전기기사",
    licenseOrgan: "한국산업인력공단",
    esRegdt: "2021-07-13T00:00:00.000+00:00",
    img: "https://janet.co.kr/data/licenseitem/91/hotKeyword_11.jpg",
  },
  {
    id: 4,
    title: "공인중개사",
    licenseOrgan: "한국산업인력공단",
    esRegdt: "2021-07-13T00:00:00.000+00:00",
    img: "https://janet.co.kr/data/licenseitem/331/hotKeyword_05.jpg",
  },
  {
    id: 5,
    title: "산업안전기사",
    licenseOrgan: "한국산업인력공단",
    esRegdt: "2021-07-13T00:00:00.000+00:00",
    img: "https://janet.co.kr/data/licenseitem/96/hotKeyword_13.jpg",
  },
  {
    id: 6,
    title: "KBS한국어능력시험",
    licenseOrgan: "KBS 한국어진흥원",
    esRegdt: "2021-07-02T00:00:00.000+00:00",
    img: "https://janet.co.kr/data/licenseitem/145/.6rO17Ya17ZWc6rWt7Ja066mU7J24.jpg",
  },
  {
    id: 7,
    title: "요양보호사",
    licenseOrgan: "한국보건의료인국가시험원",
    esRegdt: "2021-08-06T00:00:00.000+00:00",
    img: "https://janet.co.kr/data/licenseitem/1622601017/7IKs7ZqM67O17KeA7IKs66mU7J24.jpg",
  },
  {
    id: 8,
    title: "ITQ",
    licenseOrgan: "한국생산성본부",
    esRegdt: "2021-07-13T00:00:00.000+00:00",
    img: "https://janet.co.kr/data/licenseitem/176/hotKeyword_24.jpg",
  },
];

const HotKeyword = () => {
  return (
    <section id="hotketword">
      <h1 className="title">
        <b>
          <span>HOT</span>
          키워드
        </b>
        TOP20
      </h1>
      <ul>
        {hotkeyword.map((c) => (
          <li key={c.id} className="li">
            <a href="#">
              <div className="imgBox">
                <img src={c.img} alt={c.title}></img>
                <h3 className="name">{c.title}</h3>
                <h4 className="d_day">
                  D
                  {Math.floor(
                    (new Date().getTime() - new Date(c.esRegdt).getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}
                </h4>
              </div>
              <div className="subTxt">
                <p>시행기관 : {c.licenseOrgan}</p>
                <span>시험일 : {c.esRegdt.substr(0, 10)}</span>
              </div>
              <div className="overTxt">
                <p>
                  <strong>유형:</strong>제 ??회
                </p>
                <p>
                  <strong>접수기간:</strong>
                  xxxx-xx-xx ~ xx
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HotKeyword;
