interface RoundedIconButtonProps {
  children: JSX.Element;
  onClick: () => void;
}

const RoundedIconButton = ({ children, onClick }: RoundedIconButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:bg-orange-600 rounded-full bg-orange-400 h-16 w-16 flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default RoundedIconButton;
