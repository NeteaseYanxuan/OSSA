import { ComponentClass } from "react";
import OsComponent from "./base";

interface SwitchProps extends OsComponent {
  /**
   * 是否选中
   * @deprecated `isChecked`属性在未来版本中将被删除，请使用`checked`代替
   */
  isChecked?: boolean;
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 打开时的背景色
   * @default '#44DB5E'
   */
  onColor?: string;
  /**
   * 关闭时的背景色
   * @default '#FFF'
   */
  offColor?: string;
  /**
   * 滑块颜色
   * @default '#FFF'
   */
  nodeColor?: string;
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
   * 状态改变时触发
   * @param v 当前开关的开启状态
   */
  onChange: (v: boolean) => void;
}

declare const Switch: ComponentClass<SwitchProps>;

export { Switch, SwitchProps };
