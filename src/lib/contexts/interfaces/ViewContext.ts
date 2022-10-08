import { ContextContentInterface, ContextInterface } from ".";

export interface ViewContextContentInterface extends ContextContentInterface {
  loading: boolean;
  books: "row" | "grid";
  theme: "light" | "dark";
  navbar?: {
    middle?: {
      title?: JSX.Element | string;
      action?: JSX.Element | string;
    };
  };
}

export interface ViewContextInterface
  extends ContextInterface<ViewContextContentInterface> {}
