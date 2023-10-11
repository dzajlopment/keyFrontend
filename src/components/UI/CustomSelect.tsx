import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const CustomSelect = ({ items }: { items: JSX.Element[] }) => (
    <Select.Root>
        <Select.Trigger className="SelectTrigger px-4 flex items-center">
          <Select.Value placeholder="Wybierz nauczyciela" />
            <Select.Icon className="SelectIcon ml-3">
                <ChevronDownIcon />
            </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content position="popper" className="SelectContent z-[1056] bg-white rounded-b-md">
            <Select.Viewport className="SelectViewport">
                { items }
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
  </Select.Root>
)

export default CustomSelect;