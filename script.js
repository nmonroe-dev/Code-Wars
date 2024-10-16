

/*
//Grasshopper - Personalized Message


//Create a function that gives a personalized greeting. 
//This function takes two parameters: name and owner.
//Use conditionals to return the proper message:

function grasshopper(name,owner) {
    if (name.toLowerCase() === owner.toLowerCase()) {
        return "Hello boss"
    }else {
        return "Hello guest"
    }

}

*/

/*

function triangle(int1, int2) {
    const answer = 180 - (int1 + int2)
    return answer
}


*/


/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases


const finalGrade = (exam, projects) => {
  return (
    exam > 90 || projects > 10 ? 100 :
    exam > 75 && projects >= 5 ? 90 :
    exam > 50 && projects >= 2 ? 75 : 0
  )
}

*/
//Complete the function that accepts a string parameter, 
// reverses each word in the string. 
//All spaces in the string should be retained.



function rev(str) {
    return str
    .split(' ')
    .map(word => word.spit('').reverse().join(''))
    .join(' ')
}