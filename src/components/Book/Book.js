import React from 'react'
import ReactDOM from 'react-dom'
import './Book.css'
import bookArray from './BookData.js'

function BookPage() {
  return (
    <div className="bookPage">
      <h1>List of best selling books</h1>
      <BookList />
    </div>
  )
}

const BookList = () => {
  const result = []

  return (
    <div className="bookList">
      {bookArray.map((book) => {
        // const { img, title, author, price, id } = book
        return <Book {...book} key={book.id} />
      })}
    </div>
  )
}

const Book = ({ img, title, author, price, id }) => {
  console.log({ img, title, author, price, id })
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

export default BookPage
