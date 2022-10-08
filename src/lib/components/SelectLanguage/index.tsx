import React from "react";

import options from "./data";

import SelectWithSearch from "../../../core/components/SelectWithSearch";

interface SelectLanguageProps {
  setLanguage: (language: { name: string; id: string } | null) => void;
}

const SelectLanguage = ({ setLanguage }: SelectLanguageProps) => {
  const [selected, setSelected] = React.useState({
    id: "en",
    name: "English",
  });

  const handleSelect = (option: { id: string; name: string } | null) => {
    console.log("[SELECTED]:", option);
    setLanguage(option);
  };

  return (
    <SelectWithSearch
      options={options}
      selected={selected}
      onSelect={handleSelect}
      placeholder="Language"
    />
  );
};

export default SelectLanguage;
