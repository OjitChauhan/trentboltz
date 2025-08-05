import React from 'react'
import "@fontsource/poppins";
import laptop from "../img/coolies.png"
import head from '../img/head.png'
import {motion} from "motion/react"

const Cursol = ({searchh}) => {
  const [Click,setClick]=React.useState(false)
     const stagger={
            hidden:{opacity:0},
            visible:{opacity:1}
        }

  
  return (
    
    <div >
      <div className={`${searchh?"bg-[#223344]":"bg-[#E5E9EC]"} mb-5   rounded-lg h-[75vh] max-lg:h-[40vh]`} onClick={()=>setClick(!Click)}>
       
        {

        Click?
      <motion.div className='  h-[80%] max-lg:h-[44vh]  relative cursor-pointer flex items-center   max-md:ml-[2vw] max-md:mr-[1vw]  ml-[2vw] mr-[2vw]'
        animate={{x:Click?["40%","0%"]:"",opacity:Click?"1":"0"}} transition={{duration:0.1,ease:"easeOut"}}
       
      >
          
       <motion.div  className='font-normal relative' style={{fontFamily:"monoton"}} >
        <motion.div  >
        <div className={`text-[2vw]  max-sm:text-[2vh]  ${searchh?"text-[#005A9C]":"text-black"}`}><p>Beats solo</p></div>
        <div className={`text-[3vw] max-sm:text-[3vh]  ${searchh?"text-[#005A9C]":"text-black"}`}><p>Branded</p></div>
        <div className='text-[4vw] text-white  max-sm:text-[4vh]'
        
        ><p>LAPTOPS</p></div>
        <motion.button className='font-sans px-4 max-sm:text-[1vh] text-[1vw] text-white py-1 bg-red-500 border-none outline-none rounded-full'
        whileHover={{backgroundColor:"#FF1493"}}>Shop By Category</motion.button>
       </motion.div>
       </motion.div>
        <img src={laptop} alt="error" className='ml-[65vw] max-sm:ml-[50vw] absolute  max-lg:w-[25vw] max-sm:w-[18vh]'  />
        </motion.div>
         :

        <motion.div className='w-[100%]  h-[80%] max-lg:h-[40vh] cursor-pointer flex items-center relative  max-md:ml-[1vw] max-md:mr-[1vw]  ml-[2vw] mr-[2vw]'
         animate={{x:Click?"":["(49%","1%"]}} transition={{duration:0.1,ease:"easeOut"}}>
          
       <motion.div className='font-normal ' style={{fontFamily:"monoton"}} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{staggerChildren:0.7,duration:1}}>
      <motion.div variants={{stagger}} >     
         <div className={`text-[2vw] max-sm:text-[2vh] ${searchh?"text-[#005A9C]":"text-black"}`} ><p>Beats solo</p></div>
        <div className={`text-[3vw] max-sm:text-[3vh] ${searchh?"text-[#005A9C]":"text-black"}`}><p>Wireless</p></div>
        <div className='text-[4vw] max-sm:text-[4vh] text-white tracking-[2vw]'><p>HEADPHONE</p></div>
        <motion.button className='font-sans px-3  max-sm:text-[1vh] text-[1vw] text-white py-1 bg-red-500 border-none outline-none rounded-full'
         whileHover={{backgroundColor:"#FF1493"}}>Shop By Category</motion.button>
       </motion.div>  
       </motion.div>
        <img src={head} alt="error" className='ml-[65vw] max-sm:ml-[50vw] absolute max-lg:w-[28vw] xl:w-[25vw] max-sm:w-[18vh]'  />
        </motion.div>
}
      </div>
      
    </div>
  )
}

export default Cursol
