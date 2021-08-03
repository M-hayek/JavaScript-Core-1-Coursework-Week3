/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.

  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonisers that will stay, according to the above rules.

  NOTE: don't include any element that is not a "family".

  HINT: Whenever you read the above the instructions, try to come up with the main input and output and logic
        Input: Is an array
        Output: Is an array
        Logic: Only strings that start with A, and finish with family
  
*/

function getSettlers(families) {
  let newArr = families.filter(name => { if (name.includes("family") && name[0] === "A"){ return name;}
}) 

  console.log (newArr);



}

// function getSettlers(families) {
//   let familiesStaying = families.filter((settler) => {
//     if (settler[0] === "A" && settler.includes("family")) {
//       return settler;
//     }
//   });

//   return familiesStaying;
// }

const voyagers = [
  "Adam family",
  "Potter family",
  "Eric",
  "Aldous",
  "Button family",
  "Jude",
  "Carmichael",
  "Bunny",
  "Asimov",
  "Oscar family",
  "Avery family",
  "Archer family",
  "Just A. family",
  "A Great family",
];

getSettlers(voyagers)

/* ======= TESTS - DO NOT MODIFY ===== */

// test("getSettlers function works", () => {
//   const voyagers = [
//     "Adam family",
//     "Potter family",
//     "Eric",
//     "Aldous",
//     "Button family",
//     "Jude",
//     "Carmichael",
//     "Bunny",
//     "Asimov",
//     "Oscar family",
//     "Avery family",
//     "Archer family",
//     "Just A. family",
//     "A Great family",
//   ];

//   expect(getSettlers(voyagers)).toEqual([
//     "Adam family",
//     "Avery family",
//     "Archer family",
//     "A Great family",
//   ]);
// });
