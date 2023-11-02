// 모든 js는 html 태그를 로드 완료하고
// 실행해야 안전하다.
// 그런데 현재 js파일을 head 태그에서
//불러들이므로 불안전하다
//오류가 날 확률이 무척 높다
//아래의 window는 웹브라우저다
//onload 절대로 소문자로 작성입니다
//약속되어 있습니다
//아래 문장 해석
//웹브라우징{html.css,js,image..}
//로드 완료 하면 function을 한다라고
//약속을 하였다.
//window.onload = function(){
//추천상품 기능
//};
//웹브라우저 코딩하는 위치가 정해져 있다고
//생각하자
//window.load = function(){
//코딩자리
//}
//window.addEnentListener("load, function"){
//코딩자리
//}
//$(document).ready(function){
//코딩자리
//}

window.addEventListener("load", function () {
  // console.log("투어코딩");
  //추천 상품 슬라이드 기능
  //글로써 코딩 시나리오 작성:의사코드

  //1.외부 데이터를 불러온다
  //외부 데이터 파일명.json

  const fileName = "tour.json";
  //외부 데이터 가져올때 작성법
  const xhr = new XMLHttpRequest();
  //외부의 파일을 열어라
  //Get방식으로 파일을 열어준다.
  xhr.open("GET", fileName);
  //실제로 실행하자.
  xhr.send();
  //데이터의 전송 상태를 채크합니다.
  xhr.onreadystatechange = function (event) {
    // console.log("데이터 전송 상태 확인", event.target.readyState);
    if (event.target.readyState === XMLHttpRequest.DONE) {
      // console.log("자료 가져오는데 성공완료", event.target.response);
      //코드가 가독성이 떨어지므로 변수에 담는다.
      //규칙은 const부터 작성하자
      //const가 문제가 된다면 let으로 변경한다
      const res = event.target.response;
      //res를 전달해서 html 태그를 만든다.
      //데이터를 전달해서 정리해서 전달하는 것이 관례

      // 전달받은 문자열을
      //js에서 사용하도록
      //JSON 데이터로 해석(parse)하여
      //객체화(원시데이터 묶음) 한다/

      const json = JSON.parse(res);
      makeHtmlTag(json);
    }
  };
  //html 태그를 만드는 기능
  function makeHtmlTag(_res) {
    console.log(_res);
    //html 태그를 백틱을 이용해서 만든다
    let htmlTourTag = ``;
    //res 에 담겨진 객체에서 total을 보관한다
    //우리가 몇 번 반복(total)해야 하는지 안다
    //for (초기값;조건;증감){
    // 반복하고 싶은 일
    //}
    for (let i = 0; i < _res.total; i++) {
      //가독성이 떨어집니다/
      const index = i + 1;
      const obj = _res["tour_" + index];
      // console.log(obj);

      const tempTag = `
        <div class="swiper-slide">

          <div class="tour-slide-item">
            <a href="${obj.url}" class="tour-slide-item-link">
              <div class="tour-slide-item-img">
              <img src="${obj.image}" alt="${obj.event}"/>
              </div>
              <div class="tour-slide-item-info">
                <ul class="tour-good-list">
                  <li>
                    <span class="tour-good-city">${obj.building}</span>
                  </li> 
                  <li>
                    <span class="tour-good-city-hotel">${obj.area}</span>
                  </li>
                  <li>
                    <span class="tour-good-city-price">${obj.price}원~</span>
                  </li>
                </ul>
              </div>
            </a>
          </div>
                        
                        
        </div>
      `;
      //console.log(tempTag);
      htmlTourTag += tempTag;
    }
    showHtmlTag(htmlTourTag);
  }

  //html 출력 전용 기능을 만들자.
  function showHtmlTag(_html) {
    //swiper태그에 백틱을 배치한다
    const tourSlide = ".tour-slide .swiper-wrapper";
    const tag = document.querySelector(tourSlide);
    tag.innerHTML = _html;
    //swiper 만들고 실행하기
    makeSwiper();
  }

  function makeSwiper() {
    //swiper 작동시킨다
    const swiperTour = new Swiper(".tour-slide", {
      slidesPerView: 3,
      spaceBetween: 26,
      //좌측 우측 버튼

      //좌측,우측 이동 버튼
      navigation: {
        nextEl: ".tour-slide-wrap .slide-next-bt",
        prevEl: ".tour-slide-wrap .slide-prev-bt",
      },
      //  3장씩 이동하라
      slidesPerGroup: 3,
    });
  }
});
