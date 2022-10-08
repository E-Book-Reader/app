interface ParagraphProps {
  children: JSX.Element | string;
}

const Paragraph = ({ children: content }: ParagraphProps) => {
  return <div className="text-base leading-8">{content}</div>;
};

export default Paragraph;
