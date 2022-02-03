 //book class : Represents a book
 class Book {
     constructor(title, author, isbn) {
         this.title = title;
         this.author = author;
         this.isbn = isbn;
     }
 }




 //ui class : handle ui task

 class UI {
     static displayBooks() {
         const StoredBooks = [{
                 title: 'book one',
                 author: 'jone doe',
                 isnn: '635431'
             },
             {
                 title: 'book two',
                 author: 'jane doe two',
                 isbn: '54252'
             }



         ];
         const books = StoredBooks;

         books.forEach((book) => UI.addBookToList(book));

     }

     static addBookToList(book) {
         const list = document.querySelector('#book-list');
         const row = document.createElement('tr');

         row.innerHTML = `<td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="btn btn-danger btn-sm delete" >X</a></td>`;
         list.appendChild(row);
     }

     static deleteBook(el) {
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
     }

     static cleareFilds() {
         document.querySelector('#title').value = '';
         document.querySelector('#author').value = '';
         document.querySelector('#isbn').value = '';
     }

 }



 //store class : handles storage

 //Event: Display books
 document.addEventListener('DOMContentLoaded', UI.displayBooks);


 //Event: add book 
 document.querySelector('#book-form').addEventListener('submit', (e) => {
     e.preventDefault();

     const title = document.querySelector('#title').value;
     const author = document.querySelector('#author').value;
     const isbn = document.querySelector('#isbn').value;

     const book = new Book(title, author, isbn);

     // add book to ul 

     UI.addBookToList(book);

     //clear fields

     UI.cleareFilds();


 })


 //Event: Remove a book
 document.querySelector('#book-list').addEventListener('click', (e)

     => {
         UI.deleteBook(e.target)

     });