import React from 'react'

const TimeHeading = ({ time, duration }) => {
  return (
    <div className='flex flex-col'>
      <p className='font-semibold'>{time}</p>
      <p>{duration}</p>
    </div>
  )
}

export default TimeHeading