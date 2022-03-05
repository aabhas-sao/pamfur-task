import React from 'react'
import { ChevronRightIcon, LocationMarkerIcon, ClipboardCheckIcon, PaperClipIcon, ClockIcon, XIcon } from '@heroicons/react/outline'

const iconSize = 24;
const uiData = [
  {
    title: "Location",
    iconLeft: <LocationMarkerIcon height={iconSize} width={iconSize} />
  },
  {
    title: "Agenda",
    iconLeft: <ClipboardCheckIcon height={iconSize} width={iconSize} />
  },
  {
    title: "Add Attachment",
    iconLeft: <PaperClipIcon height={iconSize} width={iconSize} />
  },
  {
    title: "Location",
    iconLeft: <LocationMarkerIcon height={iconSize} width={iconSize} />
  }
]

const NewEvent = ({ showNewEvent, setShowNewEvent }) => {
  return (
    <div className='bg-white w-screen h-3/5 fixed bottom-0 z-10 rounded-t-2xl'>
      <div className='mt-5 flex flex-row px-2'>
        <XIcon onClick={() => setShowNewEvent(!showNewEvent)} height={iconSize * 1.3} width={iconSize * 1.3} />
        <h2 className='text-xl ml-3'> New Event</h2>
      </div>
      <div className='flex flex-row justify-center items-center px-5 border-2 mx-2 bg-gray-200 rounded-3xl'>
        <input placeholder='add title' />
        <div className=' px-2 h-6 w-6 bg-green-400 rounded-full'></div>
      </div>

      <div className='py-4 px-3 flex flex-row justify-between '>
        <div className='w-48 flex-1 flex flex-col'>
          <div className='w-screen flex flex-row'>
            <ClockIcon height={iconSize} width={iconSize} />
            <p className='ml-2'>All Day</p>

          </div>
          <div className='mt-4 ml-2'>
            <div className='flex flex-row justify-between'>
              <p>Thursday, 21 September</p>
              <p>02:30pm</p>
            </div>
            <div className='flex flex-row justify-between'>
              <p>Thursday, 21 September</p>
              <p>03:30pm</p>
            </div>
          </div>
        </div>

        <ChevronRightIcon height={iconSize} width={iconSize} />
        <hr />
      </div>
      {
        uiData.map((option, id) => (
          <div key={id} className='py-4 px-3 flex flex-row justify-between'>
            <div className='w-screen flex flex-row'>
              {option.iconLeft}
              <p className='ml-2'>{option.title}</p>
            </div>
            <ChevronRightIcon height={iconSize} width={iconSize} />
            <hr />
          </div>
        ))
      }

    </div>
  )
}

export default NewEvent