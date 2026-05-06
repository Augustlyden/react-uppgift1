import React from 'react'

const Item = ({item, showQuantity}) => {
  return (
    <>
      <h2>{item.name}</h2>
      {item.levelText && <p>{item.levelText}</p>}
      {showQuantity && item.type === 'equipment' && <p>Quantity: {item.quantity}</p>}
    </>
  )
}

export default Item
