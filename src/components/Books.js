import React from 'react';

const Book = ({book}) => {
    return (
        <div className="book">
            <div className="book-img">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="link"><p>Czytaj</p></a>
            </div>
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.publishedDate}</p>
            <p>{book.volumeInfo.description}</p>
        </div>
    )
}

const Books = ({ books }) => {
  return (
    <div className="books">
      {books.items.slice(0, books.length).map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </div>
  );
};

export default Books;