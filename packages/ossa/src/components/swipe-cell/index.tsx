import React, { FC, useState, useRef, useEffect, } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classNames from "classnames";
import { OsSwipeCellProps } from "../../../types/index";

function generateId() {
  return 'sc-' + Math.random().toString(16).slice(2)
}

const SwipeCell: FC<OsSwipeCellProps> = ({ children, disabled = false,right, ...viewProps }) => {
  const idRef = useRef(generateId())
  const [x, setX] = useState(0);
  const direction = useRef('left')
  const startX = useRef(0);
  const endX = useRef(0);
  const rightWidth = useRef(0);

  const handleTouchStart = (e) => {
    if(disabled) {
      return;
    }
    startX.current = e.touches[0].clientX;
  }
  const handleTouchMove = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    if(disabled) {
      return;
    }
    const deltaX = e.touches[0].clientX - startX.current;
    direction.current = deltaX < 0 ? 'left' : 'right';
    const newX = Math.min(Math.max(-rightWidth.current, endX.current + deltaX), 0)
    setX(newX);
  }
  const handleTouchEnd = () => {
    if(disabled) {
      return;
    }
    startX.current = 0;
    endX.current = x;
    const max = 20;
    const minChange = rightWidth.current * 1 / 3 > max ? max : rightWidth.current * 1 / 3;
    const absEndx = Math.abs(endX.current);

    // 自动回弹
    if (direction.current === 'left') {
      endX.current = absEndx > minChange ? -rightWidth.current : 0;
      setX(endX.current)
    }
    if (direction.current === 'right') {
      endX.current = rightWidth.current - absEndx < minChange ? -rightWidth.current : 0;
      setX(endX.current)
    }

  }

  useEffect(() => {
    setTimeout(() => {
      const query = Taro.createSelectorQuery()
      query.select('#' + idRef.current).boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function (res) {
        rightWidth.current = res[0].width;
      })
    }, 200)
  }, [])

  return <View {...viewProps} className={classNames('ossa-swipecell', viewProps.className)}>
    <View style={{ transform: `translate3d(${x}px,0,0)` }} className='ossa-swipecell__wrapper'>
      <View id={idRef.current} className='ossa-swipecell__right'>
        {right}
      </View>
      <View catchMove onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onTouchCancel={handleTouchEnd} className='ossa-swipecell__content'>
        {children}
      </View>
    </View>
  </View>
}

export default SwipeCell