// const score = [45, 82, 67, 90, 38, 76, 82, 55];
// //console.log(score)
// console.log(score[1])

// const score = [45, 82, 67, 90, 38, 76, 82, 55];
// const lowestScore = score.sort((a, b) =>a - b);
// console.log(lowestScore);


// const highestLowset = score.sort((a, b) =>b-a);
// console.log(highestLowset)

//  const score = [45, 82, 67, 90, 38, 76, 82, 55];
//  let selected = score.includes(90)
//  console.log(selected);

// const name = "Nike";
// const age = 29;

// const score = [45, 82, 67, 90, 38, 76, 82, 55];
// let school = score.slice(3, 8);
// console.log(school)

// const score = [45, 82, 67, 90, 38, 76, 82, 55];
// const newNumbers = score.slice(0,4).reverse();
// console.log(newNumbers)

// const letters = ["bag", "school", "car", "fake"];
// const newLetters = letters.join("-")
// console.log(newLetters)

 const scores = [45, 82, 67, 90, 38, 76, 82, 55];

//  score.forEach( (option) => {
//      const dividedScore = option / 2
//  console.log(dividedScore)
//  })
// const highestScore = Math.max(...score)
// console.log("highest score :", highestScore)

// const lowestScore = Math.min(...score)
// console.log("lowest score :", lowestScore)


//filter goes through every element in an array and returns a new array that match the condition
//score above 50
// const passScores = scores.filter((studentScore) =>{
//     return studentScore >=50
// })
// console.log(passScores)

//remove duplicate-> means remove elements that apperas more than once

const uniqueScores = [...new Set(scores)]
console.log(uniqueScores)