
// js의 기본 타입(data type)은 객체(object)입니다.
// 객체란 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합입니다.
// 프로퍼티의 값으로 함수가 올 수도 있는데, 이러한 프로퍼티를 메소드라고 합니다.

// 객체의 항목은 key 와 value 쌍으로 이루어져 있다. key를 통해 value를 호출가능하다.

var cat = "나비";
// 일반적인 변수의 선언
// 객체도 많은 값을 가지는 변수의 하나임

var whoAmI = { 
    name : {firstname: 'Seo', lastname: 'Jiwon'},
    family : '코리안 숏 헤어', 
    age : 25,
    height: 175,
    weight : 75,
    information: function() {
        console.log("Hi, i'm", this.name.firstname + this.name.lastname, " !! ")
    }, 
    information_2: function() {
        console.log(`Hi, i'm ${this.name.firstname} - ${this.name.lastname} !! `)
    }

};

console.log("cat => ", cat)
console.log("WhoAmI => ", whoAmI)
console.log("WhoAmI.name => ", whoAmI.name)
console.log("WhoAmI.name.firstname => ", whoAmI.name.firstname)
whoAmI.information()
whoAmI.information_2()

// Dot notation vs Bracket notation
// 배열과 달리 객체는 항목에 이름이 붙어있기 때문에 
// 점 표기법(Dot notation)으로 프로퍼티나 메서드를 호출할 수 있다. 
// 만약 괄호 표기법(Bracket notation)으로 접근할 것이라면 항목의 이름을 따옴표로 감싸야 한다.

console.log(whoAmI.age)
console.log(whoAmI['age'])

// 둘의 차이점은 점 표기법은 key 이름으로만 value를 호출할 수 있지만, 
// 괄호 표기법은 key 값을 가지고 있는 <<<변수>>>를 이용해 value를 가져올 수 있다는 점이다.

// key 정보를 지닌 변수
var Name = 'name';
var nameFirst = 'firstname';

console.log(whoAmI.name.firstname); // Seo
console.log(whoAmI.name.nameFirst); // undefined
console.log(whoAmI['name']['firstname']); // Seo
console.log(whoAmI[Name][nameFirst]); // Seo
console.log(whoAmI['name'][nameFirst]); // Seo


// person.name.nameSel은 person.name.['nameSel']과 같다
// Dot notation과 Bracket notation은 혼용할 수 있다.

console.log("\n")

var age1 = 'age';
console.log(whoAmI.age1); // undefined
// 점 표기법 (dot notaion) -> 변수 이름으로 접근 불가능
console.log(whoAmI[age1]); // 25
// 괄호 표기법(braket notation) -> 변수 이름으로 접근 가능

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// < 객체 생성 방법 >

// 1.리터럴 표기를 이용한 객체의 생성
// 자바스크립트에서 객체를 생성하는 가장 쉬운 방법은 
// 리터럴 표기(literal notation)를 이용하는 방법입니다.


// var 객체이름 = {
//     프로퍼티1이름 : 프로퍼티1의값,
//     프로퍼티2이름 : 프로퍼티2의값,
//     ...
// };

// 2. 생성자를 이용한 객체의 생성

// new 연산자를 사용하여 객체를 생성하고 초기화할 수 있습니다.
// 이때 사용되는 메소드를 생성자(constructor)라고 하며, 
// 이 메소드는 새롭게 생성되는 객체를 초기화하는 역할을 합니다.
// 자바스크립트는 원시 타입을 위한 생성자를 미리 정의하여 제공합니다.

// in 연산자 -> 객체의 항목에 찾고자 하는 <<key>> 가 있는지 확인할 수 있다.

var isItin = 'name' in whoAmI;
console.log(isItin); // True

// 객체의 항목 수정, 추가, 삭제(update, create, delete)

// C(create) 생성
// R(read)   읽기
// U(update) 갱신
// D(delete) 삭제

whoAmI.age = 26; //update
whoAmI.name.firstname = 'Kim';

whoAmI.hobby = 'work-out'; //create
whoAmI.house = 'busan';

console.log(`\n\n whoAmI information => ${whoAmI}`); //check
// 이렇게 하니까 객체 정보는 안나옴
console.log("\n\n whoAmI information => ", whoAmI); //check


delete whoAmI.house; //delete

console.log(`\n\n whoAmI information => ${whoAmI}`); //check
console.log("\n\n whoAmI information => ", whoAmI); //check

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// for...in
// for...in 문은 객체의 key를 하나씩 가져온다.

var obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
}

for (const key in obj) {
  console.log(obj[key]);
}

// 변수 - let, const, var => 변수 선언 자체가 메모리를 할당하는 것인데,
// 변수 선언 후 값을 할당하지 않으면 undefined 로 자동 할당


// 즉 쉽게 말하면, 자바스크립트 엔진은 변수 선언이 소스코드의 
// 어디에 있든 상관없이 다른 코드보다 먼저 실행합니다.
// 이처럼 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 
// 자바스크립트 고유의 특징을 변수 호이스팅(variable hoisting)이라고 합니다.
// 사실 변수 뿐만 아니라 var, let, const, function, class 키워드를 사용해서 
// 선언하는 모든 식별자(변수, 함수, 클래스 등)은 호이스팅 됩니다.

// const 키워드
// ES6에서 도입된 const 키워드를 사용해 선언한 변수는 재할당이 금지됩니다.
// 즉, const 키워드는 단 한번만 할당할 수 있는 변수를 선언합니다. 
// 따라서 const 키워드를 사용하면 상수를 표현할 수 있습니다.


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 문자열 다루기


var str = 'CodeStates';
console.log(str[0]); // 'C'
console.log(str[3]); // 'e'
console.log(str[str.length - 1]); // 's'
console.log(str[10]); 
console.log(`str.length => ${str.length}`)
// undefined 뒷부분은 아직 값이 할당이 안된 상태이기 때문에 undefined

// 문자열은 read-only이므로 인덱스 접근을 통해 값을 수정할 수 없다. 
// 수정하려면 새로운 string을 할당해야 한다.

str[0] = 'AAA'
console.log("str[0] 수정 후 => " ,str); // 'CodeStates'

str = 'newString'
console.log("아예 새로운 문자열로 할당 후 " , str); // 'newString'

// 문자열 여러개 있는데 하나만 바꾸고 싶다? => replace, replaceAll 메소드 사용

result_str = str.substring(0,1) + str. substring(4,5);
console.log(`result_str => ${result_str}`);

// 문자열 합치기
var str1 = 'Code';
var str2 = 'State';
console.log(str1 + str2); // 'CodeState'
console.log(str1 + 0); // 'Code0'

console.log(str1.concat(str2)); // 'CodeState'
console.log("str1 => ", str1); // 'Code'

// indexOf(searchValue)
// 문자열에서 특정 문자나 문자열을 찾고 싶을 때 사용한다.

// arguments: 찾고자 하는 문자열
// return value: 앞부터 시작해서 일치하는 index, 찾고자 하는 문자열이 없으면 -1
console.log('CodeStates'.indexOf('States')); // 4
console.log('CodeStates'.indexOf('states')); // -1
console.log('CodeStates'.indexOf('e')); // 3

// lastIndexOf 메서드는 문자열의 뒤부터 시작한다.
// includes(searchValue)도 비슷한 동작을 하지만 true 혹은 false를 반환한다.
'CodeStates'.lastIndexOf('e'); // 8
'CodeStates'.includes('States'); // true


// split(separator)
// 문자열을 구분 기호에 의해 분리하고 싶을 때 사용한다.

// arguments: 분리 기호. 분리 기준이 될 문자열
// return value: 분리된 문자열이 포함된 배열

var str = 'Welcome to my velog!';
console.log(str.split(' ')); // ["Welcome", "to", "my", "velog!"]

var str = '123456789'
console.log(str.substring(0, 3)); // '123'
console.log(str.substring(3, 0)); // '123'
console.log(str.substring(-3, 3)); // '123'
console.log(str.substring(3)); // '456789'
console.log(str.substring(0, 100)); // '123456789'
console.log(str.substring()); // '123456789'

// trim
// 문자열의 << 양 끝에 >> 공백을 제거하고 싶을 때 사용한다.

var str = '  CodeStates  ';
console.log(str.trim()); // 'CodeStates'

// padStart
// 문자열의 시작 앞부분에 다른 문자열을 추가하고 싶을 때 사용한다.

// arguments: 원하는 문자열의 목표 길이, (추가할 문자열=' ')
// return value: 목표 길이를 만족하는 문자열

