import { memo, SVGProps } from 'react';

const BackgrounEffectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1453 1018' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1452.5 730C1452.5 889.058 1317.74 1018 1151.5 1018C985.262 1018 850.5 889.058 850.5 730C850.5 570.942 985.262 442 1151.5 442C1317.74 442 1452.5 570.942 1452.5 730Z'
      fill='#A1D5D6'
    />
    <path
      d='M602 288C602 447.058 467.238 576 301 576C134.762 576 0 447.058 0 288C0 128.942 134.762 0 301 0C467.238 0 602 128.942 602 288Z'
      fill='#7576D3'
    />
  </svg>
);

const Memo = memo(BackgrounEffectIcon);
export { Memo as BackgrounEffectIcon };
