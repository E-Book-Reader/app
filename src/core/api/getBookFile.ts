import axios from "axios";

import { apiUrl } from ".";
import File from "../interfaces/File";

export default async (userId: string, bookId: string): Promise<File> => {
  const url = apiUrl + `/users/${userId}/books/${bookId}/file`;
  const response = await axios.get(url, {
    withCredentials: true,
  });
  return response.data;
};
