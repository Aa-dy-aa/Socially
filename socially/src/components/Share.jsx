"use client";
import React, { useState } from "react";
import CustomImage from "./Image";
import { GrEmoji, GrLocation } from "react-icons/gr";
import { CgOptions } from "react-icons/cg";
import {MdOutlineAddPhotoAlternate,MdOutlineGifBox,MdOutlineFormatItalic,} from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { BiBold } from "react-icons/bi";
import { shareAction } from "@/actions";

const Share = () => {
  const [media, setMedia] = useState(null);

  const handleMediaChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <form className="p-4 flex gap-4" action={shareAction}>
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <CustomImage src="/image.jpg" alt="image" w={100} h={100} tr={true} />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className="bg-transparent outline-none placeholder:text-(--gray) text-xl"
        />

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input type="file" name="file" id="file" onChange={handleMediaChange} className="hidden" w={20} h={20} />
            <label htmlFor="file" className="cursor-pointer">
            <MdOutlineAddPhotoAlternate className="w-5 h-5 cursor-pointer text-(--purple)" />
            </label>
            <MdOutlineGifBox className="w-5 h-5 cursor-pointer text-(--purple)" />
            <CgOptions className="w-5 h-5 cursor-pointer text-(--purple)" />
            <GrEmoji className="w-5 h-5 cursor-pointer text-(--purple)" />
            <LuCalendarClock className="w-5 h-5 cursor-pointer text-(--purple)" />
            <GrLocation className="w-5 h-5 cursor-pointer text-(--purple)" />
            <BiBold className="w-5 h-5 cursor-pointer text-(--purple)" />
            <MdOutlineFormatItalic className="w-5 h-5 cursor-pointer text-(--purple)" />
          </div>

          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;

