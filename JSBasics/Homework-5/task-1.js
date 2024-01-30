/**
 * Створіть функцію яка приймає два параметри: width і height.
 * Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
 * Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
 * Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)
 */

//function declaration
function calculateRectangleArea(width, height) {
    return width * height
}
console.log(calculateRectangleArea(5, 10))

//function expression
const getRectangleArea = function (width, height) {
    return width * height
}
console.log(getRectangleArea(6, 11))

//arrow function
const calculateArea = (width, height) => width * height
console.log(calculateArea(7, 11))