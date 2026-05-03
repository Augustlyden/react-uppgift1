import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item.jsx'

const ItemList = ({items}) => {
  return (
    <div>
      <section className='item-container'>
        {items.map(item => (
          <Link key={item.id} to={item.url}>
            <Item item={item}/>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default ItemList
