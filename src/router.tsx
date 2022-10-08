import { createBrowserRouter } from "react-router-dom";

import HomePage from "./routes/HomePage";
import BookPage from "./routes/BookPage";
import BooksPage from "./routes/BooksPage";
import Reading from "./routes/ReadingPage";
import Books from "./routes/BooksPage/Books";
import GlobalBooks from "./routes/BooksPage/Global";
import ArticlesPage from "./routes/ArticlesPage";
import ArticlePage from "./routes/ArticlePage";
import Login from "./routes/LoginPage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/books",
    element: <BooksPage />,
    children: [
      {
        path: "/books/global",
        element: <GlobalBooks />,
      },
      {
        path: "/books/",
        element: <Books />,
      },
    ],
  },
  {
    path: "/books/:bookId",
    element: <BookPage />,
  },
  {
    path: "/books/:bookId/reading",
    element: <Reading />,
  },
  {
    path: "/articles",
    element: <ArticlesPage />,
  },
  {
    path: "/articles/:articleId",
    element: <ArticlePage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
