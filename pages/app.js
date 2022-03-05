import { ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon, MinusIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import Box from '../components/ui/box'
import NewEvent from '../components/newEvent'
import Timeline from '../components/timeline/timeline'
import UpcomingEventBox from '../components/upcomingEventBox'
import { iconSize } from '../constants'
import weekData from '../data/weekDays.json'
import CircleAvatorWrapper from '../components/ui/circleAvatarWrapper'
import Image from 'next/image'
import profilePic from '../public/profile.jpeg';

const App = () => {
  const [showNewEvent, setShowNewEvent] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);



  return (
    <div className='h-screen'>
      <div className='flex flex-row justify-between text-white p-4'>
        <div className='flex flex-row text-xl items-center'>
          <ChevronLeftIcon height={iconSize} width={iconSize} />
          <p className='ml-2'>2021
            September</p>

        </div>
        <div className='bg-gray-300 w-10 h-10 rounded-full'>
          <Image className='rounded-full' src={profilePic} layout={'responsive'} width={100} height={100} alt='profile pic' />
        </div>
      </div>
      {showCalendar
        ? <div className='mt-6 flex justify-center bg-gray-800'>
          <Calendar view='month' showDoubleView={true} />
        </div>
        : <div className='w-screen mt-3 flex justify-evenly bg-gray-800 font-serif'>
          {
            weekData.map((day, id) => (
              <div key={id} className='flex flex-col text-white items-center justify-center text-center'>
                {(day.date == new Date().getDate())
                  ? <div className='highlight'><p>{day.day}</p>
                    <p>{day.date}</p></div>
                  : <><p>{day.day}</p>
                    <p >{day.date}</p></>
                }
              </div>
            ))
          }
        </div>
      }


      {showNewEvent ? <NewEvent showNewEvent={showNewEvent} setShowNewEvent={setShowNewEvent} /> : <></>}
      <div className='fixed h-80vh w-screen bottom-0'>
        <div className='rounded-t-lg flex flex-col bg-white'>
          <span onClick={() => { setShowCalendar(!showCalendar) }} className='mt-2 mx-auto'>{showCalendar ? <ChevronUpIcon width={iconSize} height={iconSize} /> : <ChevronDownIcon width={iconSize} height={iconSize} />} </span>
          <h2 className='mt-8 font-serif ml-3 text-xl'>Upcoming Events (3)</h2>

          <div className='flex flex-row overflow-x-scroll'>
            <UpcomingEventBox title={"Design Scrum"} time={"11: 45 AM"} duration={"45 min"} color="bg-light-red" accent={"bg-accent-red"} />
            <UpcomingEventBox title={"Q2 Planning"} time={"11: 45 AM"} duration={"45 min"} color="bg-light-yellow" accent={"bg-accent-yellow"} />
            <UpcomingEventBox title={"Coldplay Concert"} time={"11: 45 AM"} duration={"45 min"} color="bg-light-green" accent={"bg-accent-green"} />
          </div>
          {showCalendar ? <></> : <Timeline />}
        </div>
      </div>

      <button
        onClick={() => { setShowNewEvent(!showNewEvent) }}
        className='bg-red-400 w-12 h-12 rounded-full text-3xl fixed right-4 bottom-4 text-white'>
        +
      </button>
    </div >
  )
}

export default App