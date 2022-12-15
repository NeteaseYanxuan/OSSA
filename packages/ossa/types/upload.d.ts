import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface ImageFile {
  /** 本地临时文件路径 */
  path: string
  /** 本地临时文件大小，单位 B */
  size: number
  /** 文件的 MIME 类型
   * @supported h5
   */
  type?: string
  /** 原始的浏览器 File 对象
   * @supported h5
   */
  originalFileObj?: File
}

interface UploadProps extends OsComponent {
  max?: number;
  /**
   * 是否允许多选
   * @deprecated `multiple`属性在未来版本中将被删除，请使用`max`属性代替
   * @default true
   */
  multiple?: boolean;
  files?: any;
  customStyle?: CSSProperties;
  classNames?: string;
  onChange?: (
    files: Array<ImageFile>,
    operationType: string,
    index: number
  ) => void;
  onImageClick?: (index: number, file: ImageFile) => void;
  onFail?: (err: TaroGeneral.CallbackResult) => void;
}

declare const Upload: ComponentClass<UploadProps>;

export { Upload, UploadProps, ImageFile };
