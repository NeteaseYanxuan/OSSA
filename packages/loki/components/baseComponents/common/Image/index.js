/* eslint-disable import/newline-after-import */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from "react";
import Utils from "./../../../utils/index";
const { px2rem } = Utils;
const Image = ({ imgStyle, image }) => {
  const [style, setStyle] = useState(imgStyle || null);
  const handleImageLoaded = (e) => {
    const style_ = imgStyle || {};
    if (e.target && e.target.naturalWidth) {
      const { naturalWidth, naturalHeight } = e.target;
      setStyle(
        Object.assign(Object.assign({}, style_), {
          width: px2rem(naturalWidth),
          // height: typeof Taro ? "auto" : px2rem(naturalHeight),
          height: "fit-content",
        })
      );
      return;
    }
    const { width, height } = e.detail;
    setStyle(
      Object.assign(Object.assign({}, style_), {
        width: px2rem(width),
        height: "fit-content",
      })
    );
  };
  return React.createElement("img", {
    className: "x-prize-pic",
    // @ts-ignore
    mode: "widthFix",
    style: style,
    src: image,
    onLoad: handleImageLoaded,
  });
};
export default Image;
//# sourceMappingURL=index.js.map
