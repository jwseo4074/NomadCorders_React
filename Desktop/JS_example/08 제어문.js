//예제 08-06, 대부분의 if else 문은 삼항연산자로 변환 가능하다.
var x = 2;
var result;

if (x % 2) {
	result = "홀수";
} else {
	result = "짝수";
}

console.log(result); // 짝수

var num = 2;
var kind = num ? (num > 0 ? "양수" : "음수") : "영";
console.log(kind); //양수

// 단순히 값을 결정하여 변수에 할당하는 경우 if else 문보다
// 삼항 조건 연산자를 사용하는 편이 가독성이 좋다.

/* switch 문 기본 틀

switch (표현식) {
    case 표현식 1:
        switch 문의 표현식과 표현식 1이 일치하면 실행될 문;
        break;
    case 표현식 2:
        switch 문의 ~~~;
    
    default:
        swutch 문의 표현식과 일치하는 case 문이 없을 때 실행될 문;

}
*/

// break 가 없다면 제일 마지막 default 문의 결과대로 나올것이다. => " 폴 스루 " 라고 함
// default 문에는 break 문을 생략하는 것이 일반적이다.

//for 문
//while 문
//do while 문 => 무조건 한 번 이상 실행된다.

//예제 08-20, 레이블 문 : 프로그램의 실행 순서를 제어하는 데 사용한다. 레이블 문을 탈출하려면 break 문에 레이블 식별자를 지정한다.
foo: {
	console.log(1);
	break foo;
	console.log(2);
}
console.log(3);
//output :  1 \n 3

//예제 08-21, 이중 for문에서 외부 루프를 빠져나가고 싶을 때
outer: for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 3; j++) {
		if (i + j === 3) break outer;
		console.log(`inner [${i} ${j}]`);
	}
}
console.log("Done");

//예제 08-22, 특정 문자의 인덱스 찾기
var string = "Hello world";
var search = "l";
var index;

for (var i = 0; i < string.length; i++) {
	if (string[i] === search) {
		index = i;
		break;
	}
}
console.log(index); //2

//string 의 indexOf 내장 함수로 대체 가능
console.log(string.indexOf(search));

//예제 08-25
/*
    continue 를 사용하면 코드가 간결해질수도 있다.
    if 문으로도 가능하지만 if 문 안에 코드가 길어진다면 깊이가 하나 깊어지므로 가독성이 떨어진다.
*/
