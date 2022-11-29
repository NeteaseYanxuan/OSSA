import React, { FC } from "react";
import { ViewProps as TaroViewProps } from '@tarojs/components/types/View';

interface SwipeCellProps extends TaroViewProps {
  /**
   * 右侧滑动区域的内容，可选
   */
  right?: React.ReactNode;
  /**
   * 禁止滑动，可选
   * @default false
   */
  disabled?: boolean;
}

declare const SwipeCell: FC<SwipeCellProps>;

export { SwipeCell, SwipeCellProps }