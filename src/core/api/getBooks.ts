import axios from "axios";

import { apiUrl } from ".";
import Book from "../interfaces/Book";

export default async (limit: number): Promise<Book[]> => {
  const url = apiUrl + "/books";
  const response = await axios.get(url, {
    withCredentials: true,
    params: {
      limit,
    },
  });
  return response.data;
};
