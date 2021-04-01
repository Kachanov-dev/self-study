const { warn } = require("console");

const data = [
  { name: "Vladimir", age: 26, budget: 21000 },
  { name: "Alex", age: 32, budget: 75312 },
  { name: "Pumpey", age: 19, budget: 5000 },
];

//Map
// параметры такие-же как и у foreach
const result = data.map((elem, index) => {
  return { name: elem.name, index };
});

console.log(result);

// For each
// data.forEach(function (person, index, allData) {
//   console.log("For-each{person}", person);
//   console.log("For-each{index}", index);
//   console.log("For-each{allData}", allData);
// });

// data.forEach((peson) => console.log("peson", peson));

// For
// for (let i = 0; i < data.length; i++) {
//   console.log("for", data[i]);
// }

// For of
// for (let person of data) {
//   console.log("for-of", person);
// }
