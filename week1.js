// 콘솔 활용하기
console.log('출력할 값');
console.log(1, 2, 3); // 다수 데이터 쉼표로 구분
console.log([true, false], {a:1, b:2});
console.log(this);

// 주석
console.log('Hello'); 
/*안녕
하세요~~
*/
// console.log(false);


var x = 1; // 오늘날 사용x
// 변수 & 상수
let a = 1; 
let b = a; // 데이터를 다른 주머니로
a = "에이"; // 주머니 a 속 데이터 변경
console.log(a,b);

const A = 1; // 상수는 보통 대문자로
// A = 2 데이터 변경 불가

let hello$
// let 1abc 불가

// 자료형
// boolean: 참/거짓 여부
let bool1 = true; // 참
let bool2 = false; // 거짓
console.log(bool1, bool2)

console.log(typeof bool1);
// console.log('boolean'); 과 동일

const bool4 = 1 > 2; // false 출력

let bool5 = !true; // !연산자 = 반대값

// number: 숫자
let num1 = 10; // 정수
let num2 = 3.14; // 실수
console.log(10 % 3); // 나머지 구하기

// string: 문자열
const str1 = '안녕';
const str2 = "Wink";

let x; // undefined
x = null // null

// 비교 연산자
const a = 1;
const b = 2;

console.log(a == b, a != b); // false, true

// 할당 산술 연산자
let x = 3;
x += 2;
console.log(x); // 출력 5
x -= 3;
console.log(x); // 출력 2

// boolean 관련 연산자
console.log(true && false); // false 출력
console.log(true ll false); // true 출력
console.log(
    (z > 10 && z <= 20) || z % 3 === 0
  ); // true 출력

// 삼항 연산자
let num5 = 103247 + 1;

console.log(
  'num5는 3의 배수' +
  (num5 % 3 === 0 ? '입니다.' : '가 아닙니다.')
);
// num5는 3의 배수 입니다.

// 객체
const person1 = {
    name: '강민지',
    age: 22,
  };
console.log(person1.name)

// 배열
const myArray = [true, 3.14, 'Hello', person1];
console.log(myArray, myArray.length); // 4 출력

console.log(myArray[0])

myArray.push(123); // 요소 추가
myArray.pop(); // 요소 제거

// if & else 문
const a = 1;
const b = 2;

if (a < b) {
	console.log('a가 b보다 작다.');
} else if (a > b) {
	console.log('a가 b보다 크다.');
} else {
	console.log('a와 b는 같다.');
}

// else if 여러 개여도 ok

// switch 문
const firePower = 1;

switch (firePower) {
	case 1:
		console.log('레어');
		break;
	case 2:
		console.log('미디움');
		break;
	case 3:
		console.log('웰던');
		break;
	default:
		console.log('오류');
}