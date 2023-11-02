// 모든 js는 html 태그를 로드 완료하고
// 실행해야 안전히다
// 그런데 현재 js파일을 html태그에서
// 불러들이므로 불안전하다
// 오류가 날 확률이 무척높다
// 아래의 window 절대로 소문자로 작성입니다
// 약속되어 있습니다
// 아래 문장 해석
// 웹브라우지(hmtl,css,js.image)
// 로드 완료 하면 function을 한다라고
// 약속을  하였다.
// window.onload=function을 한다라고 약속을 하였다
// window.onload(){
//   추천상품 기능
// }
// 웹브라우저 코딩하는 위치가 정해져 있다고
// 생각하자

// window.Function(){
//   코딩자리
// }
// window.addEventListener("load,function"){
//   코딩자리
// }
// $(document.).ready(function){
//   코딩자리
// }

window.addEventListener("load", function () {
  // console.log("티켓코딩");

  const xhr = new XMLHttpRequest();

  const htmlticketTag = ``;

  const ticketSlide = "ticket-slide . swiper-wrapper";

  const swiperTicket = new Swiper(".ticket-slide", {
    slidesPerView: 4,
    spaceBetween: 28,
  });
});
