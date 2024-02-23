const users = [
  { name: 'John', email: 'John@gmail.com', age: 18 },
  { name: 'James', email: 'James@gmail.com', age: 20 },
  { name: 'Alex', email: 'Alex@gmail.com', age: 25 },
];

for (const user of users) {
  const { name, email, age } = user;
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
