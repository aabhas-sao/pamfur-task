import { ArrowRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { iconSize } from '../constants'
import calendarImage from '../public/main.png'
import ellipseImage from '../public/ellipse.png'

const Home = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-between'>

      <div className='mt-12'>
        <h1 className='ml-8 text-4xl font-serif text-gray-primary'>Calendar<span className='text-5xl text-white font-semibold'> 2017</span></h1>
        <div className='w-4/5 mx-auto'>
          <Image src={calendarImage} alt="calendar image" width={'100'} height={'100'} layout={'responsive'} />
        </div>
      </div>
      <div className='bg-white rounded-md bottom-0 p-3'>
        <h2 className='text-4xl font-serif text-gray-primary'>Hi Aman, </h2>
        <p className='mt-2 mb-24 text-sm text-gray-secondary'>
          Welcome to your daily event calendar. Be more engaging & personalised than ever before. We’ll help you in <span className='font-semibold'> Tracking
            Upcoming Events, Scheduling Meetings & Creating New Event!</span></p>

        <div className='absolute right-0 -bottom-2'>
          <Image src={ellipseImage} layout='fixed' height={100} width='100' className='absolute' alt='ellipse red background' />
        </div>
        <div className='mt-8 ml-auto bottom-0 right-0 z-50 absolute text-white'>
          <Link href={'app'}><ArrowRightIcon width={iconSize * 2} height={iconSize * 2} /></Link>
        </div>
      </div>

    </div>
  )
}

export default Home