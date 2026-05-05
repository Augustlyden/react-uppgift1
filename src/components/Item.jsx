import React from 'react'

const Item = ({item, showQuantity}) => {
  return (
    <article className='item-card'>
      <h2>{item.name}</h2>
      {item.levelText && <p>{item.levelText}</p>}
      {showQuantity && <p>Quantity: {item.quantity}</p>}
    </article>
  )
}

export default Item
