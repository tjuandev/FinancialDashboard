import { IconProps } from '../types'

const Icon = ({ color, height = 9, width = 15, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      role="img"
      aria-label="ChevronDown"
      viewBox="0 0 15 9"
      {...props}
    >
      <path
        stroke={color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M2 2.244l5.5 4.512L13 2.244"
      ></path>
    </svg>
  )
}

export default Icon
