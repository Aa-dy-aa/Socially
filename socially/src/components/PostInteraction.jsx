"use client"
import React from 'react'
import { FiMessageSquare } from "react-icons/fi";
import { HiArrowPathRoundedSquare, HiMiniArrowTopRightOnSquare, HiHeart,HiMiniArrowDownTray  } from "react-icons/hi2";

function PostInteraction() {
  return (
    <div className="flex items-center justify-between my-2 gap-4 lg:gap-16 text-(--gray)">
      <div className="flex items-center justify-between flex-1">
        <div className="flex items-center gap-2 cursor-pointer group">
          <FiMessageSquare className="fill-blue-600 group-hover:fill-(--pink) w-6 h-6"/>
          <span className="group-hover:text-(--pink) text-sm">157</span>
        </div>
         <div className="flex items-center gap-2 cursor-pointer group">
          <HiArrowPathRoundedSquare className="fill-(--purple) stroke-none group-hover:fill-(--pink) w-6 h-6"/>
          <span className="group-hover:text-(--pink) text-sm">157</span>
        </div>
         <div className="flex items-center gap-2 cursor-pointer group">
          < HiHeart className="fill-red-600 group-hover:fill-(--pink) w-6 h-6"/>
          <span className="group-hover:text-(--pink) text-sm">157</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
         <div className="flex items-center gap-2 cursor-pointer group">
          <HiMiniArrowDownTray className="fill-(--gray) group-hover:fill-(--pink) w-6 h-6"/>
        </div>
         <div className="flex items-center gap-2 cursor-pointer group">
          < HiMiniArrowTopRightOnSquare className="fill-(--gray) group-hover:fill-(--pink) w-6 h-6"/>
        </div>
      </div>
    </div>
  )
}

export default PostInteraction