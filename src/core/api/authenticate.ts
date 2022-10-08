import axios from "axios";

import { apiUrl } from ".";

export default async () => {
  const url = apiUrl + "/users/me";
  const result = await axios.get(url, {
    withCredentials: true,
  });
  return result.data;
};
