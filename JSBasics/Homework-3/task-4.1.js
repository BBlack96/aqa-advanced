/**
 * π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
 *
 * Створіть змінну radius і присвойте їй числове значення радіуса кола.
 * Обчисліть площу кола за формулою π * radius^2 і виведіть результат.
 */


const circleRadius = 2
const circleArea = (Math.PI * Math.pow(circleRadius, 2)).toFixed(2)

console.log(circleArea);