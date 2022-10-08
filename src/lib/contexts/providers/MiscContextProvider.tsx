/*context-tutorial: https://betterprogramming.pub/build-a-redux-like-store-with-react-context-hooks-234e3774495f*/

import React from "react";

import MiscContextDefaultContent from "../contents/MiscContextDefaultContent";
import {
  MiscContextContentInterface,
  MiscContextInterface,
  NotificationInterface,
  NotificationLevel,
} from "../interfaces/MiscContext";

export const MiscContext = React.createContext<MiscContextInterface>({
  content: MiscContextDefaultContent,
  setContent: (content: MiscContextContentInterface) => content,
  push: (notification: {
    content: string;
    source?: string;
    timeout: number;
    level: NotificationLevel;
  }) => null,
});

export const MiscContextProvider = (props: React.PropsWithChildren) => {
  React.useEffect(() => {
    console.log("[Misc-Context]: started");
  }, []);

  const [content, setContent] = React.useState<MiscContextContentInterface>(
    MiscContextDefaultContent
  );

  /**
   * TODO: add error verification and handling, for the notificationId for example if its not found
   */

  const discardNotification = (notificationId: string) => {
    /**
     * TODO: check if notification exist and hasn't already been discarded manually
     */
    const newNotifications = [...content.notifications];
    const index = newNotifications.findIndex(
      (notification) => notification.id === notificationId
    );
    newNotifications.splice(index, 1);

    setContent({
      ...content,
      notifications: newNotifications,
    });
  };

  /**
   * TODO: fix bugs where two notifications get discarded instead of one
   */

  const push = (notif: {
    content: string;
    source?: string;
    timeout: number;
    level: NotificationLevel;
  }) => {
    const notificationId = Date.now() + "-" + Math.round(Math.random() * 1000);
    const notification: NotificationInterface = {
      id: notificationId,
      ...notif,
      discard: () => discardNotification(notificationId),
    };
    setContent({
      ...content,
      notifications: [...content.notifications, notification],
    });
    if (notif.timeout > 0)
      setTimeout(() => {
        /**
         * TODO: check if notification hasn't already been discarded manually
         */
        discardNotification(notificationId);
      }, notif.timeout);
  };

  const miscContext = { content, setContent, push };

  return <MiscContext.Provider value={miscContext} {...props} />;
};

export const useMiscContext = () => {
  return React.useContext(MiscContext);
};
