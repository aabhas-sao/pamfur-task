import React from 'react'
import Box from './ui/box'
import CircleAvatarWrapper from './ui/circleAvatarWrapper'

const UpcomingEventBox = ({ title, color, time, duration }) => {
  return (
    <Box>
      <div className={`w-44 h-28 ${color} p-3 rounded-xl m-2 overflow-auto`}>
        <h2 className='text-lg mb-2'> {title}</h2 >
        <CircleAvatarWrapper />
        <p className='text-sm'>{time} <span>{duration}</span></p>
      </div>
    </Box>
  )
}

export default UpcomingEventBox