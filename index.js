let firstName = 'Alex'

let msg = "Hello, we are reaching out to you about your extended warranty"

const age = 35;

let isMsg = false; 

let alertMsg = `${msg}. \n ${firstName} we are aware that you are ${age} years old`
console.log(alertMsg)



let additionMultiplication = (5 + 10) * 2 
console.log(additionMultiplication)

let substraction = 10 -5 
console.log(substraction)

let pemdas = ((5^2) * 10) / 2 + 5 - 100
console.log(pemdas)



console.log(5 === 10)
console.log(5 === '10')
console.log(5 !== 10)


console.log(5 == 20)
console.log(5 == "20")
console.log(5 != 20)







// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

let isDvisibleBy5 = 0 === (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5)
console.log(isDvisibleBy5)

let greaterThan = n1 < n2 < n3 < n4

console.log(greaterThan)

let math = ((n2 -n1) * n3) % n4


// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;


// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(isUnder25)
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isUnder25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);




//Part 2
const distance = 1500

const mph55 = 1500 / 30 //50
const mph60 = 1500 / 28 //54
const mph75 = 1500 / 23 //65

let answer1 = `If you go 55 miles per hour, you will need ${mph55} gallons. \n If you go 60 miles per hour, you will need ${mph60} gallons.\n If you go 75 miles per hour, you will need ${mph75} gallons.`


const budget55 = mph55 * 3 //150
const budget60 = mph60 * 3 //162
const budget75 = mph75 * 3 //195

const isUnderBudget55 = 175 > budget55
const isUnderBudget60 = 175 > budget60
const isUnderBudget75 = 175 > budget75

const time55 = distance / 55 //27.27
const time60 = distance / 60 //25 
const time75 = distance / 75 //20 

let timeDifference = time60 - time55
let moneyDifference = budget60 - budget55

let answer2 = `It all depends on how you view time versus money. Going 75 mph will cost you ${budget75} dollars which is over the budget. However, going 60 mph will cost you ${budget60} dollars. It is under the budget. Going 60 mph will also save you ${timeDifference} hours instead of 55 mph. It will cost you ${moneyDifference} dollars more than going at 55 mph. I will go with 60 mph because those ${timeDifference} hours has more value than the  ${moneyDifference} dollars difference. `