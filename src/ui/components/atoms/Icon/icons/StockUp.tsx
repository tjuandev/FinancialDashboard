import { IconProps } from '../types'

const Icon = ({ color, height = 29, width = 35, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 35 29"
      role="img"
      aria-label="Stock Up"
      {...props}
    >
      <g
        stroke={color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        clipPath="url(#clip0_6_486)"
      >
        <path d="M33.542 7.25L19.687 18.73l-7.291-6.043L1.458 21.75"></path>
        <path d="M24.792 7.25h8.75v7.25"></path>
      </g>
      <defs>
        <clipPath id="clip0_6_486">
          <path fill="#fff" d="M0 0H35V29H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default Icon
