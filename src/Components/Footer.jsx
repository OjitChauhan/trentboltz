import React from 'react'
import { GiSmartphone } from "react-icons/gi";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import '@fontsource/monoton';
import {motion} from "motion/react"

const footer = ({searchh}) => {
    const b=[<FaInstagramSquare />,<FaFacebook />,<FaLinkedin />]
  return (
    <motion.div className='mt-10 pb-10 ' initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{staggerChildren:0.7,duration:1}}>
      <div className='flex flex-wrap justify-around mt-7 space-y-10 space-x-15'>

        


        <div className='space-y-5 max-sm:bg-gray-200 max-sm:w-[98%] max-sm:h-[30vh] max-sm:rounded-lg p-5'>
         <div className={`font-sans text-3xl max-md:text-2xl font-bold  ${searchh?"text-[#005A9C]":"text-[#FF1493]"} cursor-pointer`} style={{fontFamily:"monoton"}}>Anything</div>
         <div className={` ${searchh?"text-white":"text-black"} opacity-[0.7] text-sm max-md:text-[10px]`}>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Minima, ea.</div>
         <button className='bg-red-500 py-1 px-2 font-normal max-md:text-[10px] rounded-full text-white'>Visit On Youtube Channel</button>
        </div>
       
        <div className={`space-y-2 ${searchh?"text-white":"text-black"}`}>
         <div className='text-lg font-bold '>Important Links</div>
         <div className=' opacity-[0.7] text-sm'>Home</div>
         <div className=' opacity-[0.7] text-sm'>About</div>
         <div className=' opacity-[0.7] text-sm'>Contact</div>
         <div className= "opacity-[0.7] text-sm">Blog</div>
        </div>

        <div className={`space-y-2 ${searchh?"text-white":"text-black"}` }>
        <div  className='text-xl font-bold '> Links</div>
         <div className=' opacity-[0.7] text-sm'>Home</div>
         <div className=' opacity-[0.7] text-sm'>About</div>
         <div className=' opacity-[0.7] text-sm'>Contact</div>
         <div className=' opacity-[0.7] text-sm'>Blog</div>
        </div>
       
        <div className={`space-y-3 ${searchh?"text-white":"text-black"}`}>
            <div className='flex items-center gap-2'>
                <div className=' text-xl'><GiSmartphone /></div>
                <div className='text-sm  opacity-90'>+91 7800876543</div>

            </div>
             <div className={`flex items-center gap-2 ${searchh?"text-white":"text-black"}`}>
            <div><CiLocationArrow1 className=' text-xl'/></div>
             <div className={`text-sm  opacity-90`}> Uttar Pradesh</div>
            </div>

           

            <div className={`flex gap-2 text-xl  ${searchh?"text-white":"text-black"}`}>
                {b.map((b,index)=>(
                    <div key={index} className='flex flex-row'>
                        <div>{b}</div>
                    </div>

                ))}
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default footer
