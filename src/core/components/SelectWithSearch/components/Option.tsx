export interface OptionInterface {
  id: string;
  name: string;
}

interface OptionProps extends OptionInterface {
  onClick: () => void;
}

const Option = ({ name, id, onClick }: OptionProps) => {
  return (
    <div
      className="hover:opacity-75 cursor-pointer bg-white border-[0.5px] border-b-gray-400 px-4 py-2"
      onClick={onClick}
    >
      <div className="text-black">{name}</div>
    </div>
  );
};

export default Option;
