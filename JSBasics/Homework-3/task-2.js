/**
 * Створіть дві змінні, які містять імена двох осіб.
 * Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб.
 * Виведіть результат в консоль.
 * Потім використайте шаблонний рядок для створення того ж вітання.
 * Виведіть результат в консоль.
 */

const firstName = 'Bohdan'
const secondName = 'Vladislava'
const greeting = "Hello " + firstName + ' and ' + secondName

console.log(greeting)
console.log(`Hello ${firstName} and ${secondName}`)