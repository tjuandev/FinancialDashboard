import { IconProps } from '../types'

const Icon = ({ color, height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M18 6L6 18M6 6l12 12"
      ></path>
    </svg>
  )
}

export default Icon
