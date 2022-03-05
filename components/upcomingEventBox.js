import React from 'react'
import Box from './ui/box'
import CircleAvatarWrapper from './ui/circleAvatarWrapper'

const UpcomingEventBox = ({ title, color, accent, time, duration }) => {
  return (
    <Box>
      <div className={`w-44 h-28 ${accent} ${color} border-l-4 p-3 rounded-xl m-2 overflow-y-hidden`}>
        <h2 className='text-lg mb-2'> {title}</h2 >
        <CircleAvatarWrapper />
        <p className='text-sm'>{time} <span>{duration}</span></p>
      </div>
    </Box>
  )
}

export default UpcomingEventBox