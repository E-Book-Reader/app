/**
 * TODO: make redirect route to this one and or redirect the user from the server login callback to this one call the server login callback from here
 * And put some additional steps like: change of username or some stuff like this
 * user will already be created at this point this steps will just call the api and update it
 */
import React from "react";
import { useSearchParams } from "react-router-dom";
import sendAuthCallback from "../core/api/sendAuthCallback";

import ErrorView from "../views/ErrorView";
import LoadingView from "../views/LoadingView";
import SuccessView from "../views/SuccessVIew";

const LoginCallback = () => {
  const [errors, setErrors] = React.useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    console.log("[Rendered]");

    const code = searchParams.get("code");
    const error = searchParams.get("error");

    sendAuthCallback({ code, error })
      .then((data) => console.log("[Success]:", data))
      .catch(() => setErrors([...errors, "failed to login"]))
      .finally(() => setLoading(false));
  }, []);

  if (errors.length > 0)
    return (
      <ErrorView
        details
        longDescription={"Seomthing went wrong while authentificating you"}
        errors={errors}
        title={"Authentification Failed"}
        description={"Please try again"}
      />
    );

  if (loading) return <LoadingView />;

  return (
    <SuccessView title={"You have been loged in"} description={"Welcome !"} />
  );
};

export default LoginCallback;
