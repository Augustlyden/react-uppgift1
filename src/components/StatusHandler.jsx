import React from 'react'

const StatusHandler = ({ loading, error, children }) => {
  if (error) return 
      <div>
        <h2>Error loading items</h2>
        <p>{error}</p>
      </div>
  if (loading) return <div>Loading items...</div>

  return <>{children} </>
}

export default StatusHandler
