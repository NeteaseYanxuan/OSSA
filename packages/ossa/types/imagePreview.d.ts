import { ComponentClass, CSSProperties, ReactChild } from "react";
import OsComponent from "./base";

/**
 * 图片项
 */
interface ImagesItemProps extends OsComponent {
  /**
   * 图片 url
   */
  img: string;
  /**
   * 图片宽度，计算宽高比
   */
  width?: number;
  /**
   * 图片高度，计算宽高比
   */
  height?: number;
}

/**
 * 当前操作预览项
 */
export type PreviewItem = {
  /**
   * 当前操作的预览项属性
   * @deprecated `url` 属性即将废弃，请使用`item`属性代替
   */
  url: ImagesItemProps;
  /**
   * 当前操作的预览项属性
   */
  item: ImagesItemProps;
  /**
   * 当前操作项的索引
   */
  index: number;
};

/**
 * 图片预览
 */
interface ImagePreviewProps extends OsComponent {
  /**
   * 展示后退按钮
   * @desc touchable 为 false 的时候强制为 true
   * @default true
   */
  showBack?: boolean;
  /**
   * 点击图片或者空白区域是否返回缩略图
   * @default true
   */
  touchable?: boolean;
  /**
   * 展示页码
   * @default true
   */
  showPagination?: boolean;
  /**
   * 图片列表
   */
  imagesArr: ImagesItemProps[];
  /**
   * 当前预览图片位置
   * @default 0
   */
  value?: number;
  /**
   * 是否可以循环
   * @default true
   */
  loop?: boolean;
  show?: boolean;
  /**
   * 自定义头部样式
   */
  customHeaderStyle?: object | CSSProperties;
  /**
   * 图片背景颜色
   */
  imagesBgColor?: string;
  /**
   * 关闭回调
   */
  onClose: (item: PreviewItem) => void;
  /**
   * 切换回调
   */
  onChange?: (item: PreviewItem) => void;
}

declare const ImagePreview: ComponentClass<ImagePreviewProps>;

export { ImagePreview, ImagePreviewProps, ImagesItemProps, PreviewItem };
