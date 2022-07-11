// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText();

// function logText<T>(text: T): T {
//     console.log(text);
//     return text
// }

// logText<string>('문자열');

// function logText(text) {
//     console.log(text);
//     return text;
// }

// 예를 들어서 위의 로그 함수로 텍스트를 받아서 타입별로 특별한 로직을 실행한다고 가정하자.
// 이럴경우 우리는 아래와 같이 작업을 진행할 것이다.


// function logText(text) {
//     text.split('').reverse().join()
//     return text;
// }

// 하지만 이럴경우는 `string`일 경우에만 해달됫 것이며, 다른 타입은 적용할 수 없어 따로 중복되는 함수를 만들어야된다.

// function logNumber(number) {
//     console.log(number);
//     return number
// }

// 이러한 방식은 중복을 만들게 되어 비효율적으로 볼 수 있다.
// 이를 해결하기 위해 `Union`을 사용해보자.

// function logText(text: string | number) {
//     console.log(text);
//     return text
// }

// 하지만 이럴 경우 실제 사용하는 입장에서 자동완성이 되지 않는다.
// 즉, 인풋에 대한 타입은 명시가 되었지만, 반환값에 대한 타입이 명시되지 않은 것이다.
// 따라서, 좀 더 명확히 하기 위해서 제네릭을 사용한다.
// const text = logText('a');
// text.
// logText(10);

// 제네릭
// 우리가 함수를 선언할때 제네릭으로 특정 type 'T' 를 정의해주고 변수타입 및 리턴타입도 동일하게 전달하게되면
// 실제 사용하는 입장에서 해당 타입의 유효성을 결정할 수 있는 장점이 있다.
function logText<T>(text: T): T {
    console.log(text);
    return text
}
// logText 함수에서 <string> 제네릭을 통해 string 타입의 값을 넣을거라 명시할 수 있고, tslint 또한 잡을 수 있다.
const str1= logText<string>('abc');
str1.split('')

const login = logText<boolean>(true)

//


