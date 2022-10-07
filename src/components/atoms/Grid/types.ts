import theme from 'theme'

export type SpacingInferenceTypeOptions = keyof typeof theme['spacing']

export type GridProps = {
  rows?: number | string
  columns?: number | string
  gap?: SpacingInferenceTypeOptions
}
