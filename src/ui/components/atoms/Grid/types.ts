import theme from 'ui/theme'

export type SpacingInferenceTypeOptions = keyof (typeof theme)['spacing']

export type GridProps = {
  columns?: number | string
  gap?: SpacingInferenceTypeOptions
  rows?: number | string
}
