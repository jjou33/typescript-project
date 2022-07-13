interface Person {
  name: string;
  age: number;
}
type Person1 = {
  name: string;
  age: number;
};

// interface 의 경우 ctrl + 마우스 를 이용하여 실제 구현되어 있는 위치로 이동하여 볼 수 있고,
// type 의 경우 별칭의 개념이기 때문에 바로 볼 수 있다.
let param1: Person1 = {
  name: 'hw',
  age: 10,
};

type type1 = string;
let str: type1 = 'hello';

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

function getTodo(todo: Todo) {}

// 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부이다.
// 인터페이스는 확장이 가능하지만, type 별칭은 확장이 불가능하다.
// 따라서, 인터페이스를 사용하는게 권장된다.
