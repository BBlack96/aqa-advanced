function printWithDelay (text, milliseconds){
    setTimeout(()=> {
        console.log(text)
    }, milliseconds )
}

printWithDelay('Hello world', 5000)