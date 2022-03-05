import React from 'react'
import Box from './ui/box'

const UpcomingEventBox = ({ title, color, time, duration }) => {
  return (
    <Box>
      <div className={`w-44 h-fit ${color} p-4 rounded-xl m-2 overflow-auto`}>
        <h2 className='text-lg'> {title}</h2 >
        <div className='h-4 w-4 py-2 rounded-xl bg-green-600'></div>
        <p className='text-sm'>{time} <span>{duration}</span></p>
      </div>
    </Box>
  )
}

export default UpcomingEventBox