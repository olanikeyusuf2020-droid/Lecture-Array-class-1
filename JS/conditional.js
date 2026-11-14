// const age = 20;
// const height = "tall"
// if(age >= 18 && height){
//     console.log("adult")
// }else if(age = tall){
//     console.log()
// }

// ASSIGNMENT
// use && elseif, nested, OR, 
// use 3 different if statement 

// | if | Checks a condition. |
// | else if | Checks another condition if the previous one is false. |
// | else | Runs when all previous conditions are false. |
// | && | AND – both conditions must be true. |
// | || | OR – at least one condition must be true. |
// | Nested if | An if statement inside another if statement. |

// const age = 25;
// const hasTicket = true;

// if (age >= 18 && hasTicket === true) {
//     console.log("You can enter");
// } else {
//     console.log("You cannot enter");
// }
// - Both conditions are true, 
// If either condition is false, entry is denied.



// Using OR (||)
// Scenario: A student can get a reward if they score 80 or above OR have excellent attendance.
// N.B OR means only one condition needs to be true
// const  course = "javascript";
// const passedStudent = true;
// if(course >= "maths" || passedStudent === true){
// console.log("can graduate")
// }else{
//     console.log("cannot graduate")
// }


// const score = 75;
// if(score >= 80){
//     console.log("Grade A")
// }else if(score >= 70){
//     console.log("Grade B")
// }else if(score >= 60){
//     console.log("Grade C")
// }else if(score >= 50){
//     console.log("Grade D")
// }else{
//     console.log("failed")
// }
// JavaScript prints Grade B and stops checking the remaining conditions



// Nested IF statement
// A nested if means putting one if statement inside another.

// Scenario: A person wants to withdraw money from an ATM.
// const pinCorrect = true;
// const balance = 50000;
// const withdrawal = 20000;

// if (pinCorrect === true) {

//     console.log("Correct PIN");

//     if (balance >= withdrawal) {
//         console.log("Withdrawal successful");
//     } else {
//         console.log("Insufficient balance");
//     }

// } else {
//     console.log("Incorrect PIN");
// }


// Nested IF statement
const pinCorrect = true;
const withdrawal = 3000;
const balance = 7000;

if(pinCorrect === true){
    console.log("successful, now proceed");
 if(withdrawal <= balance){
    console.log("withdrawal successful");
}else{
    console.log("insufficient balance");
}

}else{
    console.log("incorrect pin");
}