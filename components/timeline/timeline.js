import React from 'react'
import Box from '../ui/box'
import TimelineEventBox from '../timelineEventBox'
import TimeHeading from './timeHeading'
import events from '../../data/events.json'
import weatherIcon from '../../public/cloudy_sun.png'
import Image from 'next/image'

const Timeline = () => {
  const today = events[0];
  return (
    <div className='mt-3 flex flex-col'>
      <div className='flex flex-row justify-between px-6'>
        <h2 className=''>
          <span className='font-bold'>Today</span>, Thursday 21
        </h2>
        <div className=' flex flex-row '>
          <div className='h-6 w-6'>
            <Image src={weatherIcon} alt='weather partly sunny partly cloudy' height={100} width={100} layout='responsive' />
          </div>
          <p className='ml-2 text-sm text-blue-500'>31&deg; / 25&deg;</p>
        </div>
      </div>
      {
        today.map((event, id) => (
          <div key={id} className='flex flex-row items-center px-6 py-0'>
            <TimeHeading time={event.time} duration={event.duration} />

            <div className='flex-1'>
              <Box>
                <TimelineEventBox {...event} />
              </Box>
            </div>
          </div>
        ))
      }
      <div className='p-6'>
        <h2 className=''><span className='font-serif font-bold'>Tomorrow</span>, Thursday 22</h2>
        <p>No tasks</p>
      </div>
    </div>
  )
}

export default Timeline