import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";
import { IconProps } from "./icon";

/**
 * @name 评分项
 */
export type RateItem = {
  /**
   * 当前评分项的分值
   */
  value: number;
  /**
   * 当前评分项是否选中
   */
  selected: boolean;
  /**
   * 当前评分项文本描述
   */
  txt: string;
};

/**
 * @name 评分组件
 */
interface RateProps extends OsComponent {
  /**
   * 评分图标尺寸
   * @default "default"
   * @deprecated `type`属性在未来版本中将被删除，请使用`size`代替
   */
  type?: "default" | "small";
  /**
   * 评分图标尺寸
   * @default "default"
   */
  size?: "default" | "small";
  /**
   * 标题
   */
  title?: string;
  /**
   * 未选中时的图标
   * @default "grade"
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  icon?: IconProps["type"];
  /**
   * 选中时的图标
   * @default "grade-selected"
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  selectedIcon?: IconProps["type"];
  /**
   * 未选中图标的颜色
   * @default "#CCCCCC"
   */
  color?: string;
  /**
   * 选中图标的颜色
   * @default "#FAB646"
   */
  selectedIconColor?: string;
  /**
   * 选项描述
   * @default ["非常差", "差", "一般吧", "满意", "非常满意"]
   */
  options?: Array<string>;
  /**
   * 当前评分
   * @default 0
   */
  value?: number;
  /**
   * 是否展示分值对应结果
   * @default true
   */
  isShowResult?: boolean;
  /**
   * 分值改变回调
   */
  onChange?: (item: RateItem) => void;
}

declare const Rate: ComponentClass<RateProps>;

export { Rate, RateProps };
