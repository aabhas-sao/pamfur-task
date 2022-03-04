import React from 'react'
import Box from '../components/box'
import Timeline from '../components/timeline/timeline'

const App = () => {
  return (
    <div>
      <div></div>
      <div className='flex flex-col bg-white'>
        <h2>Upcoming Events (3)</h2>
        <div className='flex flex-row overflow-auto'>
          <Box title={"Design Scrum"} time={"11: 45 AM"} fixed={true} duration={"45 min"} color="bg-red-200" />
          <Box title={"Design Scrum"} time={"11: 45 AM"} fixed={true} duration={"45 min"} color="bg-yellow-200" />
          <Box title={"Design Scrum"} time={"11: 45 AM"} fixed={true} duration={"45 min"} color="bg-green-200" />
          <Box title={"Design Scrum"} time={"11: 45 AM"} fixed={true} duration={"45 min"} color="bg-yellow-200" />
        </div>

        <Timeline />

      </div>
    </div>
  )
}

export default App