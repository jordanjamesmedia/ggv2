import React from 'react'

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className
}) => {
  // Generate WebP source if original is jpg/png
  const webpSrc = src.replace(/\.(jpg|png)$/, '.webp')

  return (
    <picture>
      <source
        srcSet={webpSrc}
        type="image/webp"
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={className}
        style={{
          contentVisibility: 'auto',
          containIntrinsicSize: `${width}px ${height}px`
        }}
      />
    </picture>
  )
} 