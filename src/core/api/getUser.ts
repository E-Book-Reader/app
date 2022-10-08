import axios from "axios";

import { apiUrl } from ".";
import User from "../interfaces/User";

export default async (userId: string): Promise<User> => {
  const url = apiUrl + `/users/${userId}`;
  const response = await axios.get(url, {
    withCredentials: true,
  });
  return response.data;
};
