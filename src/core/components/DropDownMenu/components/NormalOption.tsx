import { NormalOptionInterface } from "../interfaces/OptionInterface";

interface NormalOptionProps extends NormalOptionInterface {}

const NormalOption = ({ id, value, onInteract }: NormalOptionProps) => {
  return (
    <div
      className="whitespace-nowrap text-white font-light text-xs h-6 px-4 flex items-center justify-start cursor-pointer hover:bg-sky-600"
      onClick={() => onInteract.bind(null, id)}
    >
      {value}
    </div>
  );
};

export default NormalOption;
