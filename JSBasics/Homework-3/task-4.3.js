/**
 * Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
 * Створіть змінну height і присвойте їй числове значення висоти циліндра.
 * Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
 */

const cylinderRadius = 3
const cylinderHeight = 7
const cylinderVolume = (Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight).toFixed(2)

console.log(cylinderVolume)