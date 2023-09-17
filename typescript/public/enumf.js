"use strict";
var days;
(function (days) {
    days["sunday"] = "sun";
    days["monday"] = "mon";
    days["tuesday"] = "tue";
    days["wensday"] = "wen";
    days["thursay"] = "thu";
})(days || (days = {}));
function findDays(day) {
    return day;
}
console.log(findDays(days.monday));
