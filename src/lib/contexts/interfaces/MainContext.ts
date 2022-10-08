import { ContextContentInterface, ContextInterface } from ".";
import User from "../../../core/interfaces/User";

export interface MainContextContentInterface extends ContextContentInterface {
  user?: User;
}

export interface MainContextInterface
  extends ContextInterface<MainContextContentInterface> {}
