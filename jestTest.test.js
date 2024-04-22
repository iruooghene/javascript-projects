let {addNumbers,evenNumbers,Grades} = require("./add.js")

test("Add two numbers",() =>{
    let a = 7;
    let b = 8;
    let answer = addNumbers(a,b);

    expect(answer).toBe(15);
})

test("filter even numbers",() =>{
    let arr =[1,2,3,4,5,6]
    let answer = evenNumbers(arr)

    expect(answer).toEqual([2,4,6])
})

test("map student grades",() =>{
    let grades = [90,78,85,60,45,92]
    let answer = Grades(grades)

    expect(answer).toBe([A,C,B,D,F,A])
})