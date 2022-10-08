import { ContextContentInterface, ContextInterface } from ".";

export enum NotificationLevel {
  MISC,
  INFORMATION,
  IMPORTANT,
  WARNING,
  ERROR,
}

/**
 * TODO: add notification types: headder notification, popup notification, modal notification, ...
 */

/**
 * TODO: add a function that will be executed after the timeout end or the notification get closed
 * TODO: or add buttons array where
 */
export interface NotificationInterface {
  id: string;
  content: string;
  source?: string;
  timeout: number /*puting it to 0 will make it permanent unti a .discard is called*/;
  discard: () => void;
  level: NotificationLevel;
}

export interface MiscContextContentInterface extends ContextContentInterface {
  notifications: NotificationInterface[];
}

export interface MiscContextInterface
  extends ContextInterface<MiscContextContentInterface> {
  push: (notification: {
    content: string;
    source?: string;
    timeout: number;
    level: NotificationLevel;
  }) => void;
}
