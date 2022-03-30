//예제 07-04, 단항 산술 연산자
var x = 5,
	result;

//선할당 후증가
result = x++;
console.log(result, x); // 5 6

//선증가 후할당
result = ++x;
console.log(result, x); // 7 7

//선할당 후감소
result = x--;
console.log(result, x); // 7 6

//선감소 후할당
result = --x;
console.log(result, x); // 5 5

//예제 07-06, 단항 연산자와 부수 효과

var x = "1";
//문자열 -> 숫자
console.log(+x); // 1
console.log(x); // '1'

x = true;
//불리언-> 숫자
console.log(+x); // 1
console.log(x); // true

x = "Hello";
// 문자열 -> 숫자
console.log(+x); // NaN
console.log(x); //"Hello"
// 문자열을 숫자로 타입 변환할 수 없으므로 NaN

//예제 07-12, 동등 비교 , 일치 비교 연산자
/* 동등 비교(==) 연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입 변화을 통해 타입을 일치시킨 후
값이 같은지 확인한다. */

//동등 비교 -> 결과를 예측하기 어렵다.
console.log(5 == 5); //true
console.log(5 == "5"); //true
console.log(5 === "5");

// NaN 은 자신과 동일하지 않은 유일한 값이다. 따라서 isNaN을 사용한다.
console.log(isNaN(NaN)); //true
console.log(isNaN(10)); //false
console.log(isNaN(1 + undefined)); //true

// 삼항연산자 기본 틀
// <<< 조건식 ? 조건식이 true 일 때 반환할 값 : 조건식이 false 일 때 반환할 값 >>>

//예제 07-23, 삼항 조건 연산자
score = 60;
var result = score >= 60 ? "pass" : "false";
console.log(result);

// 예제 07-24
var x = 10;

// if 문과의 차이점 ? => 삼항 연산자는 값처럼 사용가능하다. 하지만 if else 문은 값처럼 사용할 수 없다.
// => var result = if (x%2) { result  = '홀수'; } else { result = '짝수'; }

var result = x % 2 ? "홀수" : "짝수";
console.log(result);

//예제 07-31, 주의 할 점
console.log(typeof null); // object
// 자바스크립트 첫 번째 버전의 버그이다. null 인지 확인하려면 typeof 연산자를 사용하지 말고 일치 연산자()===)를 이용한다.
var foo = null;
typeof foo === null; //false
foo === null; // true

// 주의 할 점 하나더, 선언하지 않은 식별자를 typeof 연산자로 연산해보면 에러가 나는게 아니라 undefined 가 나온다.
