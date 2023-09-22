import { type SVGProps } from 'react';

export const Terminal = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
      <path
        fill="currentColor"
        d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-368H160v368q0 12 10 22t22 10Zm108-77-19-19 103-104-104-104 20-19 123 123-123 123Zm206 11v-28h188v28H506Z"
      />
    </svg>
  );
};
