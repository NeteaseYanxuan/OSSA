import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";

/**
 * 单个文件结构
 */
export type FileItem = {
  url: string;
  file: Taro.chooseImage.ImageFile;
};

/**
 * 图片上传组件
 */
interface UploadProps extends OsComponent {
  /**
   * 最大上传图片数量
   * @default 99
   */
  max?: number;
  /**
   * 开始多张传输
   * @default true
   */
  multiple?: boolean;
  /**
   * 初始文件数组
   */
  files?: FileItem[];
  /**
   * 发生变化时回调
   * @param files 文件列表
   * @param operationType 操作类型，add表示新增，remove表示移除
   * @param index 当前操作索引
   */
  onChange?: (
    files: FileItem[],
    operationType: "add" | "remove",
    index: number
  ) => void;
  /**
   * 点击图片回调
   * @param index 点击项的索引
   * @param file 点击项的文件信息
   */
  onImageClick?: (index: number, file: FileItem) => void;
  /**
   * 失败回调
   * @param message
   */
  onFail?: (message: string) => void;
}

declare const Upload: ComponentClass<UploadProps>;

export { Upload, UploadProps };
