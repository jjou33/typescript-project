interface Developer4 {
  name: string;
  skill: string;
}

interface Person4 {
  name: string;
  skill: string;
}

let developer4: Developer4;
let person4: Person4;

// 타입 호환은 오른쪽의 타입이 왼쪽 타입보다 클때 호환이 된다.
// 즉, 큰 타입에서는 작은 타입을 호환할 수 없다.
developer4 = person4; // error
person4 = developer4; // success

// 구조적 타이핑
// interface, class 보다는 내부적으로 어떤 속성을 가지고 있느냐를 비교해서 진행한다.

// 함수

let add1 = function (a: number) {
  // console.log();
};
let sum1 = function (a: number, b: number) {
  //   return a + b;
};

sum1 = add1;
add1 = sum1;

// 제네릭

interface Empty<T> {
  // console.log
}
let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
