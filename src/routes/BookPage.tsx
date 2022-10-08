import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

import getBook from "../core/api/getBook";
import ErrorView from "../views/ErrorView";
import Book from "../core/interfaces/Book";

import LoadingView from "../views/LoadingView";

import Rating from "../lib/components/Rating";
import Button from "../core/components/Button";
import Progress from "../lib/components/Progress";
import DropDownMenu from "../core/components/DropDownMenu";
import BookReviewCard from "../lib/components/BookReviewCard";
import BookAuthorCard from "../lib/components/BookAuthorCard";
import BookDetailsCard from "../lib/components/BookDetailsCard";
import { OptionsGroupType } from "../core/components/DropDownMenu/interfaces/OptionsGroupInterface";

const BookPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const bookId = params.bookId as string;

  const [book, setBook] = React.useState<Book>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    getBook(bookId)
      .then(setBook)
      .catch(() => setErrors([...errors, "failed to load book"]))
      .finally(() => setLoading(false));
  }, []);

  if (errors.length > 0)
    return (
      <ErrorView
        details
        title={"Failed To Load This Book"}
        description={"Please try again"}
        longDescription={
          "We did't found the book associated with the bookId you provided"
        }
        errors={errors}
      />
    );

  if (loading) return <LoadingView />;

  return (
    <div className="h-full w-full relative grid grid-cols-3 grid-rows-4 gap-16">
      <div className="rounded row-span-2 flex flex-col gap-4">
        <div className="rounded overflow-hidden p-2 bg-gray-300 w-full h-full">
          <img
            alt="book-cover"
            className="h-full w-full"
            src={`http://localhost:8080/users/${book!.ownerId}/books/${
              book!.id
            }/file/cover`}
          />
        </div>
        <Progress progress={0.4} />
      </div>
      <div className="flex flex-col gap-4 col-span-2 row-span-2">
        <Rating size="8" rating={3} />
        <div className="font-bold text-5xl text-black">{book?.name}</div>
        <div className="text leading-7">
          {book?.description}.{" "}
          <span className="underline text-orange-400 font-bold cursor-pointer">
            Read more
          </span>
        </div>
        <div className="flex gap-8 items-center justify-start">
          <Button onclick={() => navigate("reading")}>
            <div>Continue Reading</div>
          </Button>
          <div className="text-xl text-orange-400 cursor-pointer">Notes</div>
        </div>
      </div>
      <div className="flex grid-cols-3 gap-16 row-span-2 col-span-3">
        <BookDetailsCard />
        {/*<BookAuthorCard />*/}
        <BookReviewCard />
      </div>
      <div className="absolute right-8">
        <DropDownMenu
          options={[
            {
              id: "1",
              type: OptionsGroupType.NORMAL,
              options: [
                {
                  id: "1",
                  value: "report",
                  onInteract: () => console.log("report"),
                },

                {
                  id: "2",
                  value: "download",
                  onInteract: () => console.log("download"),
                },
              ],
            },
          ]}
        >
          <EllipsisHorizontalIcon className="h-8 w-8" />
        </DropDownMenu>
      </div>
    </div>
  );
};

export default BookPage;
