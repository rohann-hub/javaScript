const marvel_heros = ["spidy", "ironman", "thor", "captain"]
const dc_heros = ["superman", "batman", "aquaman", "flash"]

// merge 2 arrays

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// method 2 is SPREAD 

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);


const array2 = [1, 2, 3,[4, 5, 6], 7,[6, 7, [4, 5]]]

const originalArr = array2.flat(Infinity)
// console.log(originalArr);

/* 

specially for dataScrapping

*/

// console.log(Array.isArray("rohan")); // => convert this string into a array
// console.log(Array.from("rohan"));

// console.log(Array.from({name : "rohan"})); 

// convert this into a array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

 

