interface Developer3 {
  name: string;
  skill: string;
}

interface Person3 {
  name: string;
  age: number;
}

function introduce(): Developer3 | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

// Union 타입의 경우 공통된 속성에만 접근할 수 있다.
// 따라서, name 까지만 접근할 수 있다.
let tony1 = introduce();
console.log(tony1.age);

// 따라서, 단언 as 를 통해 사용할 수 있다.
// 하지만 이렇게 하다보면 굉장히 불편하다.
// 코드 가독성이 줄어든다.

// if ((tony as Developer3).skill) {
//   console.log((tony as Developer3).skill);
// } else if ((tony as Person3).age) {
//   console.log((tony as Person3).age);
// }

// Type 가드 정의
// Developer 타입인지를 걸러주는 함수
function isDeveloper3(target: Developer3 | Person3): target is Developer3 {
  return (target as Developer3).skill !== undefined;
}

// Type 가드 함수를 활용하면 아래와 같이 타입을 분기해서 적용할 수
if (isDeveloper3(tony1)) {
  console.log(tony1.skill);
} else {
  console.log(tony1.age);
}
