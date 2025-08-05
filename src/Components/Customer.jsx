import React from 'react'
import { PiSmileyStickerFill } from "react-icons/pi";
import { FaWallet } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

const Customer = ({searchh}) => {
const icon=[<FaCarSide />,<PiSmileyStickerFill />,<FaHeadphonesSimple />,<FaWallet />]

  return (
    <div className='mt-5'>
        <div className=' h-[20vh] flex flex-wrap space-x-2 justify-around max-md:flex-cols items-center'>
           {
            icon.map((icon,index)=>(
                <div key={index} className='flex items-center max-sm:items-start gap-3 mt-5 max-sm:gap-1 max-sm:flex-col' >
                    <div className='text-2xl max-sm:text-[16px] text-red-600'>{icon}</div>
                    <div >
                        <div className={`text-sm max-sm:text-[17px] font-bold ${searchh?"text-white":"text-black"}`}>Free Shipping</div>
                        <div className={`text-2vw max-sm:text-[14px] bold-normal opacity-50 ${searchh?"text-white":"text-black"}`}>Lorem ipsum dolor sit.</div>
                    </div>
                </div>
            ))
           }
      
    </div>
    </div>
  )
}

export default Customer
