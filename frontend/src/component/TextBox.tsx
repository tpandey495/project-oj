import React, { FC, ChangeEvent } from "react";

interface CustomInputProps {
  labelFor: string;
  labelText: string;
  type?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  autoComplete?: "on" | "off";
  width?: string;
  height?: string;
  borderRadius?: string;
  borderColor?: string;
  placeholder?: string;
}

const CustomInput: FC<CustomInputProps> = ({
  labelFor,
  labelText,
  type = "text",
  value = "",
  onChange,
  name = "",
  id = "",
  autoComplete = "off",
  width = "270px",
  height = "37px",
  borderRadius = "5px",
  borderColor = "gray",
  placeholder = "",
}) => {
  const inputStyle: React.CSSProperties = {
    width,
    height,
    borderRadius,
    border: `1px solid ${borderColor}`,
    fontSize: "15px",
    padding: "8px",
  };

  return (
    <div className="custom-input">
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        style={inputStyle}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
