import React, { FC } from "react";
import { ViewProps as TaroViewProps } from '@tarojs/components/types/View';

interface SwipeCellProps extends TaroViewProps {
  right?: React.ReactNode;
  disabled?: Boolean;
}

declare const SwipeCell: FC<SwipeCellProps>;

export { SwipeCell, SwipeCellProps }