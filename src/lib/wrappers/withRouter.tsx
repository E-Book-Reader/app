import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter =
  <P,>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return <WrappedComponent {...props} {...{ location, params, navigate }} />;
  };

export default withRouter;
