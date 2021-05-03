const upEl = document.querySelector('footer')

new ScrollMagic
    .Scene({
      triggerElement: upEl, //보여짐 여부 감시할 요소
      triggerHook: .91 //뷰포트의 세로축 0~1 중 .8지점에 보이면
    })
    .setClassToggle(upEl,'show')
    .addTo(new ScrollMagic.Controller);

const logoEl = document.querySelector('header .logo')
const menugroupEl = document.querySelector('header .group')

logoEl.addEventListener('click', () =>
{
  menugroupEl.classList.toggle('show')
})


//Home click - close habit
const homeEl = document.querySelector('.home')
const habitEl = document.querySelector('.habit')
const mainEl = document.querySelector('section.main')


homeEl.addEventListener('click', () =>
{
  habitEl.style.zIndex = '0'
  habitEl.style.transition = '0s'
  habitEl.classList.remove('showhabit')
  mainEl.classList.remove('bookeffect')
})

//menu-click open habit
const menusEls = document.querySelectorAll('header .menus')
const habitH3El = document.querySelector('.habit h3')
const habitPEl = document.querySelector('.habit p')

menusEls.forEach(function(menusEl,index){
  menusEl.addEventListener('click', () => {
    habitEl.classList.add('showhabit')
    mainEl.classList.add('bookeffect')
    habitEl.style.zIndex = null
    habitEl.style.transition = null
    menugroupEl.classList.remove('show')
    if(index === 0) {
      habitH3El.innerHTML = "운동"
      habitPEl.innerHTML = habitP1
    }
    else if(index === 1) {
      habitH3El.innerHTML = "영양제 섭취"
      habitPEl.innerHTML = habitP2
    }
    else if(index === 2) {
      habitH3El.innerHTML = "공부"
      habitPEl.innerHTML = habitP3
    }
    else if(index === 3) {
      habitH3El.innerHTML = "기상"
      habitPEl.innerHTML = habitP2
    }
    else if(index === 4) {
      habitH3El.innerHTML = "독서 및 명상"
      habitPEl.innerHTML = habitP2
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

const habitP2 = `저는 무언가를 할 때, 피곤함이라는 것이 가장 큰 적이라고 생각했습니다. <br> 그래서 이를 해결하기 위해
무엇을 할 수 있을까? 생각해 보았고, 특정 영양제를 먹으면 피로를 줄일 수 있다는 것을 알게 되었습니다. 그래서 피로를 줄이기 위해
 비타민c와 비타민b를 먹고 있습니다. 그리고 면역력 강화도 필요할 것 같아 면역력을 위한 비타민b, 아연 마지막으로 소화기관을 위한 프로바이오틱스를 먹고 있습니다.
소화기관에 관해 덧붙이자면 인간에게 장내 유익균이 정말 중요하다고 합니다. 보통 100세 이상 오래 사는 사람들은 장 건강이 좋다고 합니다.
'오래도록 젊음을 유지하고 건강하게 죽는 법'이라는 책에서도 장내 건강을 강조합니다.
이 습관에서 하고 싶은 말이 있다면, 이 습관은 간단하지만 처음에는 지키기 어려웠습니다. 하지만 몇 달만 참고하다 보니 계속하게 되었습니다.
건강은 아주 중요합니다. 자신에게 도움 되는 영양제들을 찾아보고 드시길 추천드립니다.
`

const habitP3 = `저는 공부를 정말 하기 싫어하던 사람이었습니다.<sub>이 파트에선 제가 어떻게 공부습관을 가지게 되었는지 이야기하겠습니다.</sub> <br>
저는 학생일 때, 시험 기간에도 공부를 20분 정도만 하고 '공부했으니' 게임해야지 생각하던 사람이었습니다. 그러다가 대학교를 졸업하고 공무원을 준비하려는데,
운동을 통해 자신감이 있던 터라 한 주가 지나갈 때마다 공부시간을 30분씩 늘리는 식으로 공부를 시작했습니다. 두 달 정도를 그렇게 하는데 공부를 안 하던 사람이
갑자기 4시간 이상씩 하게 되니 내일이 오는 게 너무 두려웠습니다. 핑계를 대면서 하루 이틀 쉬다 보니 6개월을 쉬는 실패를 겪었습니다. 이 실패는 공부를 천천히 늘려가자는
교훈을 남겨서, 하루에 공부시간을 1분씩 늘리는 계획을 세우니 '어제 한 것보다 딱 1분만 더하면 되잖아'라는 생각으로 공부를 했습니다. 공부시간이 1시간 밖에 안될 땐 가족들에게 무시를
당하기도 했지만 저는 포기하지 않고 계속했고 지금은 공부시간이 7시간이 넘고 여전히 공부는 힘들지만 처음 시작했을 때랑은 비교도 안되게 나아졌습니다.
마지막으로 공부는 환경설정(계획)이 중요하다고 생각합니다. 자신이 할 수 있는 만큼의 계획을 설정하고, 꾸준히 하는 것이 좋다고 생각합니다.
`
