import React from 'react';

interface TImgProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

function Img({ src, alt, className, onLoad, onError }: TImgProps) {
  return (
    <img
      src={src}
      alt={alt}
      {...(className && { className })}
      {...(onLoad && { onLoad })}
      {...(onError && { onError })}
    />
  );
}

export default Img;
