let book={
    title:"man main hai vishwas",
    author:"IPS vishwas nangre patil",
    year:2021
}
console.log(book)
console.log(book.title)
console.log(book.author)
function books(book){
    console.log(book.author,book.title)
}
books(book);
book.year="2024"
console.log(book)

