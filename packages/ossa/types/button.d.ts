import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import { ButtonProps as TaroButtonProps } from '@tarojs/components/types/Button';
import OsComponent from "./base";

interface ButtonProps extends OsComponent,TaroButtonProps {
  type?: "default" | "primary" | "special1" | "special2";
  size?: "min" | "small" | "normal" | "large" | "block";
  shape?: "round" | "square";
  disabled?: boolean;
  color?: string;
  bgColor?: string;
  bdColor?: string;
  className?: string;
  icon?: string;
  onClick?: CommonEventFunction;
  customStyle?: object;
  startBgColor?: string;
  endBgColor?: string;
  // onClick?: () => {}
}

declare const Button: ComponentClass<ButtonProps>;

export { Button, ButtonProps };
