/**
 *
 * Виберіть число для якого потрібно згенерувати таблицю множення.
 * Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
 * Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.
 */

const customMultiplier = 5;
let loopVariable = 1; // змінна циклу while

for (let i = 1; i <= 10; i++) {
  console.log(`${customMultiplier} x ${i} = ${customMultiplier * i}`);
}

console.log('-------------------'); // Для того щоб візуально розділити резльутат циклів

while (loopVariable <= 10) {
  console.log(`${customMultiplier} x ${loopVariable} = ${customMultiplier * loopVariable}`);
  loopVariable++;
}
