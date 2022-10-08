import { Link } from "react-router-dom";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface SuccessViewProps {
  redirect?: string;

  title?: JSX.Element | string;
  description?: JSX.Element | string;
}

const DEFAULT_REDIRECT = "/";
const DEFAULT_TITLE = "Operation Completed With Success";
const DEFAULT_DESCRIPTION = "The operation you requested have been done";

const SuccessView = ({
  title = DEFAULT_TITLE,
  redirect = DEFAULT_REDIRECT,
  description = DEFAULT_DESCRIPTION,
}: SuccessViewProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <CheckCircleIcon className="w-32 h-32 fill-green-600" />
        <div className="text-3xl font-semibold text-green-600 text-center">
          {title}
        </div>
        <div className="text-sm text-center">{description}</div>
        <Link
          to={redirect}
          className="text-lg flex items-center justify-center gap-2 text-green-600 font-bold"
        >
          Continue
          <ArrowRightIcon className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default SuccessView;
