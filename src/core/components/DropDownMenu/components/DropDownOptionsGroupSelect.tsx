import { SelectOptionInterface } from "../interfaces/OptionInterface";
import SelectOption from "./SelectOption";

interface DropDownOptionsGroupSelectProps {
  options: SelectOptionInterface[];
}

const DropDownOptionsGroupSelect = ({
  options,
}: DropDownOptionsGroupSelectProps) => {
  return (
    <div>
      {options.map((option) => (
        <SelectOption key={option.id} {...{ ...option }} />
      ))}
    </div>
  );
};

export default DropDownOptionsGroupSelect;
