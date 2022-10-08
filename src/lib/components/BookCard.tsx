import React from "react";

import { InformationCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import Identifiant from "./Identifiant";
import Progress from "./Progress";
import Rating from "./Rating";
import Book from "../../core/interfaces/Book";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
  type: "grid" | "row";
}

const BookCard = ({ type, book }: BookCardProps) => {
  const owned = true;

  switch (type) {
    case "grid":
      return (
        <Link to={"/books/" + book.id}>
          <div className="w-full gap-4 p-5 flex flex-col items-start max-w-72 h-96 rounded-lg drop-shadow-xl bg-white cursor-pointer">
            <div className="w-full flex justify-between items-center">
              <div className="font-bold text-base text-black">
                {String(book?.name)}
              </div>
              <InformationCircleIcon className="h-5 w-5" />
            </div>
            <div className="w-full h-full overflow-hidden rounded bg-gray-300">
              <img
                alt="book-cover"
                className="h-full w-full"
                src={`http://localhost:8080/users/${book.ownerId}/books/${book.id}/file/cover`}
              />
            </div>
            {owned ? (
              <Progress progress={0.75} />
            ) : (
              <div className="text-xs w-full">{book?.description}</div>
            )}
            <div className="w-full flex justify-between items-center text-orange-400">
              <div className="font-bold text-s cursor-pointer">Read</div>
              {owned ? (
                <TrashIcon className="h-5 w-5" />
              ) : (
                <Rating size="5" rating={3} />
              )}
            </div>
          </div>
        </Link>
      );
      break;

    case "row":
      return (
        <Link to={"/books/" + book.id}>
          <div className="w-full bg-white grid grid-cols-3 px-5 h-24 rounded-lg shadow-lg items-center">
            <Identifiant
              name={String(book?.name)}
              details={"La salle"}
              avatar={`http://localhost:8080/users/${book.ownerId}/books/${book.id}/file/cover`}
            />
            {owned ? (
              <Progress progress={0.25} />
            ) : (
              <Rating size="5" rating={3} />
            )}
            <div className="flex gap-2 items-center text-orange-400 justify-end">
              <InformationCircleIcon className="h-5 w-5" />
              <div className="font-bold">Read</div>
            </div>
          </div>
        </Link>
      );
      break;
  }
};

export default BookCard;
