import axios from "axios";

import { apiUrl } from ".";
import Note from "../interfaces/Note";

export default async (
  userId: string,
  bookId: string,
  page: number,
  content: string
): Promise<Note> => {
  const url = apiUrl + `/users/${userId}/books/${bookId}/notes/${page}`;
  const response = await axios.post(
    url,
    { content },
    { withCredentials: true }
  );
  return response.data;
};
