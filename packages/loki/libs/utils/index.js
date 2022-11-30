import { px2rem } from "./css";
export const cls = function (preCls, className) {
  if (!className) return preCls;
  if (typeof className === "string") {
    return preCls.replace(/\s*$/, "") + " " + className;
  }
  let _cls = "";
  for (const ky in className) {
    if (className[ky]) {
      _cls += " " + ky;
    }
  }
  return preCls.replace(/\s*$/, "") + _cls;
};
export default {
  px2rem,
  cls,
};
//# sourceMappingURL=index.js.map
