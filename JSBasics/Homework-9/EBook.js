import Book from './Book.js'
export default class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year)
        this._format = format;
    }

    printInfo() {
        super.printInfo()
        console.log(`Format: ${this._format}`)

    }

    get format() {
        return this._format;
    }

    set format(newFormat) {
        if (typeof newFormat === 'string') {
            this._format = newFormat;
        } else {
            console.log("Format of book should be String");
        }
    }

    static fromBookAndFileFormat(book, format){
        return new EBook(book.title, book.author, book.year, format)
    }
}


