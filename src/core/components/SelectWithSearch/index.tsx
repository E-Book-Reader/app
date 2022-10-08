import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import Menu from "./components/Menu";

import useOutsideCallback from "../../hooks/useOutsideCallback";
import { OptionInterface } from "./components/Option";

interface SelectWithSearchProps {
  options: OptionInterface[];
  selected?: OptionInterface;
  icon?: JSX.Element;
  placeholder?: string;
  onSelect: (option: OptionInterface | null) => void;
}

const SelectWithSearch = ({
  icon,
  onSelect: onS,
  options: opts,
  selected: s,
  placeholder,
}: SelectWithSearchProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const input = React.useRef<HTMLInputElement>(null);

  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<OptionInterface | null>(
    s ? s : null
  );
  const [options, setOptions] = React.useState<OptionInterface[]>(opts);

  //useOutsideCallback(ref, () => setIsOpened(false));

  const onChange = (search: string) => {
    if (!isOpened) open();
    const filtered = opts.filter(({ name }) =>
      name.toLowerCase().startsWith(search.toLowerCase())
    );
    if (filtered.length !== 1) setSelected(null);
    else setSelected(filtered[0]);
    setOptions(filtered);
  };

  React.useEffect(() => {
    onS(selected);
  }, [selected]);

  const open = () => {
    setIsOpened(true);
  };

  const close = () => {
    setIsOpened(false);
  };

  const toggle = () => {
    setIsOpened(!isOpened);
  };

  const onSelect = (option: OptionInterface) => {
    input.current!.value = option.name;
    setSelected(option);
    close();
  };

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="w-full h-16 rounded-lg bg-white shadow-lg flex items-center justify-center gap-2 px-6"
        ref={ref}
      >
        {icon}
        <input
          type="text"
          ref={input}
          onFocus={open}
          //value={selected.name}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className="w-full h-full outline-none"
        />
        <ChevronDownIcon className="w-7 h-7 cursor-pointer" onClick={toggle} />
      </div>
      <div className="relative -bottom-0 w-11/12">
        {isOpened ? <Menu options={options} onClick={onSelect} /> : null}
      </div>
    </div>
  );
};

export default SelectWithSearch;
