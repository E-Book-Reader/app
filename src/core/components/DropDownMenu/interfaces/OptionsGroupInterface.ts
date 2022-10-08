import {
  NormalOptionInterface,
  SelectOptionInterface,
  SettingOptionInterface,
} from "./OptionInterface";

export enum OptionsGroupType {
  NORMAL,
  SELECT,
  SETTINGS,
}

export default interface OptionsGroup {
  id: string;
  multiselect?: boolean;
  type: OptionsGroupType;
  options:
    | NormalOptionInterface[]
    | SettingOptionInterface[]
    | SelectOptionInterface[];
}
