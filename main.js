upEl = document.querySelector('footer')
mainEl = document.querySelector('section.main')

new ScrollMagic
    .Scene({
      triggerElement: upEl, //보여짐 여부 감시할 요소
      triggerHook: .9 //뷰포트의 세로축 0~1 중 .8지점에 보이면
    })
    .setClassToggle(upEl,'show')
    .addTo(new ScrollMagic.Controller);

new ScrollMagic
  .Scene({
    triggerElement: upEl,
    triggerHook: .9
  })
  .setClassToggle(mainEl,'show')
  .addTo(new ScrollMagic.Controller);