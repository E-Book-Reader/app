import React from "react";

interface RadioButtonsProps {
  selected: number;
  style: "col" | "rows";
  children: (JSX.Element | string)[];
  setSelected: (index: number) => void;
}

const RadioButtons = ({
  style,
  children,
  selected,
  setSelected,
}: RadioButtonsProps) => {
  React.useEffect(() => {
    if (selected >= children.length || selected < 0)
      throw new Error(
        "[RadioButton-Component]: invalid selected value provided"
      );
  }, [selected]);
  return (
    <div className={`flex gap-4 ${style === "col" ? "flex-col" : "flex-gap"}`}>
      {children.map((element, i) => (
        <div
          key={i}
          onClick={() => setSelected(i)}
          className={
            selected === i ? "fill-orange-400 text-orange-400" : "fill-black"
          }
        >
          {element}
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
