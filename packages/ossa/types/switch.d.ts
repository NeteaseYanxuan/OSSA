import { ComponentClass } from "react";
import OsComponent from "./base";

interface SwitchProps extends OsComponent {
  isChecked: boolean;
  onColor?: string;
  offColor?: string;
  nodeColor?: string;
  isDisabled?: boolean;
  onChange: (v) => void;
}

declare const Switch: ComponentClass<SwitchProps>;

export { Switch, SwitchProps };
