"use client";
import { Image } from '@imagekit/next';

const CustomImage = ({ src, w, h, alt, className, tr }) => {
  return (
    <Image
      urlEndpoint="https://ik.imagekit.io/socially"
      src={src}
      width={w}
      height={h}
      transformation={
        tr ? [{ width: `${w}`, height: `${h}` }] : undefined
      }
      alt={alt}
      className={className}
    />
  );
};

export default CustomImage;
