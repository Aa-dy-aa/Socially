import React from 'react'
import Link from "next/link"
import { DiYii } from "react-icons/di";
import { HiHome, HiLockClosed,HiBellAlert,HiMagnifyingGlass,HiIdentification,HiBookmark,HiCog6Tooth   } from "react-icons/hi2";
import { MdCellTower, MdChat, MdAddPhotoAlternate } from "react-icons/md";

const menuList=[
  {
    id:1,
    name:"Homepage",
    link:"/",
    icon:<HiHome />,
  },
  {
    id:2,
    name:"Explore",
    link:"/",
    icon:<HiMagnifyingGlass />,
  },
  {
    id:3,
    name:"Notifications",
    link:"/",
    icon:<HiBellAlert />,
  },
  {
    id:4,
    name:"Messages",
    link:"/",
    icon:<MdChat />,
  },
  {
    id:5,
    name:"Bookmarks",
    link:"/",
    icon:<HiBookmark />,
  },
  {
    id:6,
    name:"Premium",
    link:"/",
    icon:<HiLockClosed />,
  },
  {
    id:7,
    name:"Jobs",
    link:"/",
    icon:<HiIdentification/>,
  },
  {
    id:8,
    name:"Communities",
    link:"/",
    icon:<MdCellTower />,
  },
  {
    id:9,
    name:"More",
    link:"/",
    icon:<HiCog6Tooth/> ,
  },
]
function LeftBar() {
  return (
    <div>
      <div className='h-screen sticky top-0 flex flex-col justify between pt-2 pb-8 '>
        <div className="mt-2 flex items-center justify-center w-12 h-12 gradient rounded-full xxl:items-start">
          <Link href="/" className="w-full h-full flex items-center justify-center rounded-full">
            <DiYii size={24} />
          </Link>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {menuList.map((item)=>(
            <Link href={item.link} className="p-2 rounded-full flex items-center gap-4" key={item.id}>
               <span className="w-7 h-7 flex items-center justify-center rounded-full gradient">
        <span className="text-white">{item.icon}</span>
      </span>
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        <Link href="/" className="xxl:block gradient text-white rounded-full w-12 h-12 flex items-center justify-center xxl:hidden mt-3">
        <MdAddPhotoAlternate size={24} /> 
        </Link>
        <Link href="/" className="hidden xxl:block gradient text-white rounded-full font-xxl mt-3 py-2 px-20">
        Post
        </Link>
      </div>
      <div className='flex items-center justify-between -mt-14'>
        <div className='hidden xxl:flex flex-col'>
          <span className="font-bold">Aa_dy_aa</span>
        </div>
        <div className='hidden xxl:block cursor-pointer font-bold'>...</div>
      </div>
    </div>
  )
}

export default LeftBar