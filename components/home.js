import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import calendarImage from '../public/main.png'


const Home = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-between'>

      <div className='mt-12'>
        <h1 className='ml-8 text-4xl text-white'>Calendar<span className='text-5xl'> 2017</span></h1>
        <div className='w-4/5 mx-auto'>
          <Image src={calendarImage} alt="calendar image" width={'100'} height={'100'} layout={'responsive'} />
        </div>
      </div>
      <div className='bg-white rounded-md bottom-0 p-3'>
        <h2 className='text-4xl'>Hi Aman, </h2>
        <p className='mt-2 text-lg'>
          Welcome to your daily event calendar. Be more engaging & personalised than ever before. We’ll help you in Tracking
          Upcoming Events, Scheduling Meetings & Creating New Event!</p>

        <div className='mt-8'>
          <Link className='' href={'app'}>-&gt;</Link>
        </div>
      </div>

    </div>
  )
}

export default Home