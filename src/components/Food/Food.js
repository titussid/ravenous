import React from 'react'
import ReactDOM from 'react-dom'
import './Food.css'
import foodData from './FoodData'

function FoodList() {
  const result = []

  foodData.map((food, index) => {
    result.push(
      <article className="food" id={index}>
        <img src={food.imageSrc} alt={food.name} />
        <h2>{food.name}</h2>
        <p>{food.address}</p>
        <p>{food.city}</p>
        <h3>{food.category}</h3>
        <h3 className="rating-bg"></h3>
        <p>{food.reviewCount} reviews</p>
      </article>
    )
  })
  return <section className="foodList">{result}</section>
}

export default FoodList
