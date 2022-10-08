import React from "react";
import useOutsideCallback from "../hooks/useOutsideCallback";

interface EditableTextProps {
  value: string;
  className?: string;
  setValue: (_: string) => void;
  onRelease: (_: string) => void;
  validate: (_: string) => boolean;
  align?: "left" | "center" | "right";
}

const EditableText = ({
  value,
  validate,
  setValue,
  onRelease,
  className,
  align = "center",
}: EditableTextProps) => {
  const input = React.useRef<HTMLInputElement>(null);
  const [isBeingEdited, setIsBeingEdited] = React.useState<boolean>(false);

  useOutsideCallback(input, () =>
    isBeingEdited ? setIsBeingEdited(false) : null
  );

  React.useEffect(() => {
    if (isBeingEdited) input.current?.focus();
  }, [isBeingEdited]);

  const handleClick = () => {
    setIsBeingEdited(true);
  };

  const onBlur = () => {
    const validation = validate(value);
    if (!validation) console.log("[INLINE-INPUT-TEXT]: valdiation failed");
    else {
      onRelease(value);
      setIsBeingEdited(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  if (isBeingEdited)
    return (
      <input
        type="text"
        ref={input}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
        className={className}
      />
    );
  else
    return (
      <div onClick={handleClick} className={className}>
        {value}
      </div>
    );
};

export default EditableText;
