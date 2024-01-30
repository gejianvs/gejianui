import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void; // 函数没有返回值
}

const Button = (props: ButtonProps) => {
  const { title, onClick } = props;
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
