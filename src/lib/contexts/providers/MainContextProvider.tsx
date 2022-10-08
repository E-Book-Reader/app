/*context-tutorial: https://betterprogramming.pub/build-a-redux-like-store-with-react-context-hooks-234e3774495f*/

import React from "react";
import authenticate from "../../../core/api/authenticate";

import MainContextDefaultContent from "../contents/MainContextDefaultContent";
import {
  MainContextContentInterface,
  MainContextInterface,
} from "../interfaces/MainContext";

export const MainContext = React.createContext<MainContextInterface>({
  content: MainContextDefaultContent,
  setContent: (content: MainContextContentInterface) => content,
});

export const MainContextProvider = (props: React.PropsWithChildren) => {
  React.useEffect(() => {
    initiaite().finally(() => {
      console.log("[Main-Context]: started");
    });
  }, []);

  const [content, setContent] = React.useState<MainContextContentInterface>(
    MainContextDefaultContent
  );

  const initiaite = async () => {
    try {
      const user = await authenticate();
      setContent({ ...content, user, ready: true });
    } catch {
      setContent({ ...content, user: undefined, ready: true });
    }
  };

  const mainContext = { content, initiaite, setContent };

  return <MainContext.Provider value={mainContext} {...props} />;
};

export const useMainContext = () => {
  return React.useContext(MainContext);
};
