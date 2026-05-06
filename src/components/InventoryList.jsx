import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'

const InventoryList = ({items, onDelete, onIncrement, onDecrement, onEdit}) => {
  return (
    <div>
      <section className='item-container'>
        {items.map(item => (
          <article key={item.id} className='item-card'>
            <Link to={`/${item.type}/${item.slug}`} state={{ item: item }}>
              <Item item={item} showQuantity={true}/>
            </Link>
            <div>
              <button onClick={() => onDelete(item.id)}>Delete</button>
              {item.is_custom && <button onClick={() => onEdit(item.id)}>Edit</button>}
              {item.type === 'equipment' && (
                <>
                  <button onClick={() => onIncrement(item)}>+</button>
                  <button onClick={() => onDecrement(item)}>-</button>
                </>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default InventoryList
