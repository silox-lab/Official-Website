"use client"
import { useEffect, useState } from "react";
import { ButtonProps } from "./button";

export const HTMLButton = (props: ButtonProps) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <button {...props} disabled={isClient ? props.disabled && true : false}>
      {props.children}
    </button>
  );
};
