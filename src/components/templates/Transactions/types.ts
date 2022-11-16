import { ComponentProps, ReactNode } from 'react'
import { Header } from 'components/organisms'

export type Props = {
  headerProps: ComponentProps<typeof Header>
  children?: ReactNode
}
