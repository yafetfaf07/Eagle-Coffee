import React from 'react'
import './CSS/product.css';
import productImage from "../assets/images/UnroastedPic.png";
const UnroastedProductCard = () => {
  return (
    <div className='unroasted'>
           <div>
        <img src={productImage} alt="coffee-product" />
        <div className="unroasted-bg"></div>
          <h2>Jimma Coffee</h2>
          <div className='unroasted-product-details'>
          <span>Origin: Jimma</span>
        <span>$4.88/Kg</span>
          </div>
       
        <input type='number' placeholder='0' className='quantity' />
        <div className='max'>Maximum:1000kg</div>
        <div className='add-to-cart'>Add To Cart</div>
       
      </div>
    </div>
  )
}

export default UnroastedProductCard