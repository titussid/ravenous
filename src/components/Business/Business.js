import React from 'react'
import ReactDOM from 'react-dom'
import './Business.css'

function Business() {
  const result = []

  business.map((business, index) => {
    result.push(
      <div className="business-container" id={index}>
        <div className="image-container">
          <img src={business.imageSrc} alt="" height="350" allign="center" />
        </div>
        <h2>{business.names}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>NY {business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating}</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
          <div className="Business-reviews">
            <h3>ITALIAN</h3>
            <h3 className="rating">4.5 stars</h3>
            <p>90 reviews</p>
          </div>
        </div>
      </div>
    )
  })
  return <div className="Business">{result}</div>
}

export default Business

const business = [
  {
    imageSrc:
      'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    names: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    names: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    names: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    names: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    names: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    names: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    names: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
]
