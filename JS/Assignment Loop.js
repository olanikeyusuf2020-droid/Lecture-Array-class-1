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

