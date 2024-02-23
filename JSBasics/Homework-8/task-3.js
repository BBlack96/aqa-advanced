const car1 = {
  brand: 'BMW',
  model: 'X5',
  year: 2006,
};

const car2 = {
  brand: 'Audi',
  model: 'A4',
  owner: 2007,
};

const car3 = { ...car1, ...car2 };

console.log(car3);
