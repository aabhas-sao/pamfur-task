import React from 'react'

const TimelineEventBox = ({ title, color, meetingId }) => {
  return (
    <div className={`w-100 h-100 ${color} p-4 rounded-xl m-2 overflow-auto`}>
      <h2>{title}</h2>
      {
        <p>{meetingId}</p>
      }
    </div >
  )
}

export default TimelineEventBox