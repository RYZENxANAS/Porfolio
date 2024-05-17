import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'

const Technlogies = () => {
  return (
    <div className='w-full h-[50vh]'>
        <h1 class="pb-8 text-center text-6xl font-thin tracking-tight lg:mt-16 lg-text-4xl">Technologies</h1>
        <div className='flex gap-10 flex-wrap justify-center '>

            <RiReactjsLine className='text-7xl text-cyan-400'/>
            <TbBrandNextjs  className='text-7xl text-white'/>
            <SiMongodb  className='text-7xl text-green-500'/>
            <DiRedis  className='text-7xl text-red-600'/>
            <FaNodeJs className='text-7xl  text-green-500'/>
        </div>
    </div>
  )
}

export default Technlogies