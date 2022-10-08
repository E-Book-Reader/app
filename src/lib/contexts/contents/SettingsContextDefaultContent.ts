import { SettingsContextContentInterface } from "../interfaces/SettingsContext";

const SettingsContextDefaultContent: SettingsContextContentInterface = {
  settings: [
    { name: "Pattern", status: true },
    { name: "Lazy Loading", status: true },
    { name: "Beta Features", status: true },
  ],
  ready: true,
};

export default SettingsContextDefaultContent;
