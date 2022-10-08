import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface TextAreaProps {
  value: string;
  placeholder?: string;
  onchange: (value: string) => void;
}

const TextArea = ({ placeholder, onchange, value }: TextAreaProps) => {
  return (
    <div className="rounded-lg bg-white shadow-lg flex items-center justify-center gap-2 p-6">
      <textarea
        value={value}
        className="w-full h-full outline-none resize-none"
        placeholder={placeholder}
        onChange={(event) => onchange(event.target.value)}
      />
    </div>
  );
};

export default TextArea;
