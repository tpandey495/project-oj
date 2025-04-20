import React, { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  className?: string;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  backgroundColor = "blue",
  color = "white",
  width = "auto",
  height = "auto",
  className,
  id,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor,
    height,
    width,
    border: "none",
    borderRadius: "5px",
    color,
    padding: "8px 12px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={buttonStyle}
      className={className}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
