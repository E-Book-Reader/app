import React from "react";
import { useParams } from "react-router-dom";
import getArticle from "../core/api/getArticle";
import { ArticleInterface } from "../core/api/MockData";
import ArticleHeader from "../lib/components/BlogComponents/ArticleHeader";
import Paragraph from "../lib/components/BlogComponents/Paragraph";
import Title from "../lib/components/BlogComponents/Title";
import { MiscContextWrapper } from "../lib/contexts";

const ArticlePage = MiscContextWrapper(({ miscContext }) => {
  const [article, setArticle] = React.useState<ArticleInterface>();
  const [loading, setLoading] = React.useState<boolean>(true);

  const params = useParams();
  const articleId = params.articleId;

  React.useEffect(() => {
    getArticle(articleId!)
      .then(setArticle)
      .then(() => setLoading(false))
      .catch(() =>
        miscContext.push({
          timeout: 2000,
          level: 4,
          content: "Invalid bookId provided",
        })
      );
  }, [articleId]);

  return !loading ? (
    <div className="w-full flex flex-col gap-8">
      <ArticleHeader />
      <Title>{article!.title}</Title>
      {article?.contents.map((content, i) => {
        return (
          <div key={content.title + "-" + i}>
            <Title>{content.title}</Title>
            {/**Treat content */}
          </div>
        );
      })}
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aliquid,
        reiciendis in expedita omnis dignissimos laudantium vel ullam.
        Accusantium tempore rerum commodi consequatur, laborum autem ducimus
        error ratione ipsa quod!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aliquid,
        reiciendis in expedita omnis dignissimos laudantium vel ullam.
        Accusantium tempore rerum commodi consequatur, laborum autem ducimus
        error ratione ipsa quod!
      </Paragraph>
    </div>
  ) : (
    <div>Failed to load article</div>
  );
});

export default ArticlePage;
