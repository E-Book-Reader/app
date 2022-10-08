import React from "react";
import { SettingsContextInterface } from "../interfaces/SettingsContext";
import { useSettingsContext } from "../providers/SettingsContextProvider";

interface SettingsContextProp {
  settingsContext: SettingsContextInterface;
}

export default function SettingsContextWrapper<P>(
  WrappedComponent: React.ComponentType<P & SettingsContextProp>
) {
  const WrappedComponentWithSettingsContext = (props: P) => {
    const settingsContext = useSettingsContext();
    return <WrappedComponent {...props} settingsContext={settingsContext} />;
  };

  return WrappedComponentWithSettingsContext;
}
