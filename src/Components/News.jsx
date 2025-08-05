import React from 'react'
import watch from "../img/173289-re5.avif"
import vr from "../img/vrr.jpeg"
import phone from "../img/inf.jpeg"
import {motion} from "motion/react"

const News = ({searchh}) => {
  
  return (
   <motion.div className='flex flex-col w-screen gap-2  mt-20 '  initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{staggerChildren:0.7,duration:1}}>
     <div className=' flex justify-center  '>
      <div>
        <div className={` text-2xl font-bold tracking-tightest ${searchh?"text-white":"text-black"}`}>Recent News</div>
        <div className='opacity-25 gray-300 text-center'>Lorem </div>
        </div>
     </div>
     <div className='flex justify-center gap-5 max-sm:flex max-sm:flex-col max-sm:items-center'>


     <div className='w-[26%] max-sm:w-[80%]'>
      <div>
        <div><img src={watch} alt="" className='w-full h-40 rounded-lg background-cover'/></div>
      </div>
      <div className='mt-4'>
         
        <div className={`text-[15px] ${searchh?"text-white":"text-black"} font-bold`}>Lorem ipsum dolor sit.</div>
        <div className={` text-[12px] ${searchh?"text-white":"text-gray-600"} opacity-[0.7] font-sans `}>Lorem ipsum dolor sit amet,mit sbse bekar school hai collge nhi consectetur adipisicing elit. Similique accusamus hell </div>
      </div>

     </div>
     
   <div className='w-[26%] gap-5 max-sm:w-[80%]'>
      <div>
        <div><img src={phone} alt="" className='w-full rounded-lg h-40  background-cover'/></div>
      </div>
      <div className='mt-4'>
         
        <div className={`text-[15px] ${searchh?"text-white":"text-gray-600"} font-bold`}>Lorem ipsum dolor sit.</div>
        <div className={`text-[12px] ${searchh?"text-white":"text-gray-600"} opacity-[0.7] font-sans`}>Lorem ipsum dolor sit amet,mit sbse bekar school hai collge nhi consectetur adipisicing elit. Similique accusamus hell </div>
      </div>

     </div>


        <div className='w-[26%] max-sm:w-[80%]'>
      <div>
        <div><img src={vr} alt="" className='w-full rounded-lg h-40 background-cover'/></div>
      </div>
      <div className='mt-4'>
         
        <div className={`text-[15px] ${searchh?"text-white":"text-black"} font-bold`}>Lorem ipsum dolor sit.</div>
        <div className={`text-[12px] ${searchh?"text-white":"text-gray-600"} opacity-[0.7] font-sans`}>Lorem ipsum dolor sit amet,mit sbse bekar school hai collge nhi  consectetur adipisicing elit. Similique accusamus hell </div>
      </div>

     </div>







     </div>
   </motion.div>
  )
}

export default News
