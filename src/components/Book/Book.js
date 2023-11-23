import React from 'react'
import ReactDOM from 'react-dom'
import './Book.css'

function BookList() {
  return (
    <div className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      <Review />
    </article>
  )
}

const Image = () => (
  <img
    src="./images/matthew.jpg"
    alt="Friends,nLovers, and Big Thing"
    className="Image"
    height="250"
    allign="center"
  />
)
const Title = () => (
  <h2 className="Image"> Friends, Lovers, Big Terrible Thing </h2>
)
const Author = () => {
  const inlineStyle = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  return (
    <h4 className="Author" style={inlineStyle}>
      Matthew Perry
    </h4>
  )
}
const Review = () => {
  return (
    <>
      <p className="rating-bg">.</p>
      <h3>price: 15.65$</h3>
    </>
  )
}

export default BookList
