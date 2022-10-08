import React from "react";

import LoadingView from "../views/LoadingView";
import SuccessView from "../views/SuccessVIew";
import withAuthWrapper from "../lib/wrappers/withAuthWrapper";
import { useMainContext } from "../lib/contexts/providers/MainContextProvider";

const LogoutPage = withAuthWrapper(({ user }) => {
  /**
   * TODO: delete jwt cookie
   * TODO: request server to expire jwt token
   */

  const mainContext = useMainContext();

  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      mainContext.setContent({ ...mainContext.content, user: undefined });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <LoadingView />;

  return <SuccessView />;
});

export default LogoutPage;
