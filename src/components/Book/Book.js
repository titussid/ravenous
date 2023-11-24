import React from 'react'
import ReactDOM from 'react-dom'
import './Book.css'
import bookArray from './BookData.js'

function BookPage() {
  return (
    <div className="bookPage">
      <h1>List of best selling books</h1>
      <BookSearchEvents />
      <BookList />
    </div>
  )
}
const BookSearchEvents = () => {
  const handleBookSearch = () => {
    window.open(
      'https://www.amazon.com/s?k=' +
        document.getElementById('search').value.replace(/ /g, '+')
    )
  }
  return (
    <section>
      <form action="" target="blank">
        <h2 style={{ display: 'inline', marginRight: '15px' }}>Search Books</h2>
        <input type="text" name="name" id="search" />
        <button type="button" onClick={handleBookSearch}>
          Search
        </button>
      </form>
    </section>
  )
}

const BookList = () => {
  const getBook = (id) => {
    const book = bookArray.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <div className="bookList">
      {bookArray.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </div>
  )
}

const Book = ({ img, title, author, price, detail, id, getBook }) => {
  // console.log({ img, title, author, price, id })
  const displayTitle = () => {
    console.log(title)
  }
  const getSinglebook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      <img className="Image" src={img} alt={title} />
      <h2 className="title">{title} </h2>
      <h4 className="author"> {author}</h4>
      <p className="rating-bg"></p>
      <h3>price: {price}</h3>
      <button type="button" onClick={getSinglebook}>
        Fetch info
      </button>
      <p>For more info</p>
      <form action={detail} target="blank">
        <button type="submit">Click here</button>
      </form>
    </article>
  )
}

export default BookPage
