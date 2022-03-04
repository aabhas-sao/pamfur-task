import React from 'react'

const TimeHeading = ({ time, duration }) => {
  return (
    <div className='flex flex-col'>
      <p className='font-serif font-semibold'>{time}</p>
      <p>{duration}</p>
    </div>
  )
}

export default TimeHeading