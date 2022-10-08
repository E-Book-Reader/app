interface InputProps {
  value: string;
  icon?: JSX.Element;
  placeholder?: string;
  onchange: (value: string) => void;
}

const Input = ({ placeholder, onchange, value, icon }: InputProps) => {
  return (
    <div className="h-16 rounded-lg bg-white shadow-lg flex items-center justify-center gap-2 px-6">
      {icon}
      <input
        type="text"
        value={value}
        className="w-full h-full outline-none"
        placeholder={placeholder}
        onChange={(event) => onchange(event.target.value)}
      />
    </div>
  );
};

export default Input;
