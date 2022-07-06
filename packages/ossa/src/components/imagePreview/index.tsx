import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
//引入组件对应的 类型文件 .d.ts
import { OsImagePreviewProps, OsImagesItemProps } from "../../../types/index";

function getStyleObj(props: OsImagePreviewProps) {
  const { show } = props;
  const _styleObj = {};
  if (show) {
    // setShow(true);
    _styleObj["display"] = "block";
  } else {
    // setShow(false);
    _styleObj["display"] = "none";
  }
  return _styleObj;
}

function getClassObject(props: OsImagePreviewProps) {
  const _classObject = {};
  return _classObject;
}

function getPageInfo(props: OsImagePreviewProps, index: number) {
  const { imagesArr = [] } = props;
  return `${index + 1}/${imagesArr.length}`;
}

const initialBaseWidth = function () {
  return Taro.getSystemInfoSync().windowWidth;
};

function getSwipeStyle(offset, swiping, totalWidth) {
  return {
    width: `${totalWidth}px`,
    transform: `translateX(${offset}px)`,
    transitionDuration: `${swiping ? 0 : 500}ms`,
  };
}

function getSwipeItemStyle(swipes: any, baseWidth: number) {
  const styleList = swipes.map((swipe: any) => ({
    width: baseWidth + "px",
    height: "100%",
    transform: `translateX(${swipe.offset}px)`,
  }));
  return styleList;
}

function getTotalWidth(imagesArr, baseWidth) {
  return baseWidth * imagesArr.length;
}

export default function Index(props: OsImagePreviewProps) {
  const rootClassName = "ossa-image-preview"; //组件
  const classObject = getClassObject(props); //组件修饰
  const {
    showBack,
    touchable,
    imagesArr = [],
    showPagination,
    loop,
    customStyle,
  } = props;
  let [index = 0, setIndex] = useState(props.value);
  const [baseWidth] = useState(initialBaseWidth);
  const [offset, setOffset] = useState(
    imagesArr.length > 1 ? -baseWidth * index : 0
  );
  const [swipes, setSwipes] = useState(
    imagesArr.map((img) => ({ img, offset: 0 }))
  );
  const [swiping, setSwiping] = useState(false);
  const [totalWidth] = useState(getTotalWidth(imagesArr, baseWidth));
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [, setShow] = useState(false);
  const styleObject = Object.assign(getStyleObj(props), customStyle);
  const _pageInfo = getPageInfo(props, index);
  const swipeStyle = getSwipeStyle(offset, swiping, totalWidth);

  useEffect(() => {
    const isShow = props.show || false;
    setShow(isShow);
  }, [props.show]);

  function resetTouchStatus() {
    setDeltaX(0);
    setDeltaY(0);
    setOffsetX(0);
    setOffsetY(0);
  }

  function onTouchStart(event: any) {
    resetTouchStatus();
    setStartX(event.touches[0].clientX);
    setStartY(event.touches[0].clientY);
  }

  function onImgTouchStart(event: any) {
    setSwiping(true);
    onTouchStart(event);
    correctPosition();
  }

  function correctPosition() {
    const length = imagesArr.length;
    if (index <= -1) {
      move({ pace: length });
    }
    if (index >= length) {
      move({ pace: -length });
    }
  }

  function move({ pace = 0, _offset = 0, emitChange = false }) {
    const size = baseWidth;
    const count: number = swipes.length;
    const atFirst = index === 0;
    const atLast = index === count - 1;
    const outOfBounds =
      !loop &&
      ((atFirst && (_offset > 0 || pace < 0)) ||
        (atLast && (_offset < 0 || pace > 0)));

    //禁止上下滑动
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      return;
    }

    if (outOfBounds || count <= 1) {
      return;
    }

    if (swipes[0]) {
      swipes[0].offset = atLast && (deltaX < 0 || pace > 0) ? totalWidth : 0;
    }

    if (swipes[count - 1]) {
      swipes[count - 1].offset =
        atFirst && (deltaX > 0 || pace < 0) ? -totalWidth : 0;
    }
    // let _timer:any = null
    // clearTimeout(_timer)
    if (pace && index + pace >= -1 && index + pace <= count) {
      setIndex((index += pace));
      if (emitChange) {
        // _timer = setTimeout(() => {
        //   setIndex((index + count) % count)
        // }, 0);
        setIndex((index + count) % count);
      }
    }
    setOffset(Math.round(_offset - index * size));
  }

  function onImgTouchMove(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (!swiping) return;
    //禁止上下滑动
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      return;
    }

    touchMove(event);
    move({ _offset: Math.min(Math.max(deltaX, -baseWidth), baseWidth) });
  }

  function touchMove(event: any) {
    const touch = event.touches[0];

    setDeltaX(touch.clientX - startX);
    setDeltaY(touch.clientY - startY);
    setOffsetX(Math.abs(deltaX));
    setOffsetY(Math.abs(deltaY));
  }

  function onImgTouchEnd(event: any) {
    if (!swiping) return;
    // event.stopPropagation();
    if (deltaX) {
      const _offset = offsetX;
      move({
        pace: _offset > 0 ? (deltaX > 0 ? -1 : 1) : 0,
        emitChange: true,
      });
    }
    setSwiping(false);
    const _index = index >= imagesArr.length ? 0 : index;
    props.onChange && props.onChange({ index: _index, url: imagesArr[_index] });
  }

  function onWrapperClick(event: any) {
    if (touchable && offsetX < 10 && offsetY < 10) {
      setShow(false);
      clearStates();
      props.onClose && props.onClose({ index: index, url: imagesArr[index] });
    }
  }

  function onGoback() {
    setShow(false);
    clearStates();
    props.onClose && props.onClose({ index: index, url: imagesArr[index] });
  }

  function clearStates() {
    setIndex(0);
    resetTouchStatus();
    setOffset(0);
    setSwipes(imagesArr.map((img) => ({ img, offset: 0 })));
  }

  function getImgStyle(item: any, previewProps: OsImagePreviewProps) {
    const { width, height } = item;
    const _imgH = (baseWidth * height) / width;

    const _style = {
      height: _imgH + "px",
    };

    if (previewProps.imagesBgColor) {
      _style["background"] = previewProps.imagesBgColor;
    }

    return _style;
  }

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
      onClick={(e) => {
        onWrapperClick(e);
      }}
    >
      <View className="ossa-image-preview__header">
        {(showBack || !touchable) && (
          <View className="ossa-image-preview__back" onClick={() => onGoback()}>
            <OsIcon color="#fff" type="return"></OsIcon>
          </View>
        )}
        {showPagination && (
          <View className="ossa-image-preview__index">{_pageInfo}</View>
        )}
      </View>
      <View className="ossa-image-preview__swipe">
        <View
          className="ossa-image-preview__swipe__track"
          style={swipeStyle}
          onTouchStart={(e) => {
            onImgTouchStart(e);
          }}
          onTouchMove={(e) => {
            onImgTouchMove(e);
          }}
          onTouchEnd={(e) => {
            onImgTouchEnd(e);
          }}
        >
          {imagesArr.map((item: OsImagesItemProps, i: number) => (
            <View
              key={item.img}
              className="ossa-image-preview__swipe-item"
              style={getSwipeItemStyle(swipes, baseWidth)[i]}
            >
              <Image
                style={getImgStyle(item, props)}
                className="ossa-image-preview__swipe-item--image"
                src={item.img}
              ></Image>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

Index.defaultProps = {
  showBack: true,
  touchable: true,
  showPagination: true,
  loop: true,
  show: false,
  imagesArr: [],
};

Index.options = {
  addGlobalClass: true,
};
