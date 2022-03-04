import React from 'react'
import Box from '../box'
import TimeHeading from './timeHeading'

const Timeline = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row px-6 py-4'>
        <TimeHeading time={"11:00 am"} duration={'45 mins'} />
        <Box fixed={false} />

      </div>

    </div>
  )
}

export default Timeline