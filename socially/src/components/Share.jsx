import React from 'react'
import CustomImage from "./Image"
import { GrEmoji,GrLocation } from "react-icons/gr";
import { CgOptions } from "react-icons/cg";
import { MdOutlineAddPhotoAlternate, MdOutlineGifBox,MdOutlineFormatItalic } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { BiBold } from "react-icons/bi";

function Share() {
  return (
    <div className='p-4 flex gap-4'>
      <div className='relative w-10 h-10 rounded-full overflow-hidden'>
        <CustomImage src="/image.jpg" alt="image" w={100} h={100} tr={true}/>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <input type="text" placeholder="What is happening?!" className="bg-transparent outline-none placeholder:text-(--gray) text-xl"/>
          <div className='flex items-center justify-between gap-4 flex-wrap'>
            <div className='flex gap-4 flex-wrap'>
              <MdOutlineAddPhotoAlternate className="w-5 h-5 cursor-pointer text-(--purple)"/>
              <MdOutlineGifBox className="w-5 h-5 cursor-pointer text-(--purple)"/>
              <CgOptions className="w-5 h-5 cursor-pointer text-(--purple)"/>
              <GrEmoji className="w-5 h-5 cursor-pointer text-(--purple)"/>
              <LuCalendarClock className="w-5 h-5 cursor-pointer text-(--purple)"/>
              <GrLocation className="w-5 h-5 cursor-pointer text-(--purple)"/>
              <BiBold className="w-5 h-5 cursor-pointer text-(--purple)"/>
              <MdOutlineFormatItalic className="w-5 h-5 cursor-pointer text-(--purple)"/>
            </div>
            <button className="bg-white text-black font-bold rounded-full py-2 px-4">Post</button>
          </div>
        </div>
      </div>
  )
}

export default Share