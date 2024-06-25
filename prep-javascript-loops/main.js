function whileLoop1() {
  let index = 0;
  const numbersArray = [];
  while (index < 10) {
    numbersArray.push(index);
    index++;
  }
  return numbersArray;
}
const whileLoop1Result = whileLoop1();
console.log('whileLoop1 Exercise:', whileLoop1Result);

function whileLoop2() {
  let index = 0;
  const numbersArray = [];
  while (index < 20) {
    numbersArray.push(index);
    index += 2;
  }
  return numbersArray;
}
const whileLoop2Result = whileLoop2();
console.log('whileLoop2 Exercise:', whileLoop2Result);

function forLoop1() {
  const numbersArray = [];
  for (let index = 0; index < 10; index++) {
    numbersArray.push(index);
  }
  return numbersArray;
}
const forLoop1Result = forLoop1();
console.log('forLoop1 Exercise:', forLoop1Result);

function forLoop2() {
  for (let index = 100; index >= 0; index--) {
    console.log('Time to explosion: ' + index + '!');
  }
}
forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: ' analytical engine',
};

function forInLoop1(object) {
  const array = [];
  for (const prop in object) {
    array.push(prop);
  }
  return array;
}
const forInLoop1Result = forInLoop1(person);
console.log('forInLoop1 Exercise:', forInLoop1Result);

function forInLoop2(object) {
  const array = [];
  for (const prop in object) {
    array.push(object[prop]);
  }
  return array;
}
const forInLoop2Result = forInLoop2(person);
console.log('forInLoop2 Exercise:', forInLoop2Result);
