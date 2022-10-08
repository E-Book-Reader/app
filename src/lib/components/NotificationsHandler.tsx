import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import Notification from "./Notification";
import { MiscContextWrapper } from "../contexts";

const NotificationsHandler = MiscContextWrapper(({ miscContext }) => {
  /**<motion.div
            className="absolute bottom-0"
            animate={{
              y: (miscContext.content.notifications.length - i - 1) * -15,
              opacity:
                i < miscContext.content.notifications.length - 1 &&
                miscContext.content.notifications.length > 1
                  ? 0.5
                  : 1,
            }}
            exit={{ y: 100 }}
            initial={{ y: 100 }}
            key={notification.id}
          > */
  return createPortal(
    <div>
      {miscContext.content.notifications.map((notification, i) => {
        return (
          <Notification key={notification.id} notification={notification} />
        );
      })}
    </div>,
    document.getElementById("misc")!
  );
});

export default NotificationsHandler;
