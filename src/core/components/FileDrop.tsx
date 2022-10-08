import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";

interface FileDropProps {
  accept?: string;
  onchange: (value: File) => void;
}

const FileDrop = ({ accept, onchange }: FileDropProps) => {
  const inputRef = React.createRef<HTMLInputElement>();

  const [file, setFile] = React.useState<File>();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files![0]);
    onchange(event.target.files![0]);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div
      className="cursor-pointer rounded-lg w-full p-24 bg-white shadow-lg flex items-center justify-center gap-2"
      onClick={handleClick}
    >
      <input
        type="file"
        ref={inputRef}
        accept={accept}
        multiple={false}
        className="hidden"
        onChange={handleFileSelect}
      />
      <div className="font-bold text-center">
        {file ? file.name : "Click to Drop File"}
      </div>
    </div>
  );
};

export default FileDrop;
