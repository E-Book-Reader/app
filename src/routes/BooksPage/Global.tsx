import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import BookCard from "../../lib/components/BookCard";
import { PlusIcon } from "@heroicons/react/24/solid";

import Book from "../../core/interfaces/Book";
import { useViewContext } from "../../lib/contexts/providers/ViewContextProvider";
import { useMainContext } from "../../lib/contexts/providers/MainContextProvider";
import getBooks from "../../core/api/getBooks";
import LoadingView from "../../views/LoadingView";
import ErrorView from "../../views/ErrorView";

const GlobalBooks = () => {
  const viewContext = useViewContext();
  const mainContext = useMainContext();

  const [books, setBooks] = React.useState<Book[]>([]);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    /**
     * TODO: sorting / filtering will be done here
     */
    /**
     * TODO: get all public books (with pages)
     */
    getBooks(50)
      .then(setBooks)
      .catch(() => setErrors([...errors, "failed to load books"]))
      .finally(() => setLoading(false));
  }, []);

  if (errors.length > 0)
    return (
      <ErrorView
        details
        errors={errors}
        title={"Failed To Load Global Books"}
        description={"Please try again later"}
        longDescription={
          "Soemthing wen wrong while trying to fetch global books"
        }
      />
    );

  if (loading) return <LoadingView />;

  return books.length !== 0 ? (
    <div
      className={`relative w-full h-full grid ${
        viewContext.content.books === "row"
          ? "grid-rows-[repeat(auto-fit,96px)] gap-4"
          : "grid-cols-[repeat(auto-fit,minmax(288px,1fr))] gap-16"
      }`}
    >
      {books.map((book, i) => {
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
      })}
    </div>
  ) : (
    /**
     * TODO: change empty screen and personalize it if there is a user / there is no user
     */
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="text-3xl font-semibold">There Is No Books</div>
        <div className="text-sm">Looks likes There is no Books here</div>
      </div>
    </div>
  );
};

export default GlobalBooks;
