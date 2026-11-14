//A loop can inspect every item in an array
//if statement is a decision making

// const numbers = [3, 8, 11, 14, 6, 9];
// const evenNumbers = []
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[1] % 2 ===0){
//         evenNumbers.push([1]);
//     }
//     console.log(evenNumbers)
// }
// console.log(evenNumbers);

//modulus 3 % 2

// const figures = [4, 7, 3, 12, 10, 11];
// const largeFigures= []
// for(let i = 0; i < figures.length; i++){
//     if(figures[i] > 10){
//         largeFigures.push(figures[i]);
//     }
// }
// console.log(largeFigures)





// Exercise 1 — Positive, negative or zero
// Create a variable called number. Use if / else if / else to print whether it is positive, negative or zero.
// const number = 10;
// if(number > 0){
//     console.log("positive");
// }else if(number < 0){
//     console.log("negative");
// }else{
//     console.log("zero")
// }


// Exercise 2 — Grade checker
// Create a variable called score. Print “A” for 80 and above, “B” for 70–79, “C” for 60–69, and “Needs improvement”
// below 60.
// const score = 85;

// if(score < 80){
//     console.log("A")
// }else if(score < 70){
//     console.log("B")
// }else if(score >= 60){
//     console.log("C")
// }else{
//     console.log("Needs Improvement")
// }



// Exercise 4 — Print only the odd numbers
// Given [2, 5, 8, 11, 14, 17, 20], loop through the array and print only odd numbers. Hint: an odd number has a
// remainder of 1 when divided by 2.
// const numbers = [2, 5, 8, 11, 14, 17, 20];
// const oddNumbers = []
// for( let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 1){
//         oddNumbers.push(numbers[i]);
       
//     }
// }
//  console.log(oddNumbers)

// Exercise 4 — Print only the odd numbers
// Given [2, 5, 8, 11, 14, 17, 20], loop through the array and print only odd numbers. Hint: an odd number has a
// remainder of 1 when divided by 2.

// const numbers = [4, 7, 8, 13, 14, 17, 20];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 1){
//         console.log(numbers[i])
//     }
// }



 
// ASSIGNMENT



//  Exercise 6 — Stop at a target
// Given [6, 2, 9, 14, 5, 18], use a loop to print numbers until you reach 14. Do not print 14 or the numbers after it. Hint:
// use break.
const numbers = [6, 2, 9, 14, 5, 18];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] ===14){
        break;
        
    }
    console.log([numbers[i]])
}



// Exercise 7 — Sum the array
// Given [5, 10, 15, 20], use a loop and a variable named sum to calculate and print the total. Do not use a built-in sum
// function.
const figures = [5, 10, 15, 20];
let sum = 0;
for(let i = 0; i < figures.length; i++){
    sum = sum + figures[i];
    }
    console.log(sum)



    // Exercise 8 — FizzBuzz (challenge)
// Loop from 1 to 20. For multiples of 3 print “Fizz”; for multiples of 5 print “Buzz”; for multiples of both print “FizzBuzz”;
// otherwise print the number. Check the “both” condition first.
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzBuzz");
    }else if(i % 3 === 0){
        console.log("fizz");
    }else if(i % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

