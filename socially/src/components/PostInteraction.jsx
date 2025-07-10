"use client"
import React from 'react'
import { FiMessageSquare } from "react-icons/fi";
import { HiArrowPathRoundedSquare, HiMiniArrowTopRightOnSquare, HiHeart,HiMiniArrowDownTray  } from "react-icons/hi2";

function PostInteraction() {
  return (
    <div className="flex items-center justify-between my-2 gap-4 lg:gap-16 text-textGray">
      <div className="flex items-center justify-between flex-1">
        <div className="flex items-center gap-2 cursor-pointer group">
          <FiMessageSquare className="fill-textGray group-hover:fill-iconPink w-6 h-6"/>
          <span className="group-hover:text-iconPink text-sm">157</span>
        </div>
         <div className="flex items-center gap-2 cursor-pointer group">
          <HiArrowPathRoundedSquare className="fill-textGray group-hover:fill-iconPink w-6 h-6"/>
          <span className="group-hover:text-iconPink text-sm">157</span>
        </div>
         <div className="flex items-center gap-2 cursor-pointer group">
          < HiHeart className="fill-textGray group-hover:fill-iconPink w-6 h-6"/>
          <span className="group-hover:text-iconPink text-sm">157</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
         <div className="flex items-center gap-2 cursor-pointer group">
          <HiMiniArrowDownTray className="fill-textGray group-hover:fill-iconPink w-6 h-6"/>
        </div>
         <div className="flex items-center gap-2 cursor-pointer group">
          < HiMiniArrowTopRightOnSquare className="fill-textGray group-hover:fill-iconPink w-6 h-6"/>
        </div>
      </div>
    </div>
  )
}

export default PostInteraction