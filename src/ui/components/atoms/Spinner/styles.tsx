import styled from 'styled-components'
import { SpinnerProps } from './types'

export const Spinner = styled.div<SpinnerProps>`
  border-radius: 50%;
  width: 10em;
  height: 10em;

  font-size: ${({ size = '2px' }) => size};
  position: relative;
  text-indent: -9999em;
  border: 1em solid ${({ bgColor = 'rgba(0, 0, 0, 0.2)' }) => bgColor};
  border-left: 1em solid ${({ color = 'rgba(0, 0, 0, 0.7)' }) => color};

  transform: translateZ(0);

  animation: ${({ animation = 'load 0.8s infinite linear' }) => animation};

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
