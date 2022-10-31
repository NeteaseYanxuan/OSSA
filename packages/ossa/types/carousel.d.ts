import { ITouchEvent } from "@tarojs/components";
import { ComponentClass, CSSProperties } from "react";
import OsComponent from "./base";

interface CarouselItemProps extends OsComponent {
  style?: object | CSSProperties;
  content?: string;
}

interface CarouselProps extends OsComponent {
  type?: "image" | "text";
  data: CarouselItemProps[];
  width?: number;
  height?: number;
  vertical?: boolean;
  autoPlay?: boolean;
  interval?: number;
  circular?: boolean;
  indicatorDots?: boolean;
  indicatorColor?: string;
  indicatorActiveColor?: string;
  current?: number;
  gap?: boolean;
  gapWidth?: number;
  prevMargin?: number;
  nextMargin?: number;
  onChange?: (activeIndex: number) => void;
  onClick?: (activeIndex: number, e: ITouchEvent) => void;
}

declare const Carousel: ComponentClass<CarouselProps>;

export { Carousel, CarouselProps, CarouselItemProps };
