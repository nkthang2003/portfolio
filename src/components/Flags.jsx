import React from 'react';

export function VietnamFlag({ className = "w-5 h-3.5", ...props }) {
  return (
    <svg 
      className={`${className} rounded-xs shadow-2xs shrink-0`} 
      viewBox="0 0 30 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="30" height="20" fill="#DA251D" />
      <polygon 
        fill="#FFFF00" 
        points="15,4 16.5,8.8 21.5,8.8 17.5,11.8 19,16.5 15,13.6 11,16.5 12.5,11.8 8.5,8.8 13.5,8.8" 
      />
    </svg>
  );
}

export function UkFlag({ className = "w-5 h-3.5", ...props }) {
  return (
    <svg 
      className={`${className} rounded-xs shadow-2xs shrink-0`} 
      viewBox="0 0 60 30" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <clipPath id="uk-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

