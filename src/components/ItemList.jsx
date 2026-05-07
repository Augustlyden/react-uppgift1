import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item.jsx'

const ItemList = ({items, onAdd}) => {
  return (
    <div>
      <section className='item-container'>
        {items.map(item => (
          <article key={item.id} className='item-card'>
            <Link to={item.url}>
              <Item item={item}/>
            </Link>
            <div>
              <button onClick={() => onAdd(item)}>Add to inventory</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default ItemList
