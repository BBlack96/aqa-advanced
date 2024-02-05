/**
 * Створіть функцію divide, яка приймає два параметри:
 * numerator і denominator та повертає як результат виконання число отримане від ділення.
 *
 * У функції треба поділити numerator на denominator і повернути результат.
 *
 * Додайте валідацію в функції. У разі,
 * якщо denominator дорівнює 0
 * або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
 *
 * Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0
 * або один з аргументів не є числом.
 *
 * Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally,
 * виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.
 */

function divide(numerator, denominator) {
    const result = numerator / denominator
    switch (true){
        case denominator === 0:
            throw new Error("Can`t divide by 0")
        case typeof numerator !== 'number' || typeof denominator !== 'number':
            throw new Error("All values should be numbers")
    }
    return result
}


try {
    console.log(divide(5, 0))
} catch (e) {
    console.log('Сталася помилка:',e)
}
finally {
    console.log("Робота завершена")
}


try {
    console.log(divide(false, "String"))
} catch (e) {
    console.log('Сталася помилка:',e)
}
finally {
    console.log("Робота завершена")
}


try {
    console.log(divide(10, 2))
} catch (e) {
    console.log('Сталася помилка:',e)
}
finally {
    console.log("Робота завершена")
}