// function logMessage(value: any) {
//     console.log(value)
// }

logMessage("hello");
logMessage(100);

// Union Type
// 유니온 타입의 특징은 아래와 같이 특정 타입에 대한 분기문을 사용하게 될때
// 각 타입별 내장 함수를 자동완성 시켜줄 수 있다.
// 이러한 방식을 type 가드라고 한다.
function logMessage(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString()
    }
    if(typeof value === 'string') {
        value.toString
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100)

interface Developer {
    name: string;
    skill: string;
}


interface dev {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | dev) {
    // 각 속성에 대한 내용을 자동완성 하기 위해서는 type 가드를 적용하면 된다.
    someone.name;
}