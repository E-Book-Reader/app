import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./lib/components/NavBar";
import NotificationsHandler from "./lib/components/NotificationsHandler";

import ContextsProviders from "./lib/contexts/providers/ContextsProviders";
import { useMainContext } from "./lib/contexts/providers/MainContextProvider";
import { useViewContext } from "./lib/contexts/providers/ViewContextProvider";
import { useSettingsContext } from "./lib/contexts/providers/SettingsContextProvider";
import { useMiscContext } from "./lib/contexts/providers/MiscContextProvider";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import BooksPage from "./routes/BooksPage";
import GlobalBooks from "./routes/BooksPage/Global";
import Books from "./routes/BooksPage/Books";
import BookPage from "./routes/BookPage";
import Reading from "./routes/ReadingPage";
import ArticlePage from "./routes/ArticlePage";
import ArticlesPage from "./routes/ArticlesPage";
import BookCreationPage from "./routes/BookCreationPage";
import UserPage from "./routes/UserPage";
import LoadingPage from "./views/LoadingView";
import ErrorView from "./views/ErrorView";
import LoadingView from "./views/LoadingView";
import LogoutPage from "./routes/LogoutPage";
import LoginCallback from "./routes/LoginCallback";

/*
  TODO: don't start app until all contexts are ready
 * TODO: listen to cookies updates, if jwt cookie get deleted we remove the user from context
*/

/**
 * TODO: implement caching to not over use the server
 * TODO: compress images + lazy loading
 */

const Application = ContextsProviders(({}) => {
  const [loading, setLoading] = React.useState(true);

  const contexts = [
    useMainContext(),
    useViewContext(),
    useMiscContext(),
    useSettingsContext(),
  ];

  React.useEffect(
    () => {
      /**STUCK IN LOADING ? MAYBE CHECK HERE */
      setLoading(!contexts.every((context) => context.content.ready));
    },
    contexts.map((context) => context.content.ready)
  );

  if (loading) return <LoadingView />;

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <NotificationsHandler />
        <Routes>
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/books/create" element={<BookCreationPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/callback" element={<LoginCallback />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/books" element={<BooksPage />}>
            <Route path="/books/" element={<Books />} />
            <Route path="/books/global" element={<GlobalBooks />} />
          </Route>
          <Route path="/books/:bookId" element={<BookPage />} />
          <Route path="/books/:bookId/reading" element={<Reading />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route
            path="*"
            element={
              <ErrorView
                title={"404 Page not found"}
                description={"Something went wrong, please try again"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
});

ReactDOM.createRoot(document.getElementById("root")!).render(<Application />);
