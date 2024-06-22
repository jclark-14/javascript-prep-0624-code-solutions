function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(3, 5);
console.log('addTwoNumbers Exercise:', sum);

function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}
const numberOfMinutes = convertHoursToMinutes(1.5);
console.log(
  'convertHoursToMinutes Exercise:' + ' 1.5 hours to minutes -',
  numberOfMinutes
);

function getGreeting(name) {
  const greeting = 'Hello' + ' ' + name + ',' + ' How are you today?';
  return greeting;
}
const greeting = getGreeting('Jody');
console.log('getGreeting Exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  const sumTimesFive = (num1 + num2) * 5;
  return sumTimesFive;
}
const sumTimesFive = addAndMultiplyBy5(4, 5);
console.log('addAndMultiplyBy5 Exercise:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  const productDividedByFive = (num1 * num2) / 5;
  return productDividedByFive;
}
const productDividedByFive = multiplyAndDivideBy5(10, 6);
console.log('multiplyAndDivideBy5 Exercise:', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  const differenceOfTwoNumbers = num1 - num2;
  return differenceOfTwoNumbers;
}
const differenceOfTwoNumbers = subtractTwoNumbers(20, 9);
console.log('subtractTwoNumbers Exercise:', differenceOfTwoNumbers);

function getCircleCircumference(radius) {
  const calculateCircumference = 2 * Math.PI * radius;
  return calculateCircumference;
}
const calculateCircumference = getCircleCircumference(7);
console.log('getCircleCircumference Exercise:', calculateCircumference);

function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}
const fullName = getFullName('Jody', 'Clark');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  const cubed = number * number * number;
  return cubed;
}
const cubed = cube(8);
console.log('cube Exercise:', cubed);
