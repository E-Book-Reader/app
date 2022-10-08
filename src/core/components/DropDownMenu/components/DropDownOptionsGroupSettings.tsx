import SettingOption from "./SettingOption";
import { SettingOptionInterface } from "../interfaces/OptionInterface";

interface DropDownOptionsGroupSettingsProps {
  options: SettingOptionInterface[];
}

const DropDownOptionsGroupSettings = ({
  options,
}: DropDownOptionsGroupSettingsProps) => {
  return (
    <div>
      {options.map((option) => (
        <SettingOption key={option.id} {...{ ...option }} />
      ))}
    </div>
  );
};

export default DropDownOptionsGroupSettings;
