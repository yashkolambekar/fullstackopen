// CONCAT
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// MAP
// const words = ["hello", "world", "how", "do you do"];
// const newwords = words.map((word) => {
//     return "New " + word;
// })
// console.log(newwords);

// // Destructing assignment
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [first, last, ...all] = array;
// console.log(first); // 1
// console.log(last); // 2
// console.log(all); // [3, 4, 5, 6, 7, 8, 9, 10]

// Objects
// const yash = {
//     name : "Yash"
// }
// console.log(yash);
// yash["lastname"] = "Kolambekar";
// console.log(yash);
// yash.age = 18;
// console.log(yash);

// Object destructuring
const yash = {
    name: "Yash Kolambekar",
    age: 18,
    dob: "20/02/2005",
    country: "Bharat"
}
const {name, country} = yash;
console.log(name); // Yash Kolambekar
console.log(country); // Bharat