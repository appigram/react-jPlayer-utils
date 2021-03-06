"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(seconds, timeFormats) {
  if (!Number.isInteger(seconds)) {
    return '';
  }

  var myTime = new Date(seconds * 1000);
  var hour = myTime.getUTCHours();
  var min = timeFormats.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60;
  var sec = timeFormats.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60;
  var strHour = timeFormats.padHour && hour < 10 ? "0".concat(hour) : hour;
  var strMin = timeFormats.padMin && min < 10 ? "0".concat(min) : min;
  var strSec = timeFormats.padSec && sec < 10 ? "0".concat(sec) : sec;
  var strTime = '';
  strTime += timeFormats.showHour ? strHour + timeFormats.sepHour : '';
  strTime += timeFormats.showMin ? strMin + timeFormats.sepMin : '';
  strTime += timeFormats.showSec ? strSec + timeFormats.sepSec : '';
  return strTime;
};

exports["default"] = _default;