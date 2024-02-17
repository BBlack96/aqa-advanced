export default class Book {

    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        typeof newTitle === 'string'? this._title = newTitle : console.log("Name of book should be String")
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        typeof newAuthor === 'string'? this._author = newAuthor : console.log("Author of book should be String")
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        typeof newYear === 'number' && newYear > 0 ? this._year = newYear : console.log("Year of production should be Number")
    }

    printInfo(){
        console.log(`Author : ${this._author}, Title: ${this._title}, Year: ${this._year}`)
    }

    static findOldestBook(books){
        let oldestBook = books[0];
        for (let i = 0; i < books.length; i++){
            if (books[i]._year < oldestBook._year){
                oldestBook = books[i]
            }
        }
        return oldestBook._title
    }
}