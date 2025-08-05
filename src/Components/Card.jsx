import React from 'react'
import head from "../img/head.png"

import { motion, useMotionValue } from "framer-motion"



const Card = () => {
    const scale=useMotionValue(1)
  return (
    
    <div>
        <div className=' h-[160px] max-sm:h-[135px] mr-5  flex justify-center  mt-15'>
                  <div className=' bg-red-500 rounded-lg cursor-pointer w-[90%] h-full flex items-center justify-around p-3'>
            <div >
                <div className='text-white font-bold text-[16px] max-sm:text-[8px]'>Motorola</div>
                <div className='text-white font-bold text-3xl text-[24px] max-sm:text-[8px] tracking-wider'>HAPPY SMILE</div>
                <div className='max-sm:text-[8px] text-[16px] font-bold opacity-75 text-white'>Exclusive Offer</div>
            </div> 
            <div>
                <motion.img src={head} className="h-[200px] h-[130px] max-sm:h-[150px]" alt="" initial={{opacity:0 ,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.4}}/>
            </div>
            <div>
            <div className='text-white font-bold text-[16px] max-sm:text-[8px]'>Air Sale</div>
                <div className='text-white font-bold text-3xl text-[24px] max-sm:text-[16px] tracking-wider'>Winter Sale</div>
                <div className='max-sm:text-[8px] text-[16px] font-bold opacity-75 max-sm:text-[8px] text-white'>Lorem, ipsum dolor.</div>
                <motion.button  className='bg-white text-red-500  max-sm:text-[8px] rounded-full font-bold text-[12px] px-4 py-1 mt-2' onHoverStart={()=>scale.set(1.2)} onHoverEnd={()=>scale.set(1)} style={{scale}} >Start</motion.button>

            </div>
            </div>
         </div>



            
         </div>








    
      
   
  )
}

export default Card
