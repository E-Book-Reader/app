import React from "react";

import { MainContextProvider } from "./MainContextProvider";
import { MiscContextProvider } from "./MiscContextProvider";
import { SettingsContextProvider } from "./SettingsContextProvider";
import { ViewContextProvider } from "./ViewContextProvider";

export default function ContextsProviders(
  WrappedComponent: React.ComponentType
) {
  const WrappedComponentWithMainContext = (props: any) => {
    return (
      <MainContextProvider>
        <ViewContextProvider>
          <MiscContextProvider>
            <SettingsContextProvider>
              <WrappedComponent {...props} />
            </SettingsContextProvider>
          </MiscContextProvider>
        </ViewContextProvider>
      </MainContextProvider>
    );
  };

  return WrappedComponentWithMainContext;
}
