import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { getItemByIndex } from '../api/dataApi';
import SpellDetail from '../components/SpellDetail';
import EquipmentDetail from '../components/EquipmentDetail';

const ItemDetailPage = () => {
  const { category, slug } = useParams();
  const location = useLocation();

  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchItem = async () => {
    try {
      setLoading(true);
      setError(null);
      if (location.state?.item?.is_custom) {
        setItem(location.state.item);
        setLoading(false)
        return
      }
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

  const from = location.state?.from === 'inventory'

  const backUrl = from ? "/" : "/shop"
  const backText = from ? "Back to Inventory" : "Back to shop"
  return (
    <main>
      <Link to={backUrl} className='back-btn'>{backText}</Link>
      {category === 'spells' ? (
        <SpellDetail item={item} />
      ) : (
        <EquipmentDetail item={item} />
      )}
    </main>
  )
}

export default ItemDetailPage

