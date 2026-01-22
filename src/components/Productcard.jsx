import React from 'react'
import './Productcard.css'
import Product from './product.webp'


const Productcard = () => {
    return (
        <div className='flex justify-center items-center'>
        <div className='card'>
            <img src={Product} alt="Product-Image" className='product-image' />
            <h2>Sapphire Watch</h2>
            <p>Sapphire Watch is a high-end luxury watch brand that is known for its quality and durability.</p>
            <p><strong>MRP : $100</strong></p>
            <button className='btn'>Buy Now</button>
        </div>
        </div>
    )
}

export default Productcard