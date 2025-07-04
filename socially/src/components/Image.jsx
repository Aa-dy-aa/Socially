"use client";
import { Image } from '@imagekit/next';

const CustomImage = ({ src, w, h, alt, className,tr }) => {
  return (
    <Image
      urlEndpoint="https://ik.imagekit.io/socially"
      src={src}
      {...(tr
        ?{transformation:[{width:`${w}`,height:`${h}`}]}
        :{width:w,height:h}
      )}
      alt={alt}
      className={className}
    />
  );
};

export default CustomImage;
