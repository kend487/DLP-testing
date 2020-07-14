//Variable

//Create a Variable: let

let changeMe = true;
console.log(changeMe); 
changeMe = 'false'
console.log(changeMe);

// Create a Variable: const

const entree = 'Enchiladas'; //A const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.
console.log(entree); 

// Mathematical Assignment Operators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);
console.log(levelUp += 5);
console.log(powerLevel -=100);
console.log(multiplyMe*=11);
console.log(quarterMe/=4);

//The Increment and Decrement Operator

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
console.log(gainedDollar);
lostDollar--;
console.log(lostDollar);

//String Concatenation with Variables

let favoriteAnimal = 'cow';
console.log('My favorite animal: ' + favoriteAnimal + '.'); // Output: 'My favorite animal: cow.'

//String Interpolation

const myName = 'Padman';
const myCity = 'Chennai';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`); // Output: My name is Padman. My favorite city is Chennai.

//typeof operator

let newVariable1 = 'This is my code';
let newVariable = 1;
console.log(typeof newVariable1); // Output: String
console.log(typeof newVariable); // Output: Number

//Data type

console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);


//Arithmetic Operations

console.log(3.5+30);
console.log(2020-1969);
console.log(65/240);
console.log(0.2708*100);

//String Concatenation

console.log('Hello'+'World')
console.log('Hello '+'World')

//Properties

console.log('Teaching the world how to code'.length);

//Methods

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
console.log('Codecademy'.toUpperCase()); // Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('    Remove whitespace   '.trim());  // Use a string method to log the following string without whitespace at the beginning and end of it.

//Built-in Objects

console.log(Math.floor(Math.random() *100)) //Generate random number between 0 and 1; multiply by 100 and round the output
console.log(Math.random()*100) //Generate random number between 0 and 1; multiply by 100
console.log(Math.ceil(41.8)) //returns the smallest integer greater than or equal to a decimal number.
console.log(Number.isInteger(2017)); //checks if a number is an integer

//Variable

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

var birtYear = 1989;
var myName = 'Padman';
console.log('Name');
console.log(myName);
console.log('Age')
console.log(2020-birtYear);

