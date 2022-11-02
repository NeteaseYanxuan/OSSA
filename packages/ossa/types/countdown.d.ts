import React, { FC, ComponentProps } from "react";
import { ViewProps as TaroViewProps } from '@tarojs/components/types/View';

type FormattedResType = {
  days: numnber;
  hours: numnber;
  minutes: numnber;
  seconds: numnber;
  milliseconds: numnber;
  remainTime: numnber;
}
interface CountdownProps extends TaroViewProps {
  targetDate?: string;
  remainTime?: number;
  onEnd?: () => void;
  interval?: number;
  format?: string;
  children?: (formattedRes: FormattedResType) => React.ReactNode;
}

declare const Countdown: FC<CountdownProps>;

export { Countdown, CountdownProps, FormattedResType }