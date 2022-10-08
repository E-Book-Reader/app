import React from "react";

import Notes from "../lib/components/Notes";
import Reader from "../lib/components/Reader";

import getBook from "../core/api/getBook";
import { useParams } from "react-router-dom";
import withAuthWrapper from "../lib/wrappers/withAuthWrapper";
import Book from "../core/interfaces/Book";
import File from "../core/interfaces/File";
import getBookFile from "../core/api/getBookFile";
import ErrorView from "../views/ErrorView";
import LoadingView from "../views/LoadingView";

const Reading = withAuthWrapper(({ user }) => {
  const [page, setPage] = React.useState<number>(1);
  const [book, setBook] = React.useState<Book>();
  const [file, setFile] = React.useState<File>();

  const params = useParams();
  const bookId = params.bookId as string;

  const [loading, setLoading] = React.useState<boolean>(true);

  const [errors, setErrors] = React.useState<string[]>([]);

  /**
   * TODO: make sure that the book is owned by the user and other verifications, otherwise user can't read it
   */

  React.useEffect(() => {
    getBook(bookId)
      .then((book) => {
        setBook(book);
        console.log(book);

        getBookFile(book.ownerId, book.id)
          .then((file) => {
            setFile(file);
          })
          .catch(() => {
            setErrors([...errors, "unable to fetch this book's file"]);
          })
          .finally(() => setLoading(false));
      })
      .catch(() => {
        setErrors([...errors, "unable to fetch this book"]);
      });
  }, [bookId]);

  if (errors.length > 0)
    return (
      <ErrorView
        details
        longDescription={
          "We did't found the book associated with the bookId you provided"
        }
        errors={errors}
        title={"Failed To Load This Book"}
        description={"Please try again"}
      />
    );

  if (loading) return <LoadingView />;

  return (
    <div className="w-full h-full grid grid-cols-2 gap-8 items-center justify-center">
      {/*<div className="w-10 h-full bg-white drop-shadow-lg rounded-lg" />*/}
      <Reader book={book!} page={page} setPage={setPage} />
      <Notes page={page} book={book!} />
    </div>
  );
});

export default Reading;
