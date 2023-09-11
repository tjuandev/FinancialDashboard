import { IconProps } from '../types'

const Icon = ({ color, height = 38, width = 34, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      role="img"
      aria-label="Wallet"
      viewBox="0 0 38 34"
      {...props}
    >
      <path
        stroke={color || 'currentColor'}
        strokeWidth="3"
        d="M32.884 9.714H8c-.592 0-1.714-.428-1.714-2.143 0-1.714 1.55-1.714 2.143-1.714h24.455c.592 0 1.259-.694 1.259-1.286 0-1.775-1.44-2.571-3.214-2.571H6.286A4.285 4.285 0 002 6.286v21.428A4.285 4.285 0 006.286 32h26.598c1.876 0 3.402-1.442 3.402-3.214V11.643c0-1.773-1.526-1.929-3.402-1.929zm-3.027 12.643a2.143 2.143 0 110-4.286 2.143 2.143 0 010 4.286z"
      ></path>
    </svg>
  )
}

export default Icon
