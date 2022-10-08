import NormalOption from "./NormalOption";
import { NormalOptionInterface } from "../interfaces/OptionInterface";

interface DropDownOptionsGroupNormalProps {
  options: NormalOptionInterface[];
}

const DropDownOptionsGroupNormal = ({
  options,
}: DropDownOptionsGroupNormalProps) => {
  const data = options[0];
  return (
    <div>
      {options.map((option) => (
        <NormalOption key={option.id} {...{ ...option }} />
      ))}
    </div>
  );
};

export default DropDownOptionsGroupNormal;
