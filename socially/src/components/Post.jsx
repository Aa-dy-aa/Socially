import React from 'react'
import CustomImage from "./Image"
import PostInfo from './PostInfo';
import PostInteraction from './PostInteraction'
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function Post() {
    return (
        <div className='p-4 border-y-[1px] border-borderGray'>
            <div className="flex items-center gap-2 text-sm mb-2 from-bold group cursor-pointer">
                {/* Icon */}
                <svg
                    className="w-6 h-6 transition-all duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />   {/* purple-500 */}
                            <stop offset="50%" stopColor="#ec4899" />  {/* pink-500 */}
                            <stop offset="100%" stopColor="#f97316" /> {/* orange-500 */}
                        </linearGradient>
                    </defs>
                    <path
                        fill="currentColor"
                        className="group-hover:fill-[url(#grad1)]"
                        d="M14.25 3a.75.75 0 0 0 0 1.5h3.19L10.47 11.47a.75.75 0 1 0 1.06 1.06L18.5 5.56v3.19a.75.75 0 0 0 1.5 0v-5A.75.75 0 0 0 19.25 3h-5z"
                    />
                    <path
                        fill="currentColor"
                        className="group-hover:fill-[url(#grad1)]"
                        d="M5.25 4.5A2.25 2.25 0 0 0 3 6.75v12A2.25 2.25 0 0 0 5.25 21h12a2.25 2.25 0 0 0 2.25-2.25v-6a.75.75 0 0 0-1.5 0v6c0 .414-.336.75-.75.75h-12a.75.75 0 0 1-.75-.75v-12c0-.414.336-.75.75-.75h6a.75.75 0 0 0 0-1.5h-6z"
                    />
                </svg>

                {/* Text */}
                <span className="text-(--gray) group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    Aa_dy_aa resposted
                </span>
            </div>



            <div className="flex gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <CustomImage src="/image.jpg" alt="image" w={100} h={100} tr={true} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h1 className="text-md font-bold text-(--white)">Aadyaa</h1>
                            <span className="text-(--gray)">@aa_dy_aa</span>
                            <span className="text-(--gray)">1 day ago</span>
                        </div>
                        <PostInfo />
                    </div>
                    <p className="text-(--white)">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae necessitatibus quibusdam explicabo pariatur recusandae hic nobis! Ipsum accusamus cumque culpa, rerum provident esse veniam nesciunt impedit fuga amet unde! Necessitatibus!</p>
                    <CustomImage src="/default-image.jpg" alt="default" w={600} h={600} />
                    <PostInteraction />
                </div>
            </div>
        </div>
    )
}

export default Post