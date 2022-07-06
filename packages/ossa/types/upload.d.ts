import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface UploadProps extends OsComponent {
  max?: number;
  multiple?: boolean;
  files?: any;
  customStyle?: object;
  classNames?: string;
  onChange?: (
    files: Array<Object>,
    operationType: string,
    index: number
  ) => void;
  onImageClick?: (index: number, file: Object) => void;
  onFail?: (message: string) => void;
}

declare const Upload: ComponentClass<UploadProps>;

export { Upload, UploadProps };
