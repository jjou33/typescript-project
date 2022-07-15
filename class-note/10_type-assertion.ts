// 타입 단언(type assertion)

let a1;
a1 = 20;
a1 = 'str';
// let bar = a;

// 위와 같은 코드는 개발적으로 봤을때, bar 의 타입은 `str`이 되어야한다.
// 하지만, ts 관점에서 해당 변수의 타입은 str 이 아닌 any 가 되버린다.

let bar = a1 as string;

// 따라서, 이를 단언하기 위해 as 를 활용해서 해당 변수의 타입은 string 이란걸 명시해줄 수 있다.
// 주로 DOM API 조작에 많이 사용된다.

// DOM API 조작예
<div id="app">hi</div>

let div = document.querySelector('#app');

// 위와 같은 자연스러운 상황에서 우리는 div 가 null 이 아닐꺼라는 보장을 할 수 없다.
// 따라서, ts 는 이게 null 이 아닐꺼라는 보장이없기 떄문에 오류를 내뱉는다.
// 그래서 우리는 아래와 같이 방어로직을 넣어 실행을 할 수 있다.
if(div) {
    div.innerText = 'test'
}

// 이때 타입 단언이 사용되는데

let div1 = document.querySelector('#app') as HTMLDivElement;

// 단언을 하게 되면 방어로직 없이 바로 사용할 수 있다.
// 결과적으로 타입 단언은 ts 보다 개발자가 더 타입에 대해서 잘 알고있다라는 뜻으로 예외를 처리하는거라 보면 될 것 같다.