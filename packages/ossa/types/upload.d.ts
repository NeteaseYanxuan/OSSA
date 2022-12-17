import { ComponentClass } from "react";
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
  files?: ImageFile[];
  /**
   * 发生变化时回调
   * @param files 文件列表
   * @param operationType 操作类型，add表示新增，remove表示移除
   * @param index 当前操作索引
   */
  onChange?: (
    files: ImageFile[],
    operationType: "add" | "remove",
    index: number
  ) => void;
  /**
   * 点击图片回调
   * @param index 点击项的索引
   * @param file 点击项的文件信息
   */
  onImageClick?: (index: number, file: ImageFile) => void;
  /**
   * 失败回调
   * @param message
   */
  onFail?: (message: TaroGeneral.CallbackResult) => void;
}

declare const Upload: ComponentClass<UploadProps>;

export { Upload, UploadProps, ImageFile };
