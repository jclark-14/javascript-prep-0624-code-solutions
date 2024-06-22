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
const greetJody = getGreeting('Jody');
console.log('getGreeting Exercise:', greetJody);

function addAndMultiplyBy5(num1, num2) {
  const sumTimesFive = (num1 + num2) * 5;
  return sumTimesFive;
}
const product1 = addAndMultiplyBy5(4, 5);
console.log('addAndMultiplyBy5 Exercise:', product1);

function multiplyAndDivideBy5(num1, num2) {
  const productDividedByFive = (num1 * num2) / 5;
  return productDividedByFive;
}
const product2 = multiplyAndDivideBy5(10, 6);
console.log('multiplyAndDivideBy5 Exercise:', product2);

function subtractTwoNumbers(num1, num2) {
  const differenceOfTwoNumbers = num1 - num2;
  return differenceOfTwoNumbers;
}
const difference = subtractTwoNumbers(20, 9);
console.log('subtractTwoNumbers Exercise:', difference);

function getCircleCircumference(radius) {
  const calculateCircumference = 2 * radius * 3.14;
  return calculateCircumference;
}
const circumference = getCircleCircumference(7);
console.log('getCircleCircumference Exercise:', circumference);

function getFullName(firstName, lastName) {
  const calculateFullName = firstName + ' ' + lastName;
  return calculateFullName;
}
const fullName = getFullName('Jody', 'Clark');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  const calculateCube = number * 5;
  return calculateCube;
}
const cubed = cube(8);
console.log('cube Exercise:', cubed);
