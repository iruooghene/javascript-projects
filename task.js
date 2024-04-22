var x = 3;
var y = 4;
var k = x + y
console.log(k * k)


var b = 7
var a = b % 10
console.log(a + b)


var q = 5
var n = 6
console.log(q * n)

var a =  10
var x = a + 10
var y = a - 10
var z = a % 10
value = a / (x*y*z)
console.log(value)

console.log(typeof null)

let library = {
    id : 1,
    available : true,
    count :1,
    "name ": "Victoria",
    "author": "me"
}

console.log(library)

var operator = "+"

var left_operand = 9
var right_operand = 7
if(operator == "+"){
    ans = left_operand + right_operand
}
else if (operator == "-"){
    ans = ( left_operand - right_operand)
}
else if(operator == "*"){
    ans = (left_operand * right_operand)
}
else if (operator == "/"){
    ans = (left_operand / right_operand)
}
else ans = NaN
console.log(ans)

function calc(x){
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
}
let result = calc(3);
console.log(result(2));
console.log(calc(5)(2));

const calcu = function(x){
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
};

function greetings(greet){
    return function person(name){
        return `Hello,${name} . ${greet}`;
    }
}
console.log(greetings("Good morning!")("Victoria"))