import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LeftSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const routes = ["/", "/login", "/books", "/books/global"];

  if (routes.includes(location.pathname))
    return (
      <section className="flex align-middle gap-10 col-start-1">
        <Link to="/">
          <h1 className="text-orange-400 text-4xl font-bold cursor-pointer">
            E-Reader
          </h1>
        </Link>
        <ul className="hidden xl:flex gap-8 cursor-pointer items-center">
          <Link to="/books">
            <li>books</li>
          </Link>
          <Link to="/articles">
            <li>articles</li>
          </Link>
        </ul>
      </section>
    );
  else
    return (
      <div className="flex items-center gap-2 cursor-pointer" onClick={goBack}>
        <ArrowLeftIcon className="h-6 w-6" />
        <div className="font-bold">Back</div>
      </div>
    );
};

export default LeftSection;
