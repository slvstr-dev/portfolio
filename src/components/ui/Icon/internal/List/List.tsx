import React, { SVGProps } from 'react';

export const List = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />

      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />

      <line
        x1="40"
        y1="64"
        x2="216"
        y2="64"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <line
        x1="40"
        y1="192"
        x2="216"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </svg>
  );
};
