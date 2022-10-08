import { ArticleInterface, articles } from "./MockData";
import { apiUrl } from ".";

const getArticles = (): Promise<ArticleInterface[]> => {
  return new Promise((resolve, reject) =>
    articles ? resolve(articles) : reject("Unvailable")
  );
};

export default getArticles;
