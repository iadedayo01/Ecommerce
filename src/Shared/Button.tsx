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
  onclick?: () => void;
}

const Button = ({
  text,
  borderRadius,
  icon,
  onclick,
  textColor,
  width,
  BG,
  padding,
}: ButtonProps) => {
  return (
    <div
      className={` justify-center text-sm flex items-center gap-2 cursor-pointer ${borderRadius} ${width} ${textColor} ${BG} ${padding}`}
      onClick={onclick}
    >
      {text}
      {icon}
    </div>
  );
};

export default Button;
