import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface CollapsibleListProps {
  children: JSX.Element | string;
  values: (JSX.Element | string)[];
}

const CollapsibleList = ({ children: title, values }: CollapsibleListProps) => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);

  const toggle = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div onClick={toggle}>
      <div className="cursor-pointer flex items-center gap-1">
        {title}
        <ChevronDownIcon
          className={`w-6 h-6 rotate-[${isOpened ? "180deg" : "0deg"}]`}
        />
      </div>
      <ul>{isOpened && values.map((value, i) => <li key={i}>{value}</li>)}</ul>
    </div>
  );
};

export default CollapsibleList;
