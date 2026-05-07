import React from 'react'
import CreateItemForm from '../components/CreateItemForm'

const CreateItemPage = ({ onAddItem, onUpdateItem }) => {
  return (
    <main>
      <CreateItemForm onAddItem={onAddItem} onUpdateItem={onUpdateItem}/>
    </main>
  )
}

export default CreateItemPage
