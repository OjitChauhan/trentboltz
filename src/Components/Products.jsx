import React from 'react'
import head from "../img/head.png"
import {motion} from "motion/react"

const Products = ({searchh}) => {
    const stagger={
     hidden:{opacity:0,y:20},
     visible:{opacity:1,y:0}
    }
  return (
    <div className='space-y-3 mt-10'>
        <div className='overflow-hidden flex  justify-center items-center'>
            <div className='flex flex-col items-center space-y-2'>
            <div className='text-2xl text-black font-bold'>
                Best Seller Products
            </div>
            <div className='text-sm text-gray-900 opacity-[0.7]'>Lorem, ipsum.3345</div>
            </div>
        </div>
      
        <motion.div className=' grid grid-flow-row grid-cols-4 p-2 rounded-t-lg rounded-r-none rounded0b-lg  flex flex-wrap gap-4 ml-9 max-sm:grid-cols-3'
        variants={{visible:{
            transition:{
                staggerChildren:0.3
            }
        }}}
        initial="hidden"
        whileInView="visible">

            {[...Array(8)].map((s,index)=>(
                  <motion.div  key={index} variants={stagger}>
                <div className={`w-[18vw] h-[10vw] ${searchh?"bg-[#223344]":"bg-gray-200"} rounded-t-lg rounded-r-none rounded-b-lg   flex justify-center items-center `}>
                    <img src={head} alt="" className='w-[6vw]' />

                </div>
                <div className={`text-[10px]  font-bold ${searchh?"text-white":"text-black"} `}>Bolt HeadPhone</div>
                <div className={`text-[10px] font-bold font-bold ${searchh?"text-white":"text-gray-900"} opacity-25`}>$500</div>
            </motion.div>

            ))}
          
        </motion.div>
      </div>
  
  )
}

export default Products
