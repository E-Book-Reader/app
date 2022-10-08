interface TitleProps {
  children: JSX.Element | string;
  size?: "1" | "2" | "3" | "4" | "5" | "6";
}

const Title = ({ children: title, size }: TitleProps) => {
  switch (size) {
    case "1":
      return <div className="font-bold text-5xl">{title}</div>;
    case "2":
      return <div className="font-bold text-[40px]">{title}</div>;
    case "3":
      return <div className="font-bold text-[32px]">{title}</div>;
    case "4":
      return <div className="font-bold text-2xl">{title}</div>;
    case "5":
      return <div className="font-bold text-base">{title}</div>;
    default:
      return <div className="font-bold text-2xl">{title}</div>;
  }
};

export default Title;
