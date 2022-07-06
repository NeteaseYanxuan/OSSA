import React, { useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import "./Countdown.scss";

export default function Countdown(props: { time?: number }) {
  const { time = 360000 } = props;
  const [count, setCount] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <View className='demo-countdown'>
      <Text className='demo-countdown--text'>
        {`${Math.floor(count / 6000)}`.padStart(2, "0")}
      </Text>
      <Text className='demo-countdown--text'>
        {`${Math.floor(count / 100) % 60}`.padStart(2, "0")}
      </Text>
      <Text className='demo-countdown--text'>
        {`${count % 100}`.padStart(2, "0")}
      </Text>
    </View>
  );
}

Countdown.defaultProps = {
  time: 360000,
};
