// 타입 추론
let a = 'anc';

function getA(b = 10) {
  let a = '10';
  return b + a; // 1010
}

// 타입 추론 기본 2
// interface Dropdwon<T> {
//   value: T;
//   title: string;
// }

// let shoppingItem: Dropdown<string> = {
//   value: '하이',
//   title: '주제',
// };

// 타입 추론 3

interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
  //   value, 상속을 받아서 들어오게 된다.
  //   title
}
let detailedItem: DetailedDropdown<number> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a',
};

let arr1 = [1, 2, true, 'a'];
