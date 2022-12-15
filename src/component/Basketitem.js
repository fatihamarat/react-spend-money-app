import React from 'react'

function Basketitem({item,product}) {
  return (
    <div>
        {product.title} x {item.amount}
    </div>
  )
}

export default Basketitem;