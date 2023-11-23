import React from 'react'
import ReactDOM from 'react-dom'
import './Book.css'
import BookArray from './BookData.js'

function BookList() {
  const result = []
  BookArray.map((book, index) => {
    result.push(
      <Book
        title={book.title}
        author={book.author}
        img={book.img}
        price={book.price}
      />
    )
  })
  return <div className="bookList">{result}</div>
}

const Book = ({ img, title, author, price }) => {
  return (
    <article className="book">
      <img className="Image" src={img} alt={title} />
      <h2 className="title">{title} </h2>
      <h4 className="author"> {author}</h4>
      <p className="rating-bg"></p>
      <h3>price: {price}</h3>
    </article>
  )
}

export default BookList
