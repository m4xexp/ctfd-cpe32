import React, { FC } from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  width?: string;
  height?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = (props) => {
  const { text, bgColor, type } = props;
  return (
    <>
      <button
        type={type}
        className={`py-3 px-4 ${bgColor}text-white text-3xl font-semibold shadow-md rounded-xl`}
      >
        <h3
          style={{
            textShadow: "rgba(255, 99, 71, 0)",
          }}
        >
          {text}
        </h3>
      </button>
    </>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
