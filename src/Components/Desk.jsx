import React from 'react'
import speaker from "../img/speaker.png"
import vr from "../img/vr.png"
import laptop from "../img/latop.png"
import ps from "../img/ps.png"
import watchh from "../img/piku.png"
import headd from "../img/headphone.png"
import { motion, useMotionValue } from 'motion/react'


const Desk = () => {
   
  return (
    
    <div >
        <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{staggerChildren:0.7,duration:1}} className=' w-[100%] grid grid-cols-4 grid-flow-row overflow-hidden space-y-2 space-x-2 pl-1 pr-1 max-sm:flex max-sm:flex-wrap  max-sm:justify-center  max-sm:space-y-10 '>
            
            <div className='h-[27vw] max-sm:rounded-l-none max-sm:w-[80vw]  max-sm:h-[40vw] rounded-xl max-sm:rounded-full flex items-center max-sm:justify-around bg-black'>
                <motion.div className='space-y-0.5 pl-2 ml-3 max-sm:ml-0' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.3,staggerChildren:0.2}} >
                    <motion.div className='text-[1vw] max-sm:text-[3vw] text-gray-600  font-bold opacity-[0.6]'>Play</motion.div>
                    <motion.div className='text-[2vw] max-sm:text-[4vw] text-white font-bold'>With</motion.div>
                    <motion.div className='text-[3vw] max-sm:text-[8vw] text-gray-600 font-bold'>Earphone</motion.div>
                    <motion.button whileHover={{scale:1.2}} className='px-3 mt-2 py-1 max-sm:text-[3vw] text-[1vw] bg-red-600 rounded-full rounded-l-none font-bold text-white'>Browser</motion.button>
                </motion.div>
                <div >
                    <motion.img whileHover={{scale:1.2}} src={headd} alt="" className='w-[25vw] p-3  max-sm:w-[29vw]' />
                </div>

            </div>


          <div className=' h-[27vw] max-sm:rounded-full max-sm:rounded-l-none  rounded-xl max-sm:w-[80vw]    max-sm:h-[40vw] flex items-center  max-sm:justify-around bg-[#FFC72C]'>
                <div className='space-y-0.5 pl-2 ml-3 max-sm:ml-0'>
                    <div className='text-[1vw] max-sm:text-[3vw] text-gray-600  font-bold opacity-[0.6]'>Play</div>
                    <div className='text-[2vw] max-sm:text-[4vw]  text-white font-bold'>With</div>
                    <div className='text-[3vw] max-sm:text-[8vw] text-yellow-600 font-bold'>Gad</div>
                    <motion.button whileHover={{scale:1.2}} className='px-3 mt-2 py-1 text-[1vw] max-sm:text-[3vw] bg-white rounded-full rounded-l-none font-bold text-[#FFC72C]'>Browser</motion.button>
                </div>
                <div >
                    <motion.img whileHover={{scale:1.2}} src={watchh} alt="" className='w-[30vw] p-3  max-sm:w-[29vw]' />
                </div>

            </div>



            <div className=' col-span-2 h-[27vw] max-sm:rounded-full max-sm:rounded-l-none  max-sm:w-[80vw] max-sm:h-[40vw]  rounded-xl  max-sm:justify-around flex items-center bg-red-700'>
                <div className='space-y-0.5 pl-2 ml-3 max-sm:ml-0'>
                    <div className='text-[1vw] max-sm:text-[3vw] text-gray-600  font-bold opacity-[0.6]'>Play</div>
                    <div className='text-[2vw]  max-sm:text-[4vw] text-white font-bold'>With</div>
                    <div className='text-[3vw] max-sm:text-[8vw] text-red-200 font-bold'>Laptops</div>
                    <motion.button whileHover={{scale:1.2}} className='px-3 mt-4 py-1 max-sm:text-[3vw] rounded-l-none text-[1vw] bg-white rounded-full font-bold text-red-700'>Browser</motion.button>
                </div>
                <div >
                    <motion.img whileHover={{scale:1.2}} src={laptop} alt="" className='w-[30vw] p-3  max-sm:w-[29vw]' />
                </div>

            </div>



          <div className='col-span-2 h-[27vw] max-sm:w-[80%] max-sm:rounded-l-none  max-sm:rounded-full max-sm:h-[40vw]  rounded-xl flex  max-sm:justify-around items-center bg-red-700  '>
                <div className='space-y-0.5 pl-2 ml-3 max-sm:ml-0'>
                    <div className='text-[1vw] max-sm:text-[3vw] text-gray-600  font-bold opacity-[0.6]'>Play</div>
                    <div className='text-[2vw] max-sm:text-[4vw] text-white font-bold'>With</div>
                    <div className='text-[3vw] max-sm:text-[8vw] text-red-200 font-bold'>Console</div>
                    <motion.button whileHover={{scale:1.2}} className='px-3 mt-4 py-1 max-sm:text-[3vw] text-[1vw] rounded-l-none bg-red-900 rounded-full font-bold text-white'>Browser</motion.button>
                </div>
                <div >
                    <motion.img whileHover={{scale:1.2}} src={ps} alt="" className='w-[30vw] p-3  max-sm:w-[29vw] ' />
                </div>

            </div>

           <div className=' h-[27vw] max-sm:w-[80%] max-sm:rounded-l-none   rounded-xl max-sm:rounded-full flex max-sm:h-[40vw] max-sm:justify-around items-center bg-green-700 '>
                <div className='space-y-0.5 pl-2 ml-3 max-sm:ml-0'>
                    <div className='text-[1vw] max-sm:text-[3vw] text-gray-600  font-bold opacity-[0.6]'>Play</div>
                    <div className='text-[2vw] max-sm:text-[4vw] text-white font-bold'>With</div>
                    <div className='text-[3vw] max-sm:text-[8vw] text-green-300 font-bold'>Ocules</div>
                    <motion.button whileHover={{scale:1.2}} className='px-3 mt-2 py-1 max-sm:text-[3vw] text-[1vw] rounded-l-none bg-white rounded-full font-bold text-green-700'>Browser</motion.button>
                </div>
                <div >
                    <motion.img whileHover={{scale:1.2}} src={vr} alt="" className='w-[25vw] p-3  max-sm:w-[29vw]' />
                </div>
            </div>


           <div className=' h-[27vw] max-sm:w-[80%] rounded-xl max-sm:rounded-l-none  max-sm:rounded-full max-sm:h-[40vw] max-sm:justify-around flex items-center bg-blue-500  '>
                <div className='space-y-0.5 pl-2 ml-3 max-sm:ml-0'>
                    <div className='text-[1vw] max-sm:text-[3vw] text-gray-600  font-bold opacity-[0.6]'>Play</div>
                    <div className='text-[2vw] max-sm:text-[4vw] text-white font-bold'>With</div>
                    <div className='text-[3vw] max-sm:text-[8vw] text-blue-300 font-bold'>Speakers</div>
                    <motion.button whileHover={{scale:1.2}} className='px-4  mt-2 py-1  max-sm:text-[3vw] rounded-l-none  text-[2vw] bg-white rounded-full font-bold text-blue-500'>Browser</motion.button>
                </div>
                <div >
                    <motion.img whileHover={{scale:1.2}} src={speaker} alt="" className='w-[25vw] p-  max-sm:w-[29vw]' />
                </div>

            </div>



      










        </motion.div>
      
    </div>
  )
}

export default Desk
