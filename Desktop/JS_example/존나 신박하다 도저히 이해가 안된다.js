const increase = function (num) {
    return ++num;
};
const decrease = function (num) {
    return --num;
};

const predicates = { increase, decrease };

function makeCounter(predicate) {
    console.log("makeCounter 호출");
    let num = 0;

    return function () {
        console.log("return function 실행");
        num = predicate(num);
        return num;
    };
}

const increaser = makeCounter(predicates.increase);
console.log(increaser());
//increaser = makeCounter(predicates.increase);
console.log(increaser());

console.log("@@@@@@@@@@");

// function what() {
//     let number = 0;
    
//     number = number + 1;

//     return number;
// }
// console.log(what());
// console.log(what());
