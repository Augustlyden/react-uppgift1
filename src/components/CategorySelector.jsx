import React from 'react'

const CategorySelector = ({ onSelect }) => {
  return (
    <div>
      <button onClick={() => onSelect('spells')}>Spells</button>
      <button onClick={() => onSelect('equipment')}>Equipment</button>
    </div>
  )
}

export default CategorySelector
