import React from "react";
import { motion } from "framer-motion";
import { Link, useParams, useSearchParams } from "react-router-dom";

import getUser from "../core/api/getUser";
import User from "../core/interfaces/User";
import Book from "../core/interfaces/Book";
import getUserBooks from "../core/api/getUserBooks";

import ErrorView from "../views/ErrorView";
import Filter from "../lib/components/Filter";
import LoadingView from "../views/LoadingView";
import BookCard from "../lib/components/BookCard";
import Identifiant from "../lib/components/Identifiant";

const UserPage = () => {
  const params = useParams();
  const userId = params.userId as string;

  const [searchParams, setSearchParams] = useSearchParams();

  const [user, setUser] = React.useState<User>();
  const [books, setBooks] = React.useState<Book[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    getUser(userId)
      .then((user) => {
        setUser(user);
      })
      .catch(() => {
        setErrors([...errors, "unable to fetch this user"]);
      })
      .then(getUserBooks.bind(null, userId))
      .then((books) => {
        setBooks(books);
      })
      .catch(() => {
        setErrors([...errors, "unable to fetch this user books"]);
      })
      .finally(() => setLoading(false));
  }, []);

  /**
   * TODO: error, why in the error page only the "unable to fetch this user books" is hown and not the first one ("unable to fethc this user")?
   * => because it rerenders maybe ? idk
   */

  if (errors.length > 0)
    return (
      <ErrorView
        details
        longDescription={
          "We did't found the user associated with the userId you provided"
        }
        errors={errors}
        title={"Failed To Load This User"}
        description={"Please try again"}
      />
    );

  if (loading) return <LoadingView />;

  return (
    <div className="flex flex-col gap-8 h-full w-full">
      <Identifiant
        avatar={`http://localhost:8080/users/${user!.id}/picture`}
        name={user!.username}
        details={user!.email}
      />
      <Filter />
      {books.length !== 0 ? (
        <div className="relative w-full h-full grid grid-cols-[repeat(auto-fit,minmax(288px,1fr))] gap-16">
          {books.map((book, i) => {
            const search = searchParams.get("search")?.toLocaleLowerCase();
            if (!search || book.name.toLocaleLowerCase().startsWith(search))
              return (
                <motion.div
                  key={book.id}
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={"/books/" + book.id} className="w-full">
                    <BookCard type="grid" book={book} />
                  </Link>
                </motion.div>
              );
            else return;
          })}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="text-3xl font-semibold">There Is No Books Here</div>
            <div className="text-sm">
              Looks like this user haven't added any books yet
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
