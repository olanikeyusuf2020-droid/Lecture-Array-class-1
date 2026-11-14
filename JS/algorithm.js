    //    const age = 40;
    //    if(age <= 30){
    //     console.log("Adult section");
    //    }else if(age <=10){
    //     console.log("kids section");
    //    }else{
    //     console.log("restricted")
    //    }
        
//FILTER
// const scores = [23, 41, 16, 12, 10, 4, 15];
// const result = scores.filter( score => score > 20);
// console.log(result)
 //EXAMPLE 2
// const scores = [45, 82, 67, 90];
// let countScore = scores.filter( (score) =>{
//    return score >= 50;
// })
// console.log(countScore)


//EXAMPLE OF PROMPT MESSAGE WITH JS AND HTML FILE TO RUN
// const itemPrice = Number(prompt("Enter item price:"));
// const quantity = Number(prompt("Enter quantity:"));

// const total = itemPrice * quantity;

// console.log(total);

// BASIC BUILDING BLOCKS OF PSEUDOCODE
// 1. SEQUENCE
// Eample:
// START
//     GET name
//     DISPLAY name
// END
// const name = "Medinat";
// console.log(name);

// 2. SELECTION
// Eample:
// IF age >= 18 THEN
//     DISPLAY "Adult"
// ELSE
//     DISPLAY "Not an adult"
// END IF
// const age = 20;
// if( age >=18){
//    console.log("Adult")
// }else{
//    console.log("Not an Adult")
// }

// 3. ITERATION
// Eample:
// FOR number FROM 1 TO 5
//     DISPLAY number
// END FOR

// 
// for(let number = 1; number <= 5; number++){
//    console.log(number)
// }

//ASSIGNMENT FOR PSEUDOCODE//
// ALGORITHM IN ENGLISH
// 1. start
// 2. store the scores in a list
// 3. set the counter to zero
// 4. check each score one by one
// 5. if score is greater than 50, increase the counter by 1.
// 6. after checking each scores, display the counter
// 7. stop

// //PSEUDOCODE//
// START.
// SET scores = [45, 82, 67, 90]
// SET count = 0
// FOR each score IN scores
// IF each score > 50 THEN
// count = count + 1
// END IF
// END FOR
// DISPLAY count
// stop.

// TRANSLATE TO JS
// const scores = [45, 82, 67, 90];
// let count = 0;
// for(const score of scores){
//    if(score > 50){
//       count = count + 1;
//    }
// }
// console.log(count);
 

// ASSIGNMENT IN ARRAY METHOD
// const scores = [45, 82, 67, 90];
// let countScore = scores.filter( (score) =>{
//    return score >= 50;
// })
// console.log(countScore);

// const scores = [45, 82, 67, 90];
// const found = scores.includes(90);
// console.log(found)


//FUNCTIONS IN PSEUDOCODE
// FUNCTION AddNumbers(first, second)
//     SET total TO first + second
//     RETURN total
// END FUNCTION

// SET answer TO AddNumbers(10, 20)
// DISPLAY answer

//  THE JS

// function addNumbers(first, second){
//    const total = first + second;
//    return total;
// }
// const  answer = addNumbers(10, 20);
// console.log(answer)

// const array = [1, 7, 9, 2, 14, 8, 13,4, 10]
// const evenNumbers = array.filter( (arrayItems) =>{
//    return arrayItems % 2 === 0
// })

// const newEvenNumbers = evenNumbers.sort( (a, b) => a-b)
// console.log(newEvenNumbers);

// const firstNumbers = newEvenNumbers.slice(0, 3)
// console.log(firstNumbers)


// create array of prices
// filter the array and keep price less than 100
// for each  price  add 10% tax to each price
// sort the new price from the lowest to the highest
// display the new array

// const prices = [40, 120, 80, 30, 42, 60]
// const filterPrice = prices.filter( (price)=>{

// return price < 100
 
// })

//  const priceWithTax = filterPrice.map( (numberPrice) =>{
//     const tax = numberPrice * 0.1;
//     return numberPrice + tax;
    
//   })
//    console.log(priceWithTax)
 

// const sortPrice = priceWithTax.sort( (a,b) => a-b);
// console.log(sortPrice)

//FIND ARRAYMETHOD
const ages = [12, 18, 15, 21, 16, 30, 45, 60]
const firstAdult = ages.find( (age) => age >= 21)
console.log(firstAdult)

//FINDINDEX ARRAYMETHOD
const  firstMillenialIndex = ages.findIndex( (age) => age >= 40);
console.log(firstMillenialIndex)

//MAP
const numbers = [1, 2, 3, 4, 5]
const double = numbers.map( (number) => number * 2)
console.log(double)

//SUM
const hasRetired = ages.some( (age) => age >= 60)
console.log(hasRetired)

//EVERY

const allAdult = ages.every( (age) => age >= 6)
console.log(allAdult)

//REDUCE