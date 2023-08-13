import React, { SVGProps } from 'react';

export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />

      <line
        x1="216"
        y1="128"
        x2="40"
        y2="128"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />

      <polyline
        points="112 56 40 128 112 200"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </svg>
  );
};
