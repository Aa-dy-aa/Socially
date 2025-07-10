import React from 'react'
import CustomImage from "./Image"
import PostInfo from './PostInfo';
import PostInteraction from './PostInteraction'
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function Post() {
  return (
    <div className='p-4 border-y-[1px] border-borderGray'>
        <div className="text-(--gray) flex items-center gap-2 text-sm mb-2 from-bold">
            <div className="flex items-center gap-2 cursor-pointer group">
                < HiMiniArrowTopRightOnSquare className="fill-text(--gray) group-hover:fill-icon gradient w-6 h-6"/>
            </div>
            <span className="text-(--gray)">Aa_dy_aa resposted</span>
        </div>

        <div className="flex gap-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <CustomImage src="/image.jpg" alt="image" w={100} h={100} tr={true}/>
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="text-md font-bold">Aa_dy_aa</h1>
                        <span className="text-textGray">@aa_dy_aa</span>
                        <span className="text-textGray">1 day ago</span>
                    </div>
                    <PostInfo/>
                </div>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae necessitatibus quibusdam explicabo pariatur recusandae hic nobis! Ipsum accusamus cumque culpa, rerum provident esse veniam nesciunt impedit fuga amet unde! Necessitatibus!</p>
                <CustomImage src="/default-image.jpg" alt="default" w={600} h={600}/>
                <PostInteraction/>
            </div>
        </div>
    </div>
  )
}

export default Post