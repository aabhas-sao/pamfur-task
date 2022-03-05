import React from 'react'
import Image from 'next/image'
import zoomIcon from '../public/zoom.png'

const TimelineEventBox = ({ title, color, meetingId }) => {
  return (
    <div className={`w-100 h-100 ${color} p-4 rounded-xl m-2 overflow-auto`}>
      <h2>{title}</h2>
      <div className='flex flex-row items-center'>
        <div className='w-5 h-5'>
          <Image src={zoomIcon} alt='zoom icon' />
        </div>
        <p className='ml-1 text-xs'>{meetingId}</p>
      </div>
    </div >
  )
}

export default TimelineEventBox