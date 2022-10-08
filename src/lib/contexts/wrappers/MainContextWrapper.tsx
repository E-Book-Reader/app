import React from "react";
import { MainContextInterface } from "../interfaces/MainContext";
import { useMainContext } from "../providers/MainContextProvider";

interface MainContextProp {
  mainContext: MainContextInterface;
}

export default function MainContextWrapper<P>(
  WrappedComponent: React.ComponentType<P & MainContextProp>
) {
  const WrappedComponentWithMainContext = (props: P) => {
    const mainContext = useMainContext();
    return <WrappedComponent {...props} mainContext={mainContext} />;
  };

  return WrappedComponentWithMainContext;
}
