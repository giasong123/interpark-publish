// 백엔드 Response 데이터
// 전체 비주얼 슬라이드 숫자:6개
window.addEventListener("load", function(){

  // 백엔드 Response 데이터
const xh = new XMLHttpRequest();
xh.open("GET", "visual.json");
xh.send();
xh.onreadystatechange = function (event) {
  
  if (event.target.readyState === XMLHttpRequest.DONE) {
    
    const result=JSON.parse(event.target.response)
   
    // 현재 화면 출력에 활용을 하지는 않고 있어요.
    makeVisualSlideHtml(result);
  }
};

// visual 슬라이드 내용 채우는 기능
function makeVisualSlideHtml(_data) {
  // 각 각 필요로 한 항목이 무엇인가
  // -이미지 경로 필요
  // -클릭했을 때 이동할 경로(URL)
  const visualRes = _data;

  // 출력을 시켜줄 문장을 만들자.
  let visualHTML = "";

  // total 만큼 반복하자.
  // for 은 반복을 하는데 true인 경우만 반복한다.

  for (let i = 1; i <= visualRes.total; i++) {
    let temp = `
<div class="swiper-slide">
    <div class="visual-slide-item">
        <a href="${visualRes["visual_" + i].url}">
            <img src="${visualRes["visual_" + i].file}" alt="${
      visualRes["visual_" + i].url
    }" />
        </a>
    </div>
</div>
`;
  
    visualHTML += temp;
  }

  // 어디다가 자료를 출력할 것인지 지정
  const visualSlide = document.querySelector(".visual-slide .swiper-wrapper");
  visualSlide.innerHTML = visualHTML;

  var swiper = new Swiper(".visual-slide", {
    slidesPerView: 2, //슬라이드 몇장씩 보여주니
    spaceBetween: 24, //보여지는 슬라이드 간의 간격?
    //자동 실행
    loop: true,
    autoplay: {
      delay: 1000, //대기 시간
      disableOnInteraction: false, //사용자 터치후 자동실행 다시
    },
    speed: 700, //이동 속도: 1000 은 1초
    //좌측,우측 이동 버튼
    navigation: {
      nextEl: ".visual-slide-next",
      prevEl: ".visual-slide-prev",
    },
  });
}



});


