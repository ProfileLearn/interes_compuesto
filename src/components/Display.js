import React from 'react'

export const Display = (props) => {
  return (
    <div className='display'>
      <input type="text" disabled value={props.value} />
    </div>
  )
}
