import React from "react";
import { motion } from "framer-motion";
import {
  Link,
  useNavigate,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

import BookCard from "../../lib/components/BookCard";
import Book from "../../core/interfaces/Book";
import getUserBooks from "../../core/api/getUserBooks";
import { useViewContext } from "../../lib/contexts/providers/ViewContextProvider";
import withAuthWrapper from "../../lib/wrappers/withAuthWrapper";

import RoundedIconButton from "../../core/components/RoundedIconBUtton";
import ErrorView from "../../views/ErrorView";
import LoadingView from "../../views/LoadingView";

const Books = withAuthWrapper(({ user }) => {
  const viewContext = useViewContext();
  const navigate = useNavigate();

  const [books, setBooks] = React.useState<Book[]>([]);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    /**
     * TODO: sorting / filtering will be done here
     */
    getUserBooks(user.id)
      .then(setBooks)
      .catch(() => setErrors([...errors, "failed to load books"]))
      .finally(() => setLoading(false));
  }, []);

  if (errors.length > 0)
    return (
      <ErrorView
        details
        errors={errors}
        title={"Failed To Load Your Book"}
        description={"Please try again later"}
        longDescription={"Soemthing wen wrong while trying to fetch yout books"}
      />
    );

  if (loading) return <LoadingView />;

  /**
   * TODO:
   * prevent user from closing the page,
   * make file upload as a permanent alert,
   * if there is no internet cancel upload and make sure server cancel's it to,
   * make progress bar for upload,
   */

  return books.length !== 0 ? (
    <div
      className={`relative w-full h-full grid ${
        viewContext.content.books === "row"
          ? "grid-rows-[repeat(auto-fit,96px)] gap-4"
          : "grid-cols-[repeat(auto-fit,minmax(288px,1fr))] gap-16"
      }`}
    >
      {books.map((book, i) => {
        const search = searchParams.get("search")?.toLocaleLowerCase();
        if (!search || book.name.toLocaleLowerCase().startsWith(search))
          return (
            <motion.div
              key={book.id}
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={viewContext.content.books === "row" ? "w-full" : ""}
            >
              <Link to={"/books/" + book.id} className="w-full">
                <BookCard type={viewContext.content.books} book={book} />
              </Link>
            </motion.div>
          );
        else return;
      })}
      <div className="absolute bottom-0 right-0">
        <RoundedIconButton onClick={() => navigate("/books/create")}>
          <PlusIcon className="fill-white h-6 w-6" />
        </RoundedIconButton>
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="text-3xl font-semibold">There Is No Books</div>
        <div className="text-sm">
          Looks like you haven't added any books yet
        </div>
      </div>
      <div
        className="hover:scale-95 flex items-center ease-out transition duration-500 justify-center py-5 px-28 rounded-full cursor-pointer bg-orange-400"
        onClick={() => navigate("/books/create")}
      >
        <PlusIcon className="w-8 h-8 fill-white" />
      </div>
    </div>
  );
});

export default Books;
