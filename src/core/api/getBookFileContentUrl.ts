import { apiUrl } from ".";

export default (userId: string, bookId: string): string => {
  const url = apiUrl + `/users/${userId}/books/${bookId}/file/content`;
  return url;
};
