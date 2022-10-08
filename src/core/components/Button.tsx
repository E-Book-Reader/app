import Loading from "./Loading";

interface ButtonProps {
  children: JSX.Element | string;
  loading?: boolean;
  disabled?: boolean;
  loadingText?: string;
  onclick: () => void;
}

const Button = ({
  children: text,
  onclick,
  disabled,
  loading,
  loadingText,
}: ButtonProps) => {
  return (
    <div
      className={`
      flex flex-row gap-4 items-center px-6 py-3 rounded text-xl bg-orange-400 hover:bg-orange-600 text-white font-medium 
      ${loading ? "" : "cursor-pointer"}
      ${loading ? "opacity-50" : ""}
      ${disabled ? "opacity-50" : ""}
      `}
      onClick={!disabled && !loading ? onclick : () => null}
    >
      {loading ? <Loading /> : null}
      {loading ? loadingText : text}
    </div>
  );
};

export default Button;
