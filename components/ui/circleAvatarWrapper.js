import React from 'react'
import styles from '../../styles/CircleAvatarWrapper.module.css'
import Image from 'next/image'

const CircleAvatarWrapper = () => {
  const img = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80";
  const a = [
    { index: 10, left: 5, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80" },
    { index: 20, left: 12, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80" },
    { index: 30, left: 16, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80" },
    { index: 40, left: 18, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80" },
    { index: 50, left: 24, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80" },
  ]
  return (
    <div className='h-10 w-100 relative'>
      {/* {
        a.map((item, idx) => (
          <div key={idx} className={`h-8 w-8 z-10 bg-blue-800 rounded-full absolute left-${(item.index / 10) * 4}`}>
            <Image className=' rounded-full' src={img} height={100} width={100} alt='avator' layout='responsive' />
          </div>
        ))
      } */}

      <div className='h-8 w-8 bg-gray-800 rounded-full absolute'>
        <Image className=' rounded-full' src={img} height={100} width={100} alt='avator' layout='responsive' />
      </div>
      <div className='h-8 w-8 bg-green-800 rounded-full absolute left-4'>
        <Image className=' rounded-full' src={img} height={100} width={100} alt='avator' layout='responsive' />
      </div>
      <div className='h-8 w-8 bg-blue-800 rounded-full absolute left-8'>
        <Image className=' rounded-full' src={img} height={100} width={100} alt='avator' layout='responsive' />
      </div>
      <div className='h-8 w-8 bg-blue-800 rounded-full absolute left-12'>
        <Image className=' rounded-full' src={img} height={100} width={100} alt='avator' layout='responsive' />
      </div>
      <div className='h-8 w-8 bg-white flex justify-center items-center border-2 text-sm rounded-full absolute left-16'>
        <p>{2}+</p>
      </div>

    </div >
  )
}

export default CircleAvatarWrapper