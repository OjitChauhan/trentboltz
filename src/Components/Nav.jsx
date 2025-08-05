import React from 'react'
import { IoMdCart } from "react-icons/io";
import { IoToggleSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineArrowDownward } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";
import { SiAnytype } from "react-icons/si";
import {motion, spring} from "motion/react"
import "@fontsource/poppins";
import '@fontsource/monoton';



const Nav = ({searchh,setSearchh}) => {

   
    const [search,setSearch]=React.useState(false)
  
  
  return (
    <div className={`flex p-6  justify-between  max-sm:p-1 items-center ${searchh?"bg-[#040720]":"bg-white"} shadow-md`}>
    <div className='flex flex-row justify-around gap-20 xl:gap-15 max-sm:gap-2  lg:gap-9 md:gap-5 items-center'>
        <div >
          
           <motion.div className={`font-sans text-2xl max-sm:text-[15px] font-bold ${searchh?"text-[#005A9C]":"text-[#FF1493]"} cursor-pointer`}
           whileHover={{scale:1.2}}
           style={{fontFamily:"monoton"}}>Anything</motion.div>

        </div>
        <div >
            <div className='flex max-xl:hidden gap-10 items-center  text-gray-500 cursor-pointer list-none  ' style={{fontFamily:"poppins,sans-serif"}}>
                <motion.li whileHover={{color:searchh?"#005A9C":"black",fontWeight:1000}}>Home</motion.li>
                <motion.li whileHover={{color:searchh?"#005A9C":"black",fontWeight:1000}}>Shop</motion.li>
                <motion.li whileHover={{color:searchh?"#005A9C":"black",fontWeight:1000}}>About</motion.li>
                <motion.li whileHover={{color:searchh?"#005A9C":"black",fontWeight:1000}}>blogs</motion.li>
                
                <motion.li whileHover={{color:searchh?"#005A9C":"black",fontWeight:1000}} className='flex'>
                    <div>
                    

<select id="links" className=' outline-hidden' >
    
    <option  >Quick Links</option>
  <option value="product">trending Product</option>
  <option value=" Sales " >Best Selling</option>
  <option value="rated">Top Rated</option>
  
 
</select>
</div>

</motion.li>
            </div>
        </div>
    </div>
    <div className='flex gap-13 relative '>
        <motion.div className={`flex p-1  relative rounded-full z-20  justify-end max-lg:hidden`}
       animate={{borderColor:search?"black":"#0000"}}
       transition={{duration:2,ease:"linear"}} 
        >
            <div className='z-20 '><motion.input type="text" className='w-[27rem] left-1 z-20 bg-white border-hidden rounded-full outline-none font-sans pl-6 text-[20px] text-black '  animate={{opacity:search?1:0}} transition={{duration:0.6}}/></div>
            <div onClick={()=>setSearch(!search)} className={` ${search?"text-[#FF1493] font-bold":""}right-0 font-bold text-xl items-center flex z-20 w-[25px]`}><IoSearchOutline /></div>
            <motion.div 
          animate={{width:search?"100%":"0%"}}
          transition={{duration:0.3}}
            className={` absolute p-1 w-[42%] border-2 z-10  rounded-full top-0 right-0 w-full h-full ${search?"border-black":"border-hidden"}`}></motion.div>
            
        </motion.div>
        
        <div className='flex mr-5 gap-10 items-center '>
            <div className={`text-2xl  cursor-pointer ${searchh?"text-[#005A9C]":"text-gray-600"} max-lg:hidden`}>
                <div className='relative'><IoMdCart />
                <div className='absolute text-[10px] font-bold text-white flex items-center justify-center bg-red-600 h-[15px] w-[15px] rounded-full  top-[-9px] right-[-2px]' >1</div>
                </div>
                
            </div>
            <div className=''>
                <div className='relative w-[45px] h-[26px]  rounded-full bg-gray-300 cursor-pointer '>
                    <motion.div className={`absolute w-[20px] cursor-pointer top-1 left-1 bottom-2 right-1 h-[20px] rounded-full ${searchh?"bg-[#005A9C]":"bg-[#FF1493]"}`}onClick={()=>setSearchh(!searchh)}
                        animate={{x:searchh?"5%":"95%"}}
                        transition={{duration:1,type:spring,stiffness:100}}></motion.div>
                </div>
            </div>
        </div>
   
     </div>
    </div>
  )
}

export default Nav