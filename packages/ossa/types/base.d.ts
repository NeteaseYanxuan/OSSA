import { CSSProperties, ReactChild } from "react";

export interface OsComponent {
  className?: string | string[] | { [key: string]: boolean };

  customStyle?: object | CSSProperties;
  children?: ReactChild | ReactChild[] | null;
}

export default OsComponent;
