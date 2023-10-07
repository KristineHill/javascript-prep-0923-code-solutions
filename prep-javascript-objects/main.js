const person = {
  firstName: 'Kristine',
  lastName: 'Hill',
  hobby: 'crotcheting blankets or amigurumis',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName + '.');

person.job = 'Realtor';
console.log("The person's current job is: " + person.job + '.');

person['previousJob'] = 'High School Math Teacher';

console.log("The person's previous job is: " + person['previousJob'] + '.');
console.log('The complete person object:', person);
