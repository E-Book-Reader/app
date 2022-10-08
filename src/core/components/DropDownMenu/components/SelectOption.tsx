import { CheckIcon } from "@heroicons/react/20/solid";
import { SelectOptionInterface } from "../interfaces/OptionInterface";

interface SelectOptionProps extends SelectOptionInterface {}

const SelectOption = ({
  id,
  value,
  onInteract,
  selected,
}: SelectOptionProps) => {
  return (
    <div
      className="grid grid-cols-[10px] gap-2 whitespace-nowrap text-white font-light text-xs h-6 px-4 items-center justify-start cursor-pointer hover:bg-sky-600"
      onClick={() => onInteract.bind(null, id)}
    >
      {selected ? <CheckIcon className="w-2.5 h-2.5" /> : null}
      <div className="col-start-2">{value}</div>
    </div>
  );
};

export default SelectOption;
