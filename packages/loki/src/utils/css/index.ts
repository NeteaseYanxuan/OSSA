export const px2rem = function($px) {
  let baseSize = 100;
  if (typeof process !== 'undefined' && process && process.env && process.env.TARO_ENV) {
    return $px + 'rpx';
  }
  if (typeof process.env.TARO_ENV !== "undefined" && process.env.TARO_ENV) {
    return $px + 'rpx';
  }
  baseSize = window.getComputedStyle(document.getElementsByTagName('html')[0])['font-size'].replace(/[a-zA-Z]+$/, '')
  // @ts-ignore
  return`${$px / baseSize}rem`;
};