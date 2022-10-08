import axios from "axios";

import { apiUrl } from ".";
import Book from "../interfaces/Book";

export default async (userId: string): Promise<Book[]> => {
  const url = apiUrl + `/users/${userId}/books`;
  const response = await axios.get(url, { withCredentials: true });
  return response.data;
};
