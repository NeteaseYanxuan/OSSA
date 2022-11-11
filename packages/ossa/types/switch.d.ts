import { ComponentClass } from "react";
import OsComponent from "./base";

interface SwitchProps extends OsComponent {
  isChecked: boolean;
  onColor?: string;
  offColor?: string;
  nodeColor?: string;
  /**
   * 是否禁用
   * @deprecated `isDisabled`属性在未来版本中将被删除，请使用`disable`代替
   * @default false
   */
  isDisabled?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  onChange: (v) => void;
}

declare const Switch: ComponentClass<SwitchProps>;

export { Switch, SwitchProps };
