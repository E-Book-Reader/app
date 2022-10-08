import { ArticleInterface, articles } from "./MockData";
import { apiUrl } from ".";

const getArticle = (articleId: string): Promise<ArticleInterface> => {
  const article = articles.find((article) => article.id === articleId);
  return new Promise((resolve, reject) =>
    article ? resolve(article) : reject("Unvailable")
  );
};

export default getArticle;
