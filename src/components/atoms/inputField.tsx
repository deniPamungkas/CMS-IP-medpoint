import React, { ChangeEventHandler } from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  componentType: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  componentType,
  label,
  onChange,
  name,
}) => {
  switch (componentType) {
    case "input":
      return (
        <div className="flex flex-col space-y-2">
          <span>{label}</span>
          <input
            className="px-5 w-full h-[50px] outline-none border-2 rounded-md"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
          />
        </div>
      );

    default:
      return <input className="px-2" type="text" />;
  }
};

export default InputField;
