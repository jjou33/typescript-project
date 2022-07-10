enum Shoes {
     Nike ,
     Adidas
}

let myshoes = Shoes.Nike; 
let myshoes2 = Shoes.Adidas // 2 

// 활용 예

// function askQuestion(answer: string) {
//     if(answer === 'Yes') {
//         console.log('정답')
//     } 
//     if(answer === 'No') {
//         console.log('오답')
//     }
// }

// 위와 같이 string 타입으로 함수의 인풋값을 받게 되면 사용하는 입장에서 여러가지 값이 들어올 경우의 수가
// 늘어나게 된다. 
// 예를 들어
// askQuestion('예스')
// askQuestion('y')
// askQuestion('Yes')
// 위와 같이 여러가지 문자가 정상적으로 들어올 수가 있는 것이다.

// 이러한 상황에서 변수의 타입을 지정하기 위해 enum 을 사용할 수 있다.

enum Answer {
    Yes = 'Y',
    No = 'N'

}
function askQuestion(answer: Answer) {
    if(answer === 'Y') {
        console.log('정답')
    } 
    if(answer === 'N') {
        console.log('오답')
    }
}

// askQuestion 함수에 값을 전달할때 일반적인 string 을 넣을수 없다.
askQuestion('Yes') // '"Yes"' 형식의 인수는 'Answer' 형식의 매개 변수에 할당될 수 없습니다.ts(23

// 따라서, 아래와 같이 Answer 타입의 값을 넣어주어야 할 것이다.
askQuestion(Answer.Yes) // 정상

// 보통 드롭다운과 같은 목록이 필요한 형태에서 좀더 정확한 코드 혹은 예외 케이스를 막기 위해 좋은 선택이다.
