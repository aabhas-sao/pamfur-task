import React from 'react'
import Box from '../components/box'
import NewEvent from '../components/newEvent'
import Timeline from '../components/timeline/timeline'
import UpcomingEventBox from '../components/upcomingEventBox'

const App = () => {
  return (
    <div>
      <div></div>
      <NewEvent />
      {/* <div className='fixed h-80vh w-screen bottom-0'>
        <div className='rounded-t-lg flex flex-col bg-white'>
          <h2 className='mt-8 font-serif ml-3 text-xl'>Upcoming Events (3)</h2>
          <div className='flex flex-row overflow-x-scroll'>
            <UpcomingEventBox title={"Design Scrum"} time={"11: 45 AM"} duration={"45 min"} color="bg-red-200" />
            <UpcomingEventBox title={"Q2 Planning"} time={"11: 45 AM"} duration={"45 min"} color="bg-yellow-200" />
            <UpcomingEventBox title={"Coldplay Concert"} time={"11: 45 AM"} duration={"45 min"} color="bg-green-200" />
            <Box title={"Design Scrum"} time={"11: 45 AM"} fixed={true} duration={"45 min"} color="bg-red-200" />
            <Box title={"Design Scrum"} time={"11: 45 AM"} fixed={true} duration={"45 min"} color="bg-yellow-200" />
            <Box title={"Design Scrum"} time={"11: 45 AM"} fixed={true} duration={"45 min"} color="bg-green-200" />
            <Box title={"Design Scrum"} time={"11: 45 AM"} fixed={true} duration={"45 min"} color="bg-yellow-200" />
          </div>
          <Timeline />
        </div>
      </div> */}
      <button className='bg-red-400 w-12 h-12 rounded-full text-3xl fixed right-4 bottom-4 text-white'>+</button>
    </div>
  )
}

export default App