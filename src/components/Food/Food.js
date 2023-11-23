import React from 'react'
import ReactDOM from 'react-dom'
import './Food.css'
import foodData from './FoodData'

function FoodPage() {
  return (
    <div className="foodPage">
      <h1>List of best Food in town</h1>
      <FoodList />
    </div>
  )
}
const FoodList = () => {
  const result = []

  foodData.map((food, index) => {
    const { imageSrc, name, address, city, category, rating, reviewCount, id } =
      food
    result.push(
      <article className="food" id={id}>
        <img src={imageSrc} alt={name} />
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{city}</p>
        <h3>{category}</h3>
        <h3 className="rating-bg"></h3>
        <p>{reviewCount} reviews</p>
      </article>
    )
  })
  return <section className="foodList">{result}</section>
}

export default FoodPage
