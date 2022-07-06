import Taro from "@tarojs/taro";

let ua = "";
let touchRegExp: any = "";
let isAndroid = false;
let isIos = false;
let isTouch = false;

if (
  Taro.getEnv() !== Taro.ENV_TYPE.WEAPP &&
  Taro.getEnv() !== Taro.ENV_TYPE.ALIPAY &&
  Taro.getEnv() !== Taro.ENV_TYPE.SWAN &&
  Taro.getEnv() !== Taro.ENV_TYPE.RN &&
  Taro.getEnv() !== Taro.ENV_TYPE.TT
) {
  ua = navigator.userAgent;
  touchRegExp = new RegExp(
    "(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)",
    "i"
  );
  isAndroid = /android/i.test(ua);
  isIos = !isAndroid;
  isTouch = touchRegExp.test(ua);
}

export default {
  isAndroid,
  isIos,
  isTouch,
};
