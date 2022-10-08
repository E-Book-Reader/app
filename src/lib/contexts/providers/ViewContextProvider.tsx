/*context-tutorial: https://betterprogramming.pub/build-a-redux-like-store-with-react-context-hooks-234e3774495f*/

import React from "react";

import ViewContextDefaultContent from "../contents/ViewContextDefaultContent";
import {
  ViewContextContentInterface,
  ViewContextInterface,
} from "../interfaces/ViewContext";

export const ViewContext = React.createContext<ViewContextInterface>({
  content: ViewContextDefaultContent,
  setContent: (content: ViewContextContentInterface) => content,
});

export const ViewContextProvider = (props: React.PropsWithChildren) => {
  React.useEffect(() => {
    console.log("[View-Context]: started");
  }, []);

  const [content, setContent] = React.useState<ViewContextContentInterface>(
    ViewContextDefaultContent
  );

  const viewContext = { content, setContent };

  return <ViewContext.Provider value={viewContext} {...props} />;
};

export const useViewContext = () => {
  return React.useContext(ViewContext);
};
