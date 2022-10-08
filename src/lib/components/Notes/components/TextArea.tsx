import React from "react";

interface TextAreaProps {
  placeholder: string;
  content: string;
}

const RichTextExample = ({ placeholder, content }: TextAreaProps) => {
  return <textarea value={content} placeholder={placeholder} />;
};

export default RichTextExample;
