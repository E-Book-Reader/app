import axios from "axios";

import { apiUrl } from ".";
import Note from "../interfaces/Note";

export default async (userId: string, bookId: string): Promise<Note> => {
  const url = apiUrl + `/users/${userId}/books/${bookId}/notes`;
  const response = await axios.get(url, { withCredentials: true });
  return response.data;
};
