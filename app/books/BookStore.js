import { types } from "mobx-state-tree";
import AddBook from "./AddBook";

const book = types.model('Book', {
    title : types.string,
    author : types.string,
    read : false,
})

const BookStore = types.model('Books List', {
    books_List: types.array(book)
})
.actions(self =>({
    AddBook(book){
        self.books_List.push(book)
    }
}))
.create({
    books_List : [{ title : "primes", author: "ahmed hafdi",read:true}]
})
export default BookStore