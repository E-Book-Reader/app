/*context-tutorial: https://betterprogramming.pub/build-a-redux-like-store-with-react-context-hooks-234e3774495f*/

import React from "react";

import SettingsContextDefaultContent from "../contents/SettingsContextDefaultContent";
import {
  SettingsContextContentInterface,
  SettingsContextInterface,
} from "../interfaces/SettingsContext";

export const SettingsContext = React.createContext<SettingsContextInterface>({
  content: SettingsContextDefaultContent,
  setContent: (content: SettingsContextContentInterface) => content,
  toggle: (setting: number) => null,
});

export const SettingsContextProvider = (props: React.PropsWithChildren) => {
  React.useEffect(() => {
    console.log("[Settings-Context]: started");
  }, []);

  const [content, setContent] = React.useState<SettingsContextContentInterface>(
    SettingsContextDefaultContent
  );

  /**
   * TODO: should i put it (setContent and toggle) in a Memo block or the other thing ?
   */

  const toggle = (setting: number) => {
    const newContent = { ...content };
    /**
     * TODO: verify that the given settingIndex: setting is a valid one
     */
    newContent.settings[setting].status = !newContent.settings[setting].status;
    setContent(newContent);
  };

  const settingsContext = { content, setContent, toggle };

  return <SettingsContext.Provider value={settingsContext} {...props} />;
};

export const useSettingsContext = () => {
  return React.useContext(SettingsContext);
};
