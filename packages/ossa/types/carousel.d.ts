import { ITouchEvent } from "@tarojs/components";
import { ComponentClass, CSSProperties } from "react";
import OsComponent from "./base";

/**
 * 走马灯子项属性
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
 * 走马灯
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
  /**
   * 指示点颜色
   * @default "rgba(0, 0, 0, .3)"
   */
  indicatorColor?: string;
  /**
   * 当前选中指示点颜色
   * @default "#000000"
   */
  indicatorActiveColor?: string;
  /**
   * 当前选中项序号
   * @default 0
   */
  current?: number;
  /**
   * 是否有分隔（仅图片式下生效）
   * @default flase
   */
  gap?: boolean;
  /**
   * 分隔式间距大小
   * @default 20
   */
  gapWidth?: number;
  /**
   * 分隔式下前一张图露出的大小
   * @default 15
   */
  prevMargin?: number;
  /**
   * 分隔式下后一张图露出的大小
   * @default 15
   */
  nextMargin?: number;
  /**
   * 切换时触发
   * @param {number} activeIndex 当前选中的子项索引
   * @returns void
   */
  onChange?: (activeIndex: number) => void;
  /**
   * 点击子项回调
   */
  onClick?: (activeIndex: number, e: ITouchEvent) => void;
}

declare const Carousel: ComponentClass<CarouselProps>;

export { Carousel, CarouselProps, CarouselItemProps };
