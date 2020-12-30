
// 倒计时
$(document).ready(function() {
    var oDate = new Date();
    var nowTime = oDate.getTime();
    oDate.setDate(oDate.getDate() + 1);
    var targetDate = new Date(oDate.toLocaleDateString());
    run(targetDate);
});

function run(enddate) {
    getDate(enddate);
    setInterval("getDate('" + enddate + "')", 500);
}

function getDate(enddate) {
    var oDate = new Date();
    var nowTime = oDate.getTime();
    var enddate = new Date(enddate);
    var targetTime = enddate.getTime();
    var second = Math.floor((targetTime - nowTime) / 1000);
    var day = Math.floor(second / 24 * 60 * 60);
    second = second % 86400;
    var hour = Math.floor(second / 3600);
    second %= 3600;
    var minute = Math.floor(second / 60);
    second %= 60;
    var spanH = $('.se-txt')[0];
    var spanM = $('.se-txt')[1];
    var spanS = $('.se-txt')[2];

    spanH.innerHTML = tow(hour);
    spanM.innerHTML = tow(minute);
    spanS.innerHTML = tow(second);
}

function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}
