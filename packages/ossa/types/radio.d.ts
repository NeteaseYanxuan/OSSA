import { ComponentClass } from "react";
import OsComponent from "./base";

interface BaseRadioProps {
  /**
   * 单选按钮类型
   * @desc
   * - column: 单行独占单选按钮
   * - row: 横向布局单选按钮
   * @default column
   */
  type?: "column" | "row";
  /**
   * 单选按钮的值
   */
  value?: number | string;
  /**
   * 是否禁用
   * @deprecated `isDisabled`属性在未来版本中将被删除，请使用`disabled`代替
   * @default false
   */
  isDisabled?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否只读
   * @deprecated `isReadonly`属性在未来版本中将被删除，请使用`readonly`代替
   * @default false
   */
  isReadonly?: boolean;
  /**
   * 是否失效
   * @default false
   */
  readonly?: boolean;
}

interface RadioProps extends BaseRadioProps, OsComponent {
  /**
   * 单选按钮值改变时回到
   * @param {number | string} v 当前值
   */
  onChange?: (v: number | string) => void;
}

interface RadioOptionProps extends BaseRadioProps, OsComponent {
  /**
   * 选项值
   */
  optionValue: number | string;
  /**
   * 是否自定义
   * @default false
   */
  isCustom?: boolean;
  /**
   * 点击回调
   */
  onClick?: (v) => void;
}

declare const Radio: ComponentClass<RadioProps>;
declare const RadioOption: ComponentClass<RadioOptionProps>;

export { Radio, RadioProps, RadioOption, RadioOptionProps };
