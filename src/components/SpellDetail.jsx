import React from 'react'

const SpellDetail = ({item}) => {
  return (
    <section className='item-container'>
      <h2 className='title'>{item.name}</h2>
      <article className='item-card-details'>
        <dl className='item-details'>
          <dt>Level</dt>
          <dd>{item.levelText}</dd>
          <dt>School</dt>
          <dd>{item.school}</dd>
          <dt>Range</dt>
          <dd>{item.range}</dd>
          <dt>Duration</dt>
          <dd>{item.duration}</dd>
          <dt>Concentration</dt>
          <dd>{item.concentration ? "Yes" : "No"}</dd>
          <dt>Ritual</dt>
          <dd>{item.ritual ? "Yes" : "No"}</dd>
          <dt>Casting time</dt>
          <dd>{item.castingTime}</dd>
          <dt>Components</dt>
          <dd>{item.components}</dd>
          <dt>Materials</dt>
          <dd>{item.material}</dd>
        </dl>
        <div className='item-desc'>
          <p><span>Spell Description</span> <br />{item.desc}</p>
          <p>{item.higherLevel}</p>
        </div>
      </article>
    </section>
  )
}

export default SpellDetail
