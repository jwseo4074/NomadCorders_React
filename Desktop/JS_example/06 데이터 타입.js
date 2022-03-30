// 예제 06-04, 숫자 타입의 세 가지 특별한 값
console.log(10 / 0);
console.log(10 / -0);
console.log(1 * "String");

// 예제 06-03, 템플릿 리터럴 ( 백틱 )
var string = `Hello
world`;
console.log(string);

// 예제 06-01, 숫자 타입
var integer = 10; //정수
var double = 10.12; //실수
var negative = -20; //음의 정수

if (0.1 + 0.2 === 0.3) console.log("True");
else console.log("False");

if (1 === 1.0) console.log("True");
else console.log("False");

var x = 5 / 2;
console.log(x);
console.log(parseInt(x));

// 예제 06-13, 표현식 삽입
var first = "my name is ";
var second = "jiwon";
console.log(first + second);
console.log(`my name is ${second}`);
//표현식 삽입은 템플릿 리터럴내에서 사용해야한다.
// 템플릿 리터럴이 아닌 일반 문자열에서의 표현식 삽입은 문자열로 취급된다.
console.log("my name is ${second}");
