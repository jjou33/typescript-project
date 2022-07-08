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

// 각 속성에 대한 내용을 자동완성 하기 위해서는 type 가드를 적용하면 된다.
// 가드를 사용하지 않았을 경우 Developer, dev 타입의 공통된 프로퍼티만 자동완성을 제공한다.
function askSomeone(someone: Developer | dev) {
    // someone.name;
    
}

askSomeone({ name: '디벨로퍼',  skill: '웹 개발'})
askSomeone({ name: '캡틴', age: 100 })
// 인터섹션(&)의 경우 Developer 와 dev 의 모든 속성을 가지고 있는 하나의 타입을 의미한다.
function askSomeone2(someone: Developer & dev) {
    // 각 속성에 대한 내용을 자동완성 하기 위해서는 type 가드를 적용하면 된다.
    // 가드를 사용하지 않았을 경우 Developer, dev 타입의 공통된 프로퍼티만 자동완성을 제공한다.
    // 
}


// 유니온 타입과 인터섹션 타입의 차이

// 유니온 타입의 경우 `Developer` 와 `dev` 속성 중 아무거나 사용해도 무방
askSomeone({ name: '디벨로퍼',  skill: '웹 개발'})
askSomeone({ name: '캡틴', age: 100 })

// 인터섹션 타입의 경우 모든 속성이 들어있어야함
askSomeone2({ name: '디벨로퍼',  skill: '웹 개발'})
askSomeone2({ name: '캡틴', age: 100 , skill: '웹 개발'})
