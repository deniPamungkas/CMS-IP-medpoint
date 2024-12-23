import React from "react";

interface ButtonType {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant: "primary" | "secondary" | "danger";
  size: "small" | "medium" | "large" | "default";
  disabled: boolean;
  style: string;
  buttonType: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonType> = ({
  label,
  onClick,
  disabled,
  size,
  buttonType,
  variant,
  style,
}) => {
  switch (size) {
    case "small":
      return (
        <button
          type={buttonType}
          className={` ${
            style != ""
              ? style
              : "h-[40px] w-[100px] flex justify-center items-center"
          } ${
            disabled
              ? "bg-gray-400 cursor-wait"
              : variant == "primary"
              ? "bg-blue-600"
              : variant == "secondary"
              ? "bg-green-600"
              : "bg-red-600"
          }  text-white rounded-md`}
          onClick={onClick}
          disabled={disabled}
        >
          {label}
        </button>
      );

    case "medium":
      return (
        <button
          type={buttonType}
          className={`${
            style != ""
              ? style
              : "h-[40px] w-[150px] flex justify-center items-center"
          } ${
            disabled
              ? "bg-gray-400 cursor-wait"
              : variant == "primary"
              ? "bg-blue-600"
              : variant == "secondary"
              ? "bg-green-600"
              : "bg-red-600"
          }  text-white rounded-md`}
          onClick={onClick}
          disabled={disabled}
        >
          {label}
        </button>
      );
    case "large":
      return (
        <button
          type={buttonType}
          className={`${
            style != ""
              ? style
              : "h-[40px] w-[200px] flex justify-center items-center"
          } ${
            disabled
              ? "bg-gray-400 cursor-wait"
              : variant == "primary"
              ? "bg-blue-600"
              : variant == "secondary"
              ? "bg-green-600"
              : "bg-red-600"
          }  text-white rounded-md`}
          onClick={onClick}
          disabled={disabled}
        >
          {label}
        </button>
      );
    case "default":
      return (
        <button
          type={buttonType}
          className={`${
            style != ""
              ? style
              : "h-[40px] w-full flex justify-center items-center"
          } ${
            disabled
              ? "bg-gray-400 cursor-wait"
              : variant == "primary"
              ? "bg-blue-600"
              : variant == "secondary"
              ? "bg-green-600"
              : "bg-red-600"
          }  text-white rounded-md`}
          onClick={onClick}
          disabled={disabled}
        >
          {label}
        </button>
      );
  }
};

export default Button;
