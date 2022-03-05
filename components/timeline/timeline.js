import React from 'react'
import Box from '../ui/box'
import TimelineEventBox from '../timelineEventBox'
import TimeHeading from './timeHeading'
import events from '../../data/events.json'

const Timeline = () => {
  const today = events[0];
  return (
    <div className='mt-3 flex flex-col'>
      <h2 className='ml-6'><span className='font-bold'>Today</span>, Thursday 21</h2>
      {
        today.map((event, id) => (
          <div key={id} className='flex flex-row items-center px-6 py-4'>
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