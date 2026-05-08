import React from 'react'

const SpellFields = ({ item, onChange, disabled }) => {
  return (
    <>
      <label htmlFor="material">Material</label>
      <input 
        type="text"
        name="material" 
        value={item.material || ''} 
        onChange={onChange} 
        disabled={disabled}/>

      <label htmlFor="components"><span>*</span> Components</label>
      <input 
        type="text" 
        name="components" 
        required 
        value={item.components}
        onChange={onChange} 
        disabled={disabled} 
        placeholder='V, S, M'/>

      <label htmlFor="school"><span>*</span> School of Magic</label>
      <input 
        type="text" 
        name="school"
        required 
        value={item.school} 
        onChange={onChange} 
        disabled={disabled}/>

      <label htmlFor="level"><span>*</span> Level</label>
      <input 
        type="number" 
        min={0} max={9} 
        required 
        name="level" 
        value={item.level} 
        onChange={onChange} 
        disabled={disabled}/>

      <label htmlFor="castingTime"><span>*</span> Casting Time</label>
      <input 
        type="text" 
        name="castingTime" 
        required 
        value={item.castingTime} 
        onChange={onChange} 
        disabled={disabled}/>

      <label htmlFor="duration"><span>*</span> Duration</label>
      <input 
        type="text" 
        name="duration" 
        required 
        value={item.duration} 
        onChange={onChange} 
        disabled={disabled}/>

      <label htmlFor="range"><span>*</span> Range</label>
      <input 
        type="text" 
        name="range" 
        required 
        value={item.range} 
        onChange={onChange} 
        disabled={disabled}/>

      <label htmlFor="higherLevel">Casting at Higher Level</label>
      <input 
        type="text" 
        name="higherLevel" 
        value={item.higherLevel || ''} 
        onChange={onChange} 
        disabled={disabled}/>

      <p>Concentration</p>
      <label htmlFor="type">
        <input 
          type="radio" 
          name='concentration' 
          value='true' 
          checked={item.concentration === true} 
          onChange={onChange} 
          disabled={disabled}/>
        Yes
      </label>
      <label htmlFor="type">
        <input 
          type="radio" 
          name='concentration' 
          value='false' 
          checked={item.concentration === false} 
          onChange={onChange} 
          disabled={disabled}/>
        No
      </label>

      <p>Ritual</p>
      <label htmlFor="type">
        <input 
          type="radio" 
          name='ritual' 
          value='true' 
          checked={item.ritual === true} 
          onChange={onChange} 
          disabled={disabled}/>
        Yes
      </label>
      <label htmlFor="type">
        <input 
          type="radio" 
          name='ritual' 
          value='false' 
          checked={item.ritual === false} 
          onChange={onChange} 
          disabled={disabled}/>
        No
      </label>
      
    </>
  )
}

export default SpellFields
