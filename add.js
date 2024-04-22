function addNumbers(x,y){
    let answer = x + y;
    return answer
}
addNumbers(2,3)

function evenNumbers(number){
    let result = number.filter(number => number % 2 == 0);
    return result;
}


module.exports = {addNumbers,evenNumbers};