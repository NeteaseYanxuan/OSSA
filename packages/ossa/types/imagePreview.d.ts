import { ComponentClass, CSSProperties, ReactChild } from "react";
import OsComponent from "./base";

interface ImagesItemProps extends OsComponent {
  img: string;
  width: number;
  height: number;
}
interface ImagePreviewProps extends OsComponent {
  showBack?: boolean;
  touchable?: boolean;
  showPagination?: boolean;
  imagesArr: Array<ImagesItemProps>;
  value?: number;
  loop?: boolean;
  show?: boolean;
  customStyle?: object | CSSProperties;
  customHeaderStyle?: object | CSSProperties;
  className?: string;
  imagesBgColor?: string;
  onClose: (item: object) => void;
  onChange?: (item: object) => void;
}

declare const ImagePreview: ComponentClass<ImagePreviewProps>;

export { ImagePreview, ImagePreviewProps, ImagesItemProps };
