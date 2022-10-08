import { ContextContentInterface, ContextInterface } from ".";

export interface SettingInteface {
  name: string;
  status: boolean;
}

export interface SettingsContextContentInterface
  extends ContextContentInterface {
  settings: SettingInteface[];
}

export interface SettingsContextInterface
  extends ContextInterface<SettingsContextContentInterface> {
  toggle: (setting: number) => void;
}
