import React, { FC, useMemo, useEffect, useState, useRef } from "react";
import { View } from "@tarojs/components";
import { OsCountdownProps } from "../../../types/index";

interface Options {
  targetDate: string | number;
  interval?: number;
  onEnd?: () => void;
}


const parseMs = (milliseconds) => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
    remainTime: milliseconds
  };
};

function useCountDown(options: Options) {
  const { targetDate, interval = 1000, onEnd } = options || {};
  const [remainTime, setRemainTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>();
  const onEndRef = useRef<() => void>();
  onEndRef.current = onEnd;

  useEffect(() => {
    if(targetDate) {
      calcRemainTime();
      start();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, targetDate])

  function start(){
    timerRef.current = setTimeout(() => {
      calcRemainTime();
    }, interval);
  }

  function calcRemainTime(){
    const deltaTime = new Date(targetDate).getTime() - new Date().getTime();
    setRemainTime(deltaTime < 0 ? 0 : deltaTime);
    if(deltaTime <= interval){
      clear();
      onEndRef?.current?.();
    }else {
      start();
    }
  }

  function clear(){
    timerRef.current && clearTimeout(timerRef.current);
  }

  return {
    formattedRes: parseMs(remainTime),
  }
}

const CountDown: FC<OsCountdownProps> = ({ targetDate, remainTime = 0, interval = 1000,onEnd, children, ...viewProps }) => {
  const calcTargetDate: string | number = useMemo(() => {
    // 兼容safari
    if (targetDate && /^\d+-\d+-\d+/.test(targetDate)) {
      return targetDate.replace(/-/g, '/');
    }

    return targetDate || remainTime + new Date().getTime()
  }, [targetDate, remainTime]);

  const { formattedRes } = useCountDown({
    targetDate: calcTargetDate,
    onEnd,
    interval
  });

  return <View {...viewProps}>{typeof children === "function" && children(formattedRes)}</View>
}

export default CountDown;