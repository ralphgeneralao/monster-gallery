import React from 'react'

import './card.styles.css'

export const Card = ({ monster }) => {
  const { id, name, email } = monster
  return (
    <div className='card-container'>
      <img alt='monster' src={`https://robohash.org/${id}?set=set2`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}
