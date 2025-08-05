import React from 'react'
import green from "../img/watchgren.png"
import {motion} from "motion/react"
import { useMotionValue } from 'motion/react'


const Card2 = () => {
  const scale=useMotionValue(1)
  return (
    <div className='space-y-5'>
       
          <div className=' h-[160px] max-sm:h-[135px] mr-5  flex justify-center  mt-15 max-sm:mt-8'>
                          <div className=' bg-green-500 rounded-lg cursor-pointer w-[90%] h-full flex items-center justify-around p-2'>
                    <div >
                        <div className='text-white font-bold text-[16px] max-sm:text-[8px]'>Samsung</div>
                        <div className='text-white font-bold text-[24px] tracking-wider max-sm:text-[16px]' >HAPPY Hours</div>
                        <div className='text-[20px] font-bold opacity-75 text-white max-sm:text-[8px]'>Exclusive Offer</div>
                    </div> 
                    <div>
                        <img src={green} className="h-[200px] h-[130px] max-sm:h-[150px] " alt=""initial={{opacity:0 ,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.4}}/>
                    </div>
                    <div >
                    <div className='text-white font-bold text-[16px]  max-sm:text-[8px]'>Smart Sale</div>
                        <div className='text-white font-bold text-[24px] max-sm:text-[14px] tracking-wider'>Winter Sale</div>
                        <div className='text-[20px] font-bold max-sm:text-[8px] opacity-75 text-white'>Lorem, ipsum dolor.</div>
                        <motion.button onHoverStart={()=>scale.set(1.2)} onHoverEnd={()=>scale.set(1)} style={{scale}}  className='bg-white text-green-500  max-sm:text-[8px] rounded-full font-bold text-[12px] px-4 py-1 mt-2'>Start</motion.button>
        
                    </div>
                    </div>
                    </div>
       </div>
   
  )
}

export default Card2
