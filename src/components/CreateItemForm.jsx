import React, { useState } from 'react'
import { formatCustomEquipment, formatCustomSpell } from '../helpers/formatters'
import SpellFields from './SpellFields'
import EquipmentFields from './EquipmentFields'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const CreateItemForm = ({ onAddItem, onUpdateItem }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const existingItem = location.state?.itemToEdit
  const initialFormState = {
    id: '',
    name: '',
    slug: '',
    desc: '',
    quantity: 1,
    type: '',
    url: '',
    is_custom: true,
    cost: '',
    subCategory: '',
    level: 0,
    levelText: '',
    school: '',
    castingTime: '',
    duration: '',
    range: '',
    components: '',
    material: '',
    concentration: false,
    ritual: false,
    higherLevel: ''
  }
  const [item, setItem] = useState(existingItem || initialFormState)
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    let finalValue = value
    
    if (type === 'radio') {
      if (value === 'true') finalValue = true
      else if (value === 'false') finalValue = false
    }

    setShowError(false)

    if (name === 'type') {
      setItem({
        ...initialFormState,
        name: item.name,
        desc: item.desc,
        type: finalValue
      })
    } else {
        setItem(prev => ({...prev, [name]: finalValue }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!item.name.trim() || !item.type) {
      setShowError(true)
      return
    }

    try {
      setIsLoading(true)
    
      const formattedItem = item.type === 'spells'
        ? formatCustomSpell(item)
        : formatCustomEquipment(item)

      if (existingItem) {
        await onUpdateItem(existingItem.id, formattedItem)
      } else {
        await onAddItem(formattedItem)
      }

      setItem(initialFormState)
      navigate(formattedItem.url, {
        state: { item: formattedItem}
      })

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    if (existingItem) {
      navigate(-1)
    } else {
      setItem(initialFormState)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{existingItem ? 'Edit Item' : 'Create Item'}</h1>

        <label htmlFor="name"><span>*</span> Item name</label>
        <input 
          type="text" 
          name='name' 
          value={item.name} 
          onChange={handleChange} 
          disabled={isLoading}/>

        <label htmlFor="desc">Description</label>
        <textarea 
          name="desc" 
          value={item.desc || ''} 
          onChange={handleChange} 
          disabled={isLoading}>
        </textarea>

        <p><span>*</span> Type</p>
        <label htmlFor="type">
          <input 
            type="radio" 
            name='type' 
            value='spells' 
            onChange={handleChange} 
            disabled={isLoading} 
            checked={item.type === 'spells'}/>
          Spell
        </label>
        <label htmlFor="type">
          <input 
            type="radio" 
            name='type' 
            value='equipment' 
            onChange={handleChange} 
            checked={item.type === 'equipment'} 
            disabled={isLoading}/>
          Equipment
        </label>
        {showError && <p>Name and type is required</p>}

        {item.type === 'spells' && <SpellFields item={item} onChange={handleChange} disabled={isLoading}/> }
        {item.type === 'equipment' && <EquipmentFields item={item} onChange={handleChange} disabled={isLoading}/>}

        <button 
          type='submit' 
          disabled={isLoading}>
        {isLoading ? 'Saving' : (existingItem ? 'Save Changes' : 'Create Item')}
        </button>
        <button 
          type='button' 
          onClick={handleCancel} 
          disabled={isLoading}>
        {existingItem ? 'Back' : 'Clear form'}
        </button>
      </form>
    </div>
  )
}

export default CreateItemForm
