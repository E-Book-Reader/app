import React from "react";
import { useNavigate } from "react-router-dom";
import getArticles from "../core/api/getArticles";
import { ArticleInterface } from "../core/api/MockData";

import ArticleCard from "../lib/components/ArticleCard";
import { useViewContext } from "../lib/contexts/providers/ViewContextProvider";

const ArticlesPage = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [articles, setArticles] = React.useState<ArticleInterface[]>([]);

  const viewContext = useViewContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    viewContext.setContent({
      ...viewContext.content,
      navbar: { middle: { title: "Articles" } },
    });
    getArticles()
      .then(setArticles)
      .catch(
        () =>
          console.log(
            "[Error]: Fetching Articles"
          ) /**display errors and stop loadng */
      )
      .finally(() => setLoading(false));
  }, []);

  const handelClick = (articleId: string) => {
    navigate("/articles/" + articleId);
  };

  return !loading ? (
    <div>
      {articles.map((article) => {
        return (
          <div
            key={article.id}
            className="cursor-pointer"
            onClick={() => handelClick(article.id)}
          >
            <ArticleCard
              image={article.image}
              rating={3}
              title={article.title}
              topics={["Algortims", "C"]}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <div>failed to load</div>
  );
};

export default ArticlesPage;
