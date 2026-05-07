import React from 'react'

const EquipmentFields = ({item, onChange, disabled}) => {
  return (
    <>
      <label htmlFor="cost">Cost</label>
      <input type="text" name='cost' value={item.cost} onChange={onChange} disabled={disabled}/>

      <label htmlFor="quantity">Quantity</label>
      <input type="number" min={1} value={item.quantity} onChange={onChange} disabled={disabled}/>

      <label htmlFor="subCategory">Category</label>
      <input type="text" name='subCategory' value={item.subCategory} onChange={onChange} disabled={disabled}/>
    </>
  )
}

export default EquipmentFields
