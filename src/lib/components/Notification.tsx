import { NotificationInterface } from "../contexts/interfaces/MiscContext";

interface NotificationProps {
  notification: NotificationInterface;
}

const Notification = ({ notification }: NotificationProps) => {
  const handleClick = () => {
    console.log("[discard]:", notification.id);
    notification.discard();
  };
  return (
    <div
      className="flex flex-col gap-4 cursor-pointer w-96 bg-white overflow-hidden shadow-2xl p-6 rounded items-center relative"
      onClick={handleClick}
    >
      <div className="h-2 w-full bg-blue-500 absolute top-0"></div>
      <div className="text-xl text-center font-bold">
        {notification.content}
      </div>
      <div className="text-center">
        This is the notification description ({notification.id})
      </div>
    </div>
  );
};

export default Notification;
