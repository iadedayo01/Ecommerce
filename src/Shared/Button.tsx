// import React from 'react'

import type { ReactElement } from "react";

interface ButtonProps {
  text: string;
  icon?: ReactElement;
  textColor: string;
  width?: string;
  BG: string;
  padding: string;
  borderRadius: string;
}

const Button = ({
  text,
  borderRadius,
  icon,
  textColor,
  width,
  BG,
  padding,
}: ButtonProps) => {
  return (
    <div
      className={` justify-center flex items-center gap-2 cursor-pointer ${borderRadius} ${width} ${textColor} ${BG} ${padding}`}
    >
      {text}
      {icon}
    </div>
  );
};

export default Button;
