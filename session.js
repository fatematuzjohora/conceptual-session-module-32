let x = 5;
let x = 2;
console.log('Inside block', x);
console.log('Outside block', x);

// const
const age = 34;
age = 45;
console.log(age)
// template literal
let name = 'Fatema';
let message = 'where are you?';
let fullMessage = `Hi, ${name}, ${message}`;

console.log(fullMessage)
// arrow function
const sum = (a, b, c) => {
  let sum1 = a + b
  let sum2 = a + c

  return sum2
}
const result = sum(10, 21, 34)
console.log(result)

// array destruct
let myVehicles = ['Toyota', 'Yamaha bike'];
const [bike, car] = myVehicles
console.log(bike)

//spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(...arr1, ...arr2);

//loop
const numbers = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for (let number of numbers) {
  console.log(number);
}

//default parameter values
function welcomeMessage(name = 'Hero') {
  let message = `Hi ${name}, welcome to this session!`
  console.log(message);
}
//Map, filter, find
const myArr = ['Nadia', 'Sadia', 'Tonni'];
let myNewArr = [];
for (let number of myArr) {
  let tripled = number * 3
  myNewArr.push(tripled);
}
console.log(myNewArr)

const tripledArr = myArr.map(name => `Hello ${name}, How are you?`)
console.log(tripledArr);

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 82, 63, 98]
let filteredArr = [];

for (number of newArr) {
  if (number % 2 == 0) {
    filteredArr.push(number)
  }
}
console.log(filteredArr);

const filteredArr = newArr.filter(number => number % 2 != 0);
console.log(filteredArr)

const newArr = ['Monira', 'Bristy', 'Romana', 'Ayesha'];

const found = newArr.filter(name => name.length % 2 != 0)
console.log(...found)

// Spread operator with objects

const phone = {
  brand: 'Walton',
  color: 'Red',
}

const phoneExtra = {
  Camera: '500 mp',
  battery: '20000mah',
}

const fullPhoneDetails = { ...phone, ...phoneExtra }
console.log(fullPhoneDetails)
let x = 20
{
  // Area 51
  let x = 5
  console.log(x);
}
const numbers = {}
console.log(numbers.second.new);

// arrow function
function sum(a, b) {
  let result = a + b
  return result
}
const result = sum(10, 15)
console.log(result)

const myArrowFunc = (a, b) => a + b
const newResult = myArrowFunc(34, 90)
console.log(newResult)
