import Option, { OptionInterface } from "./Option";

interface MenuProps {
  limit?: number;
  options: OptionInterface[];
  onClick: (option: OptionInterface) => void;
}

const DEFAULT_LIMIT = 5;

const OPTION_HEIGHT = 42;

const Menu = ({ options, limit = DEFAULT_LIMIT, onClick }: MenuProps) => {
  return (
    <div
      className={"w-full grid grid-rows-[auto] bg-gray-400 overflow-y-scroll"}
      style={{ maxHeight: limit * OPTION_HEIGHT }}
    >
      {options.map((option) => {
        return (
          <Option
            id={option.id}
            key={option.id}
            name={option.name}
            onClick={onClick.bind(null, option)}
          />
        );
      })}
    </div>
  );
};

export default Menu;
