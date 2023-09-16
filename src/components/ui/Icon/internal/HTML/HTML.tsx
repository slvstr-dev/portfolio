import React, { SVGProps } from 'react';

export const HTML = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
      <path
        fill="currentColor"
        d="M8-376v-208h28v80h112v-80h28v208h-28v-100H36v100H8Zm310 0v-180h-80v-28h188v28h-80v180h-28Zm170 0v-180q0-11.9 8.05-19.95Q504.1-584 516-584h172q11.9 0 19.95 8.05Q716-567.9 716-556v180h-28v-180h-72v140h-28v-140h-72v180h-28Zm324 0v-208h28v180h112v28H812Z"
      />
    </svg>
  );
};
