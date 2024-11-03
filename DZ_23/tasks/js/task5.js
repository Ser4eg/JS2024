/*
Задача 5.
Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
*/

let books = [
  { title: "Book1", year: 2001, author: "Author1" },
  { title: "Book2", year: 2005, author: "Author2" },
  { title: "Book3", year: 2001, author: "Author1" },
  { title: "Book4", year: 2010, author: "Author3" },
  { title: "Book5", year: 2005, author: "Author2" },
];

let authorCounts = new Map();

for (let book of books) {
  authorCounts.set(book.author, (authorCounts.get(book.author) || 0) + 1);
}

console.log("Кількість книг для кожного автора:", authorCounts);
