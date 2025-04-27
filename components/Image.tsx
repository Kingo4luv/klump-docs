import React from 'react';

type ImageProps = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
};

export function Image({ src, alt = '', width, height, maxWidth }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: width || 'auto',
        height: height || 'auto',
        maxWidth: maxWidth || '100%',
        borderRadius: '4px',
        display: 'block',
        margin: '1.5rem 0',
      }}
    />
  );
}
