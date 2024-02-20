function showTheText (text, seconds){
    setTimeout(()=> {
        console.log(text)
    }, seconds)
}

showTheText('Hello world', 5000)