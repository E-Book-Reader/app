import { SettingOptionInterface } from "../interfaces/OptionInterface";

interface SettingOptionProps extends SettingOptionInterface {}

const SettingOption = ({
  id,
  value,
  onInteract,
  setting,
}: SettingOptionProps) => {
  return (
    <div
      className="whitespace-nowrap text-white font-light text-xs h-6 px-4 flex items-center justify-between gap-2 cursor-pointer hover:bg-sky-600"
      onClick={() => onInteract.bind(null, id)}
    >
      {value}
      {setting ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.65388 13.0138C2.15272 16.1731 4.87586 18.5 8.07434 18.5H15.9257C19.1242 18.5 21.8473 16.1731 22.3461 13.0138C22.4522 12.3421 22.4522 11.6579 22.3461 10.9862C21.8473 7.82691 19.1242 5.5 15.9257 5.5H8.07434C4.87586 5.5 2.15272 7.8269 1.65388 10.9862C1.54783 11.6579 1.54783 12.3421 1.65388 13.0138ZM16 15.5C17.7849 15.5 19.2779 14.137 19.464 12.3681C19.4897 12.1245 19.4897 11.8755 19.464 11.6319C19.2779 9.86302 17.7849 8.5 16 8.5C14.2152 8.5 12.7222 9.86302 12.536 11.6319C12.5104 11.8755 12.5104 12.1245 12.536 12.3681C12.7222 14.137 14.2152 15.5 16 15.5Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.3461 13.0138C21.8473 16.1731 19.1242 18.5 15.9257 18.5H8.07434C4.87586 18.5 2.15272 16.1731 1.65388 13.0138C1.54783 12.3421 1.54783 11.6579 1.65388 10.9862C2.15272 7.82691 4.87586 5.5 8.07434 5.5H15.9257C19.1242 5.5 21.8473 7.8269 22.3461 10.9862C22.4522 11.6579 22.4522 12.3421 22.3461 13.0138ZM8 15.5C6.21517 15.5 4.72218 14.137 4.53599 12.3681C4.51034 12.1245 4.51034 11.8755 4.53599 11.6319C4.72218 9.86302 6.21517 8.5 8 8.5C9.78483 8.5 11.2778 9.86302 11.464 11.6319C11.4897 11.8755 11.4897 12.1245 11.464 12.3681C11.2778 14.137 9.78483 15.5 8 15.5Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
};

export default SettingOption;
