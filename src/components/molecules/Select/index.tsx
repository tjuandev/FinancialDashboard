import * as Select from '@radix-ui/react-select'
import { Icon } from 'components/atoms'
import { v4 as uuid } from 'uuid'
import { Options, Props, SelectInputProps, SelectOptionsProps } from './types'

const SelectInput = ({ placeholder, icon }: SelectInputProps) => (
  <Select.Trigger>
    <Select.Value placeholder={placeholder} />
    <Select.Icon asChild={true}>{icon}</Select.Icon>
  </Select.Trigger>
)

const SelectOptions = ({ value, label, itemIndicator }: SelectOptionsProps) => (
  <Select.Item value={value}>
    <Select.ItemText asChild={true}>{label}</Select.ItemText>
    <Select.ItemIndicator asChild={true}>{itemIndicator}</Select.ItemIndicator>
  </Select.Item>
)

const renderOptions = (options: Options) =>
  options?.map(({ group, groupLabel, ...item }) => {
    if (group) {
      return (
        <>
          <Select.Group>
            <Select.Label asChild={true}>{groupLabel}</Select.Label>
            <SelectOptions key={uuid()} {...item} />
          </Select.Group>
          <Select.Separator />
        </>
      )
    }
    return <SelectOptions key={uuid()} {...item} />
  })

const BaseSelect = ({
  placeholder,
  icon = <Icon name="chevron-down" />,
  options
}: Props) => (
  <Select.Root>
    <SelectInput placeholder={placeholder} icon={icon} />
    <Select.Portal>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>{renderOptions(options)}</Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

export default BaseSelect
