function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('AddTwoNumbersExercise: ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return 60 * hours;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise: ', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var getGreetingResult = getGreeting('World');
console.log('getGreeting Exercise: ', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultipleBy5 Exercise: ', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multipleAndDivideBy5 Exercise: ', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('SubtractTwoNumbers Exercise: ', subtractTwoNumbersResult);

function getCircleCircumfernce(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumfernceResults = getCircleCircumfernce(5);
console.log('getCircleCircumference Exercise: ', getCircleCircumfernceResults);

function getFullName(firstName, space, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResults = getFullName('Juan', ' ', 'Ramirez');
console.log('getFullName Exercise: ', getFullNameResults);

function cube(number) {
  return number * number * number;
}
var cubeResults = cube(5);
console.log('cube Exercise: ', cubeResults);
