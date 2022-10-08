import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import CollapsibleList from "../core/components/CollapsibleList";

interface ErrorViewProps {
  details?: boolean;

  redirect?: string;

  errors?: string[];
  title?: JSX.Element | string;
  description?: JSX.Element | string;
  longDescription?: JSX.Element | string;

  retry?: () => void;
}

const DEFAULT_REDIRECT = "/";
const DEFAULT_ERRORS: string[] = [];
const DEFAULT_TITLE = "Something Went Wrong";
const DEFAULT_DESCRIPTION = "Please try again later";
const DEFAULT_LONG_DESCRIPTION =
  "We don't know what caused this error, please try again later our support staff are investigating it";

const ErrorView = ({
  details,
  title = DEFAULT_TITLE,
  errors = DEFAULT_ERRORS,
  redirect = DEFAULT_REDIRECT,
  description = DEFAULT_DESCRIPTION,
  longDescription = DEFAULT_LONG_DESCRIPTION,
  retry,
}: ErrorViewProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex gap-4 items-center justify-center">
          <div className="text-3xl font-semibold">{title}</div>
          <InformationCircleIcon className="fill-black h-6 w6 cursor-pointer" />
        </div>
        <div className="text-sm">{description}</div>
        {/**Should we remove the Go Home Page ? */}
        <Link to={redirect} className="text-sm text-orange-400 font-bold">
          Go Home Page
        </Link>
      </div>
      {details ? (
        <div className="flex flex-col gap-4 bg-red-100 rounded py-8 px-12 border border-red-200 shadow-md w-1/2 max-w-screen-md">
          <div className="font-bold text-lg text-left">Informations</div>
          {longDescription}
          <CollapsibleList values={errors}>
            <div className="font-bold">Details</div>
          </CollapsibleList>
        </div>
      ) : null}
    </div>
  );
};

export default ErrorView;
