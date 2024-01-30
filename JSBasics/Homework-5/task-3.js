/**
 * Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
 * Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
 * available - доступна кількість товарів на складі
 * ordered - кількість одиниць товару в замовленні
 * Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
 * Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
 * У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”
 */

const checkOrder = function (available, ordered) {
    switch (true) {
        case available < ordered:
            return "Your order is too large, we don’t have enough goods."
            break
        case ordered === 0:
            return "Your order is empty"
            break
        default:
            return "Your order is accepted"
            break
    }
}

console.log(checkOrder(5, 10))
console.log(checkOrder(5, 5))
console.log(checkOrder(5, 0))