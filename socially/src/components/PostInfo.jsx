import React from 'react'
import CustomImage from "./Image"

function PostInfo() {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
        <CustomImage src="/image.jpg" alt="image" w={16} h={16}/>
    </div>
  );
}; 

export default PostInfo