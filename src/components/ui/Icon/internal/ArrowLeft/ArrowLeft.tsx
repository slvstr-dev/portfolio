import React, { SVGProps } from 'react';

export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      transform="rotate(180)"
      width="24"
      {...props}>
      <path
        d="m684-336-20-20 110-110H172v-28h602L664-604l20-20 144 144-144 144Z"
        fill="currentColor"
      />
    </svg>
  );
};
