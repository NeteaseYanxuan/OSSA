function isAndroid(): boolean {
  return /(android)/i.test(navigator.userAgent);
}

export { isAndroid };
