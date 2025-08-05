import React from 'react'
import { SiLenovo } from "react-icons/si";
import { GrHpi } from "react-icons/gr";
import { SiSamsung } from "react-icons/si";
import { SiOppo } from "react-icons/si";
import { SiMotorola } from "react-icons/si";
import { useMotionValue } from 'motion/react';
import {motion} from "motion/react"

const Company = () => {
    const a=[<SiLenovo />,<SiMotorola />,<GrHpi />,<SiSamsung />,<SiOppo />]
    const scale=useMotionValue(1)
  return (
    <div className='mt-8 '>
        <motion.div className='overflow-hidden h-[100px] max-sm:h-[60px] flex justify-around items-center bg-gray-200 pointer-cursor'  >
            {
         a.map((ind,index)=>(
            <motion.div key={index} >
                <motion.div onHoverStart={()=>scale.set(1.2)} onHoverEnd={()=>scale.set(1)} style={{scale}}  className='text-gray-600 opacity-25 text-[50px] max-sm:text-[20px]'>{ind}</motion.div>
            </motion.div>
         ))
            }
        </motion.div>
      
    </div>
  )
}

export default Company
