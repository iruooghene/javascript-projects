const grades = [5,78,93,60,45,2];

function studentGrades(number){
    if (number >= 90){
        return "A"
    }
    if(number >= 80){
        return "B"
    }
    if(number >= 70){
        return "C"
    }
    if(number >= 60){
        return "D"
    }else{
        return "F"
    }
}
const Grades = grades.map(score => studentGrades(score))
console.log(Grades)


