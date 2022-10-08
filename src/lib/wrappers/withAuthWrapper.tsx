import React from "react";
import { useNavigate } from "react-router-dom";

import User from "../../core/interfaces/User";
import LoadingPage from "../../views/LoadingView";
import { useMainContext } from "../contexts/providers/MainContextProvider";

interface WithAuthWrapperProps {
  user: User;
}

export default <P,>(
  WrappedComponent: React.ComponentType<P & WithAuthWrapperProps>
) => {
  const WrappedComponentWithViewContext = (props: P) => {
    const [loading, setLoading] = React.useState<boolean>(true);

    const navigate = useNavigate();
    const viewContext = useMainContext();
    const user = viewContext.content.user!;

    React.useEffect(() => {
      if (user) return setLoading(false);
      navigate("/login");
    }, []);

    return !loading ? (
      <WrappedComponent {...props} user={user} />
    ) : (
      <LoadingPage />
    );
  };

  return WrappedComponentWithViewContext;
};
