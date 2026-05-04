import React from 'react'

const Item = ({item}) => {
  return (
    <article className='item-card'>
      <h2>{item.title}</h2>
      {item.levelText && <p>{item.levelText}</p>}
    </article>
  )
}

export default Item
