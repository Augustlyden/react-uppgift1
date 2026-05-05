import React from 'react'

const EquipmentDetail = ({item}) => {
  return (
    <section className='item-container'>
      <h2 className='title'>{item.name}</h2>
      <article className='item-card-details'>
        <dl className='item-details'>
          <dt>Cost</dt>
          <dd>{item.cost}</dd>
          <dt>Category</dt>
          <dd>{item.subCategory}</dd>
        </dl>
        <div className='item-desc'>
          <p><span>Equipment Description</span> <br />{item.desc}</p>
        </div>
      </article>
    </section>
  )
}

export default EquipmentDetail
