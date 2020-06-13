function Book(name, title, author) {
  this.name = name;
  this.title = title;
  this.author = author;
}

function UI() {}
UI.prototype.addBookToList = function (book) {
  let list = document.getElementById('bookList');
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.name}</td>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td> <button class="btn btn-sm btn-danger">x</button></td>
  `;
  list.appendChild(row);
};

//Delete book

UI.prototype.deleteBook = (target) => {
  if (target.className === 'btn btn-sm btn-danger') {
    target.parentElement.parentElement.remove();
  }
};

UI.prototype.clearFields = function () {
  document.getElementById('bookName').value = '';
  document.getElementById('bookTitle').value = '';
  document.getElementById('bookAuthor').value = '';
};
document.getElementById('bookForm').addEventListener('submit', (e) => {
  const name = document.getElementById('bookName').value;
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  let newBook = new Book(name, title, author);
  const ui = new UI();
  if (name === '' || title === '' || author === '') {
    alert('Fill out the fields');
  } else {
    ui.addBookToList(newBook);
  }

  ui.clearFields();
  e.preventDefault();
});

//Event listener for delete book

document.getElementById('bookList').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  e.preventDefault();
});
