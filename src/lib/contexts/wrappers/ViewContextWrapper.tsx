import React from "react";
import { ViewContextInterface } from "../interfaces/ViewContext";
import { useViewContext } from "../providers/ViewContextProvider";

interface ViewContextProp {
  viewContext: ViewContextInterface;
}

export default function ViewContextWrapper<P>(
  WrappedComponent: React.ComponentType<P & ViewContextProp>
) {
  const WrappedComponentWithViewContext = (props: P) => {
    const viewContext = useViewContext();
    return <WrappedComponent {...props} viewContext={viewContext} />;
  };

  return WrappedComponentWithViewContext;
}
