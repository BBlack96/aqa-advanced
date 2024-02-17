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
        if (typeof newTitle === 'string') {
            this._title = newTitle;
        } else {
            console.log("Name of book should be String");
        }
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor === 'string') {
            this._author = newAuthor;
        } else {
            console.log("Author of book should be String");
        }
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (typeof newYear === 'number' && newYear > 0) {
            this._year = newYear;
        } else {
            console.log("Year of production should be Number");
        }
    }

    printInfo(){
        console.log(`Author : ${this._author}, Title: ${this._title}, Year: ${this._year}`);
    }

    static findOldestBook(books){
        if (books.length === 0) {
            return "No books found";
        }

        const sortedBooks = books.sort((a, b) => a._year - b._year);
        return sortedBooks[0]._title;
    }
}