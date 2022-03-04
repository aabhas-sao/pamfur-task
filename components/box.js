import React from 'react'

const Box = ({ title, time, duration, fixed, color }) => {
  return (
    <div>
      {fixed ?
        <div className={`w-36 h-fit ${color} p-4 rounded-xl m-2 overflow-auto`}>
          < h2 className='text-lg'> {title}</h2 >
          <p className='text-sm'>{time} <span>{duration}</span></p>
        </div >
        :
        <div className={`w-100 h-100 ${color} p-4 rounded-xl m-2 overflow-auto`}>
          <h2>{title}</h2>
          <p>{time} <span>{duration}</span></p>
        </div>}
    </div>)
}

export default Box