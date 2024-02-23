const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 27,
};

person.email = 'email@gmail.com';
delete person.age;

console.log(person);
