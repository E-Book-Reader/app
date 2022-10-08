import axios from "axios";

import { apiUrl } from ".";

export default async (): Promise<string> => {
  const url = apiUrl + "/auth";
  const response = await axios.get(url);
  return response.data;
};
