//nested object//
// const school = {
//     name : "future",
//     population : 304, 
// };
// school.population = {
//     cencus : 32,
//     sport : 12
// };
// console.log(school.population.sport)

//EXAMPLE 2
// const company = {
//     name : "Madras Rubber",
//     type : "tyre",
// };
//   company.score = 32,
//   console.log(company) 

// const company = {
//     name : "Madras Rubber",
//     type : "tyre",
//     features: ["security", "workers"],
// };
// console.log(company.features[1])
    

    const fruits = [
        {name: "apple", color: "red", calories: 30},
        {name: "mangoes", color: "blue", calories: 10},
        {name: "guava", color: "pink", calories: 20},
    ]
    // console.log(fruits[1].name)

    fruits.push({name: "lime", color: "purple", calories: 70},)
    console.log(fruits[3].color);

    fruits.splice(1,0)
    console.log(fruits[2].name)



