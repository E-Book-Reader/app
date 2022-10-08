import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import getNote from "../../../core/api/getNote";
import Book from "../../../core/interfaces/Book";
import Note from "../../../core/interfaces/Note";
import writeNote from "../../../core/api/writeNote";

import ErrorView from "../../../views/ErrorView";
import LoadingView from "../../../views/LoadingView";

import Tools from "./components/Tools";
import TextArea from "./components/TextArea";
import Input from "../../../core/components/Input";

interface NotesProps {
  page: number;
  book: Book;
}

const Notes = ({ page, book }: NotesProps) => {
  /**
   * TODO: either make an auto save, or when note is being edited ask user if he want to save and make CTRL + S shortcut
   */

  const [note, setNote] = React.useState<Note>();
  const [search, setSearch] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    console.log(`Fetching Page ${page} notes..`);
    getNote(book.ownerId, book.id, page)
      .then((note) => {
        setNote(note);
        console.log("note:", note);
      })
      .catch((err) => console.log("err:", err))
      .finally(() => setLoading(false));
  }, [book, page]);

  React.useEffect(() => {
    console.log("changed", page);
  }, [page]);

  /**Be more precise in errors, tell if page is invalid or if file is invalid or if book is invalid or if it's the user.. */

  if (errors.length > 0)
    return (
      <ErrorView
        details
        longDescription={
          "We did't found the note associated with this file's page"
        }
        errors={errors}
        title={"Failed To Load This Note"}
        description={"Please reload page"}
      />
    );

  if (loading) return <LoadingView />;

  return (
    <div className="h-full flex flex-col gap-4">
      <Tools />
      <Input
        value={search}
        onchange={setSearch}
        placeholder="search"
        icon={<MagnifyingGlassIcon className="h-6 w-6" />}
      />
      <div className="h-full flex flex-col gap-4 p-8 rounded-lg bg-white shadow-lg">
        <div className="text-lg font-bold text-black">Notes</div>
        <TextArea
          placeholder={`Page ${page} Notes..`}
          content={note ? note.content : ""}
        />
      </div>
    </div>
  );
};

export default Notes;
