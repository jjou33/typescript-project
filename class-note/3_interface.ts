// 인터페이스 정의
interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
let test: User = {
  age: 33,
  name: '테스트',
};

let test1 = {
  age: '스트링',
  name: '테스트',
};

function a(test) {
  console.log(test.age);
}
// 함수에 활용한 인터페이스

function getUser(user: User) {
  console.log(user);
}

const param = {
  age: 11,
  name: '캡틴',
};

getUser(param);

// 함수의 스펙(구조)에 인터페이스 활용

interface SumFunc {
  (a: number, b: number): number;
}

let sum: SumFunc;
sum = function (a: number, b: number) {
  return a + b;
};

// 인덱싱

interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b'];
// arr[0] = 10

// 딕셔너리 패턴

interface StringRegexDictionary {
  [key: string]: RegExp; // 정규표현식 예약어
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장

interface Person {
  name: string;
  age: number;
}

interface Developer1 extends Person {
  language: string;
}

let hw: Developer1 = {
  language: 'hi',
  name: 'hel',
  age: 10,
};
