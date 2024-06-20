const person = {
  firstName: 'Jody',
  lastName: 'Clark',
  hobby: 'daddy daycare',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName + '.');

person.job = 'Hospice Nurse';
console.log("The person's current job is:", person.job + '.');

person['previousJob'] = 'Travel Nurse';
console.log("The person's previous job:", person['previousJob'] + '.');

console.log('The complete person object:', person);
