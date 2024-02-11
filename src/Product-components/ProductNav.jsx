import React from 'react'



const ProductNav = () => {
  return (
    <div>
    <div className="product-page">
      {/* <ProductNav /> */}
      <h1>Products</h1>
      <img src={timeTablePic} alt="time-table logo" />
    </div>
    <div className="roast-type">
      <button>Roasted</button>
      <button>Unroasted</button>
    </div>
  </div>
  )
}

export default ProductNav