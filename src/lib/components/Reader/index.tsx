import React from "react";
import getBookFileContentUrl from "../../../core/api/getBookFileContentUrl";
import Book from "../../../core/interfaces/Book";

import Pages from "./components/Page";
import PDFReader from "./components/PDFReader";

interface ReaderProps {
  book: Book;
  page: number;
  setPage: (page: number) => void;
}

const Reader = ({ book, page, setPage }: ReaderProps) => {
  return (
    <div className="drop-shadow-lg h-full bg-white p-2 rounded-lg relative flex flex-col justify-between">
      <PDFReader
        file={getBookFileContentUrl(book.ownerId, book.id)}
        page={page}
      />
      <Pages page={page} pages={book.pages} setPage={setPage} />
    </div>
  );
};

export default Reader;
