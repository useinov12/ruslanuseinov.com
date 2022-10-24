import * as React from 'react';

const Logo = () => {
  return (
    <svg width={140} height={136} fill="none">
      <g filter="url(#a)">
        <g filter="url(#b)">
          <path
            d="M249 137.5c0 55.864-49.908 103.5-114.5 103.5S20 193.364 20 137.5 69.908 34 134.5 34 249 81.636 249 137.5Z"
            stroke="#fff"
            strokeWidth={32}
            shapeRendering="crispEdges"
          />
        </g>
        <g filter="url(#c)">
          <path
            d="m245.42 79-15.34 44.2c-2.08 5.72-4.16 10.4-6.24 14.56s-4.94 7.8-8.06 10.4c-3.12 2.86-7.02 4.94-11.44 6.5-4.68 1.56-10.14 2.34-16.64 2.34h-2.6l27.56 39h-62.14l-38.22-53.04 8.32-23.66h52.78c2.34 0 4.16-1.56 5.2-4.68l5.72-16.64c.26-.78.26-1.82-.26-2.86-.52-1.04-1.04-1.82-1.82-1.82h-65.26L81.62 196c-.52 1.04-2.34 2.34-5.2 4.42-3.12 2.08-6.76 4.42-10.92 7.02-4.16 2.6-8.84 5.2-14.04 7.8-5.2 2.86-10.14 5.46-14.82 7.54-4.68 2.34-9.1 4.16-13 5.72-3.9 1.56-6.76 2.08-8.58 2.08L76.16 53h157.56c2.08 0 4.16 1.04 5.98 2.86 1.82 1.82 3.38 4.16 4.42 6.76 1.04 2.6 1.56 5.46 1.82 8.58s0 5.72-.52 7.8Z"
            fill="#3B82F6"
          />
        </g>
      </g>
      <defs>
        <filter
          id="a"
          x={4}
          y={18}
          width={269}
          height={247}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_106_5" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_5"
            result="shape"
          />
        </filter>
        <filter
          id="b"
          x={0}
          y={18}
          width={269}
          height={247}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_106_5" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_5"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={5}
            in="SourceAlpha"
            result="effect2_innerShadow_106_5"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={7.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_106_5" />
        </filter>
        <filter
          id="c"
          x={5.06}
          y={47}
          width={251.14}
          height={197.58}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_106_5" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_5"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2} dy={8} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_106_5" />
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;
