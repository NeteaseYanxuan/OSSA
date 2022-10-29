import { ComponentClass, CSSProperties } from "react";
import OsComponent from "./base";

/**
 * @name 走马灯子项属性
 */
interface CarouselItemProps extends OsComponent {
  /**
   * 自定义样式
   */
  style?: object | CSSProperties;
  /**
   * 子项的图片链接或文本链接
   * @desc 目前仅支持图片轮播和纯文本轮播
   */
  content?: string;
}

/**
 * @name 走马灯
 * @desc 用于图片轮播
 * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/carousel
 */
interface CarouselProps extends OsComponent {
  /**
   * 走马灯类型
   * @default "image"
   * @desc
   * - image: 图片轮播
   * - text: 文字轮播
   */
  type?: "image" | "text";
  /**
   * 用于轮播的数据列表
   */
  data: CarouselItemProps[];
  /**
   * 展示宽度
   * @default 750
   */
  width?: number;
  /**
   * 展示高度
   * @default 375
   */
  height?: number;
  /**
   * 滑动方向是否为纵向
   * @default false
   */
  vertical?: boolean;
  /**
   * 是否自动播放
   * @default true
   */
  autoPlay?: boolean;
  /**
   * 自动轮播间隔时间，单位毫秒
   * @default 4000
   */
  interval?: number;
  /**
   * 是否采用衔接滑动
   * @default true
   */
  circular?: boolean;
  /**
   * 展示指示器
   * @default true
   */
  indicatorDots?: boolean;
  indicatorColor?: string;
  indicatorActiveColor?: string;
  current?: number;
  gap?: boolean;
  gapWidth?: number;
  prevMargin?: number;
  nextMargin?: number;
  onChange?: (activeIndex: number) => void;
  onClick?: () => void;
}

declare const Carousel: ComponentClass<CarouselProps>;

export { Carousel, CarouselProps, CarouselItemProps };
