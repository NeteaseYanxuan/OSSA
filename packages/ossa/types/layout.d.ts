import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";

interface LayoutProps extends OsComponent {
  title: string;
}

declare const Layout: ComponentClass<LayoutProps>;

export { Layout, LayoutProps };
