/* Your JS goes in this file */
const age = 36;
function isAdult(age) {
  let result;
  if (isAdult < 18) {
    result = false;
  } else {
    result = true;
  }

  return result;
}
console.log('Is the person an adult', isAdult(age));

const score = 87;
function didStudentPass(score) {
  let result;
  if (score >= 70) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log('Score', didStudentPass(score));

const student2Score = 103;
function didStudent2Pass(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}

console.log('Score', didStudent2Pass(student2Score));

const season = 'winter';

function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  } else {
    return 'please enter a valid season';
  }
}

console.log(seasonMessenger(season));

const dayOfTheWeek = 'Sunday';

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'Have a good weekend!';
  } else {
    return "It's a weekday!";
  }
}

console.log(dayDetector(dayOfTheWeek));
