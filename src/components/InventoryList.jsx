import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Item from './Item'

const InventoryList = ({ items, onDelete, onIncrement, onDecrement, onEdit }) => {
  const navigate = useNavigate()
  return (
    <div>
      <section className='item-container'>
        {items.map(item => (
          <article key={item.id} className='item-card'>
            <Link to={`/${item.type}/${item.slug}`} state={{ item: item, from: 'inventory' }}>
              <Item item={item} showQuantity={true}/>
            </Link>
            <div>
              <button onClick={() => onDelete(item.id)}>Delete</button>
              {item.is_custom && <button onClick={() => navigate('/create', {state: { itemToEdit: item }})}>Edit</button>}
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
