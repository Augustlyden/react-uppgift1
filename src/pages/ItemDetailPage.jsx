import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getItemByIndex } from '../api/dataApi';

const ItemDetailPage = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchItem = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getItemByIndex(category, slug);
      setItem(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItem();
  }, [category, slug])

  if (error) {
    return (
      <div className='error'>
        <h2>Error loading item</h2>
        <p>{error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className='loader'>Loading item...</div>
    )
  }
  return (
    <div>
      
    </div>
  )
}

export default ItemDetailPage

