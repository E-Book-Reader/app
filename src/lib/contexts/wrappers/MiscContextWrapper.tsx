import React from "react";
import { MiscContextInterface } from "../interfaces/MiscContext";
import { useMiscContext } from "../providers/MiscContextProvider";

interface MiscContextProp {
  miscContext: MiscContextInterface;
}

export default function MiscContextWrapper<P>(
  WrappedComponent: React.ComponentType<P & MiscContextProp>
) {
  const WrappedComponentWithMiscContext = (props: P) => {
    const miscContext = useMiscContext();
    return <WrappedComponent {...props} miscContext={miscContext} />;
  };

  return WrappedComponentWithMiscContext;
}
