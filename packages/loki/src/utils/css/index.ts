export const px2rem = function($px) {
  let baseSize = 100;
  if (typeof process !== 'undefined' && process && process.env && process.env.TARO_ENV) {
    return $px + 'rpx';
  }
  try {
    if (typeof process.env.TARO_ENV !== "undefined" && process.env.TARO_ENV) {
      return $px + 'rpx';
    }
  } catch (error) {
    baseSize = (window.getComputedStyle(document.getElementsByTagName('html')[0])['font-size'] ||
    window.getComputedStyle(document.body)['font-size']).replace(/[a-zA-Z]+$/, '')
  }
  // @ts-ignore
  return`${$px / baseSize}rem`;
};