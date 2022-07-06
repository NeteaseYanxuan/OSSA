/**
 * 校验日期合法性，返回合法性和日期数组
 *
 * @param {String} date
 * @param {String} start
 * @param {String} end
 * @returns
 */
function verifyDate(date) {
  if (!date) return false;
  //ios new Date的时间格式必须是 2019/8/1 这种以/分隔年月日，且仅年月2019/8/也无法识别，故使用addDay 补日期
  date = new Date(addDay(date).replace(/-/g, "/"));
  return Number.isNaN(date.getMonth()) ? false : date;
}

/**
 * 获取当月最大天数
 *
 * @param {Number} year
 * @param {Number} month
 * @returns
 */
function getMaxDay(year, month) {
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
  if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 29;
    else return 28;
  }
  return 31;
}

function compareDate(d1, d2) {
  let t1 = new Date(d1).getTime();
  let t2 = new Date(d2).getTime();
  return t2 > t1;
}

function compareTime(t1, t2) {
  // logic: t1 <= t2: return true
  t1 = t1.split(":").map((i) => +i);
  t2 = t2.split(":").map((i) => +i);

  if (t1[0] < t2[0]) return true;
  if (t1[0] === t2[0]) {
    if (t1[1] <= t2[1]) return true;
  }

  return false;
}

function getTimeRange(begin, end, suffix = "") {
  const range: string[] = [];
  for (let i = begin; i <= end; i++) {
    range.push(`${i < 10 ? "0" : ""}${i}${suffix}`);
  }
  return range;
}

/**
 * 给月份补日期，默认补为每个月的1号
 */
function addDay(date) {
  let _date = "";
  if (!date) {
    return "";
  } else if (date.includes("-") && date.split("-").length === 2) {
    //判断格式是否为 2019-8
    _date = date + "-1";
  } else {
    _date = date;
  }

  return _date;
}
export {
  verifyDate,
  getMaxDay,
  compareTime,
  compareDate,
  getTimeRange,
  addDay,
};
