import axios from "axios";

import { apiUrl } from ".";

export default async ({
  code,
  error,
}: {
  code: string | null;
  error: string | null;
}) => {
  const url = apiUrl + "/auth/callback";
  const response = await axios.get(url, {
    params: { code, error },
    withCredentials: true,
  });
  return response.data;
};
