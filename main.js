const upEl = document.querySelector('footer')
const mainEl = document.querySelector('section.main')

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

const homeEl = document.querySelector('.home')
const habitEl = document.querySelector('.habit')
const menusEls = document.querySelectorAll('header .menus')
const habitH3El = document.querySelector('.habit h3')
const habitPEl = document.querySelector('.habit p')


homeEl.addEventListener('click', () =>
{
  habitEl.classList.remove('showhabit')
})

menusEls.forEach(function(menusEl,index){
  menusEl.addEventListener('click', () => {
    habitEl.classList.add('showhabit')
    if(index === 0) {
      habitH3El.innerHTML = "운동"
      habitPEl.innerHTML = habitP1
    }
    else if(index === 1) {
      habitH3El.innerHTML = "영양제 섭취"
      habitPEl.innerHTML = habitP1
    }
  })
});

// PARAGRAPHS

const habitP1 = `저의 삶에서 '하면 되는구나'라는 생각을 심어준 첫 번째 습관이 운동입니다. <br> 
군 복무를 하고 있을 때, 인간관계로 인한 스트레스를 풀기 위해 운동을 시작했습니다.
하다 보니 저의 몸은 바뀌기 시작했습니다. 입대 전의 저는 54kg이었습니다. 하지만 지금은 70kg입니다. <sub>(그냥 많이 먹어서 살찐 거 아니라 운동해서 무게가 증가한 것입니다.)</sub> 
이러한 변화가 노력을 한다는 것에 대한 자신감을 만들었고, 다른 습관들을 만들게 된 원인이라고 생각합니다. 
운동에 대한 정보는 인터넷에 아주 많으므로 자신에 맞는 운동을 찾아서 시작하시면 됩니다. 다만 운동전 몸풀기를 꼭 해주세요. 몸풀기를 안 하고 운동만 하다가
어깨가 안 좋아져서 상당히 고생했었습니다. 마지막으로 운동을 시작하고 싶으시다면 무리한 목표보다는 쉬운 목표를 잡고, 천천히 해보세요.`

