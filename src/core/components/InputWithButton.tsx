import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import Button from "./Button";

interface InputWithButtonProps {
  className?: string;
  placeholder: string;
  onClick: (value: string) => void;
}

const InputWithButton = ({
  onClick,
  className,
  placeholder,
}: InputWithButtonProps) => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    onClick(value);
  };

  return (
    <div
      className={
        "overflow-hidden rounded-lg bg-white flex justify-between w-full drop-shadow-xl" +
        " " +
        className
      }
    >
      <div className="flex gap-2 items-center pl-6">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full h-full outline-none"
        />
      </div>
      <Button onclick={handleClick}>Search Book</Button>
    </div>
  );
};

export default InputWithButton;
