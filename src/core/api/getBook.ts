import axios from "axios";

import { apiUrl } from ".";
import Book from "../interfaces/Book";

export default async (bookId: string): Promise<Book> => {
  const url = apiUrl + "/books/" + bookId;
  const response = await axios.get(url, {
    withCredentials: true,
  });
  return response.data;
};
