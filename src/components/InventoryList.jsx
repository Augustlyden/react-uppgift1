import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'

const InventoryList = ({items, onDelete, onUpdate}) => {
  return (
    <div>
      <section className='item-container'>
        {items.map(item => (
          <article key={item.id} className='item-card'>
            <Link to={item.url}>
              <Item item={item} showQuantity={true}/>
            </Link>
            <div>
              <button onClick={() => onDelete(item.id)}>Delete</button>
              <button onClick={() => onUpdate(item.id)}>Update</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default InventoryList
