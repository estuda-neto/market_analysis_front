"use client";
import Link from "next/link";
import { useState } from "react";

type ImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  fallbackSrc?: string;
};

// opcional: imagem de fallback
export const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, fallbackSrc = "/fallback.png"}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
  };

  return (
    <Link href={"/"}>
      <img src={imgSrc} alt={alt} width={width} height={height} className={`object-fit:${className}`} loading="lazy" onError={handleError}/>
    </Link>
  );
};
