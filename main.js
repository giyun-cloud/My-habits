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
const homeEl = document.querySelectorAll('.home')
const habitEl = document.querySelectorAll('.habit')
const mainEl = document.querySelector('section.main')

for (let i = 0; i < homeEl.length; i++) {
  homeEl[i].addEventListener('click', () =>
  {
    habitEl[0].classList.remove('bookhabit')
    habitEl[1].classList.remove('bookhabit')
    mainEl.classList.remove('bookeffect')
    habitEl[1].classList.remove('bookhabit')
    toggleTF = false
  })  
}


//menu-click open habit
const menusEls = document.querySelectorAll('header .menus')
const habitH3El = document.querySelectorAll('.habit h3')
const habitPEl = document.querySelectorAll('.habit p')
let toggleTF = false;

function habitH3P(index,str1,str2){
  habitH3El[index].innerHTML = str1
  habitPEl[index].innerHTML = str2
}

function habitIf(index) {
  if(index === 0) {
    if(toggleTF) habitH3P(1,"운동",habitP1)
    else habitH3P(0,"운동",habitP1)  
  }
  else if(index === 1) {
    if(toggleTF) habitH3P(1,"영양제 섭취",habitP2)
    else habitH3P(0,"영양제 섭취",habitP2)  
  }
  else if(index === 2) {
    if(toggleTF) habitH3P(1,"공부",habitP3)
    else habitH3P(0,"공부",habitP3)
  }
  else if(index === 3) {
    if(toggleTF) habitH3P(1,"기상",habitP4)
    else habitH3P(0,"기상",habitP4)
  }
  else if(index === 4) {
    if(toggleTF) habitH3P(1,"독서 및 명상",habitP5)
    else habitH3P(0,"독서 및 명상",habitP5)
  }
}

menusEls.forEach(function(menusEl,index){
  menusEl.addEventListener('click', () => {
    habitIf(index);
    habitEl[1].classList.toggle('bookhabit')
    toggleTF = !toggleTF
    mainEl.classList.add('bookeffect')
    menugroupEl.classList.remove('show')
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
저는 학생일 때, 시험 기간에도 공부를 20분 정도만 하고 '공부했으니 게임해야지' 생각하던 사람이었습니다. 그러다가 대학교를 졸업하고 공무원을 준비하는데,
운동을 통해 자신감이 있던 터라 한 주가 지나갈 때마다 공부시간을 30분씩 늘리는 식으로 공부를 시작했습니다. 두 달 정도를 그렇게 하는데 공부를 안 하던 사람이
갑자기 4시간 이상씩 하게 되니 내일이 오는 게 너무 두려웠습니다. 핑계를 대면서 하루 이틀 쉬다 보니 6개월을 쉬어버리는 실패를 겪었습니다. 이 실패는 공부를 천천히 늘려가자는
교훈을 남겨서, 하루에 공부시간을 1분씩 늘리는 계획을 세우니 '어제 한 것보다 딱 1분만 더하면 되잖아'라는 생각으로 공부를 했습니다. 공부시간이 1시간 밖에 안될 땐 가족들에게 무시를
당하기도 했지만 저는 포기하지 않고 계속했고 지금은 공부시간이 7시간이 넘고 여전히 공부는 힘들지만 처음 시작했을 때랑은 비교도 안되게 나아졌습니다.
마지막으로 공부는 환경설정(ex:계획)이 중요하다고 생각합니다. 자신이 할 수 있는 만큼의 계획을 설정하고, 꾸준히 하는 것이 좋다고 생각합니다.
`
const habitP4 = `기상 습관은 하루를 규칙적이게 해줍니다. <br>
제가 기상 습관을 만들기 시작한 이유는 잘 때만 되면 뭐든 재밌길래 자는 시간이 매번 달라지고, 어느 날은 잠을 아침 8시에 잔 적도 있습니다. 이런 저를 보면서 '아 이건 아니다'라는
생각이 들었습니다. 그래서 어떻게 해야 할까? 고민했을 때 자는 시간을 정하는 건 졸리지가 않으면 깨지기 너무 쉽고 깨지고 나면 그냥 막 해버리니까 별로 안 좋다고 생각했습니다.
그럼 일어나는 시간을 정하자고 다짐했습니다. 일어나는 시간을 정해도 늦게 자는 건 똑같았습니다. 그러다 보니 일어나긴 해도 졸려서 중간에 낮잠을 오래 자게 되었습니다. 
낮잠을 오래 자면 또 늦게 자게 되고 내일은 또 피곤하고 악순환이었습니다. 
그래서 이번엔 낮잠을 잘 바에 게임을 하든 재밌는 걸 하자는 생각으로 낮잠을 안 자고 버티니까 밤에 졸려서 자게 되어서 이를 반복해서 지금은 6:40에 무조건 일어납니다. <sub>물론 1~3분 정도 뭉그적 거리긴
합니다</sub> 기상시간이 일정하니 규칙적으로 밥도 먹게 되고, 몸이 건강해집니다. 그리고 일어나자마자 잠 깨고 바로 공부를 시작하는 습관도 붙일 수 있으니 정말 좋은 습관인 것 같습니다.
마지막으로 기상시간을 정했으면 무조건 일어나고 재밌는 것을 해서 낮잠을 참고 밤에 자보세요. 그럼 기상 습관을 만드는 데 도움이 될 것입니다.
`

const habitP5 = `독서는 저의 인생의 길잡이입니다. <br>
저는 독서를 하면서 다른 사람의 생각을 알게 되었고, 그중 좋은 생각들은 제가 직접 실천하면서 정말 많은 것들을 얻고 제가 가야 할 길도 선택하는 데 도움이 되었습니다.
하지만 책을 읽다 보면 항상 좋은 책만 있는 것은 아니었습니다. 안좋은 책이라도 읽다 보면 좋은 책을 선별할 수 있는 힘이 생깁니다. 그리고 안좋은 책이라도 그 내용을 통해 얻을 수 있는 것은
무조건 있다고 생각합니다. 책을 읽으면 다른 사람의 생각을 알게 됨으로써 시야가 넓어지는 효과도 있습니다. 책 읽는 습관 추천드립니다.
<br> 명상 습관은 제 생각엔 마음을 통제하는 힘을 기른다고 생각합니다. 명상이란 것이 생소할 수도 있지만 정말 간단히 할 수 있는 것이니 한번 해보세요. 마음이 평안해지고
그저 가만히 내 몸에 집중할 뿐인데 그것이 행복하다는 것을 느낄 수 있을 것입니다.<br> 저의 글을 읽어주셔서 감사합니다. 
당신의 삶에 축복이 있길 진심으로 바라고, 세상에 사랑과 감사만으로 넘치는 상상만 해도 좋은 그런 세상을 만들기 위해 노력하는 사람이 많아지길 기원합니다.
지금 당신도 그 세상을 만들 영웅들 중 한 사람이 될 수 있습니다.
`