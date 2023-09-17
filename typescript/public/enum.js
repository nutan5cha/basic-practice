"use strict";
var days;
(function (days) {
    days["mon"] = "monday";
    days["tue"] = "tuesday";
    //wed,thu,fri,sat
})(days || (days = {}));
let whichDays;
whichDays = days.mon;
console.log(whichDays);
console.log(whichDays === "monday");
//true
