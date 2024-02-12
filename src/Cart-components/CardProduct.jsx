import React from 'react'
import "../Cart-components/CSS/cart.css";
import darkRoastedPic from "../assets/images/Coffee_product.png";


const CardProduct = () => {
    let [add, setadd] = useState(0);
    const addQuantity = () => {
        setadd(function (prevValue) {
          return prevValue+1;
        })
    }
    const subQuantity = () => {
      if(add>0) {
        setadd(function (prevValue) {
          return prevValue -1;
        })
      }
      else {
        setadd(0);
      }
    
    }
  return (
    <div className="added-products">
    <div className="product-img">
      <div><img src={darkRoastedPic} alt="" /></div>
      <div>
        <h3 className="product-title">Jimma Coffee</h3>
        <div className="added-products-description">
        <span>1000g</span>
        <span>Drip</span>
        <span>Light Roast</span>
        </div>
   
      </div>
    </div>
    <div className="interactivity">
      <span>$45.60</span>
      <button className="quantity-btn" onClick={addQuantity}>+</button>
      <span>{add}</span>
      <button className="quantity-btn" onClick={subQuantity}>-</button>
      <span>$4560</span>
    </div>
  </div>
  )
}

export default CardProduct