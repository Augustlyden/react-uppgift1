import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { getItemByIndex } from '../api/dataApi';
import SpellDetail from '../components/SpellDetail';
import EquipmentDetail from '../components/EquipmentDetail';
import StatusHandler from '../components/StatusHandler';
import { usePageStatus } from '../hooks/usePageStatus';

const ItemDetailPage = () => {
  const { category, slug } = useParams();
  const location = useLocation();
  const [item, setItem] = useState(null);
  const { loading, error, wrapAsync } = usePageStatus(false)

  useEffect(() => {
    const fetchItem = async () => {
      if (location.state?.item?.is_custom) {
        setItem(location.state.item);
        return
      }
      const data = await getItemByIndex(category, slug);
      setItem(data);
    }
    wrapAsync(fetchItem)
  }, [category, slug, location.state?.item])

  const fromInventory = location.state?.from === 'inventory'
  const backUrl = fromInventory ? "/" : "/shop"
  const backText = fromInventory ? "Back to Inventory" : "Back to shop"

  return (
    <main>
      <StatusHandler loading={loading} error={error}>
        <Link to={backUrl}>{backText}</Link>
        {category === 'spells' ? (
          <SpellDetail item={item} />
        ) : (
          <EquipmentDetail item={item} />
        )}
      </StatusHandler>
    </main>
  )
}

export default ItemDetailPage

