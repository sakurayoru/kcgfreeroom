timerID = setInterval(clock, 250);
timerID = setInterval(getClass, 1000);
function clock() {
    document.getElementById("view_clock").innerHTML = getNow();
}
let year, mon, day, hour, min, sec, dayOfWeek, dayOfWeekStr;
function getNow() {
    let now = new Date();
    year = now.getFullYear();
    mon = now.getMonth() + 1;
    day = now.getDate();
    hour = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();
    dayOfWeek = now.getDay();
    // デバッグ日時変更
    dayOfWeek = 1;
    hour = 18;
    let s = dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
    //出力用
    s = mon + "月" + day + "日" + hour + "時" + min + "分<br />" + sec + "秒" + dayOfWeekStr + "曜日";
    return s;
}
function getClass() {
    let nowclass, add;
    if ((dayOfWeek == 0) || (dayOfWeek == 6)) {
        nowclass = "今日は休日です";
        document.getElementById("class").innerHTML = nowclass;
    }
    else if ((hour == 11 && min >= 0) || (hour == 12 && min < 40)) {
        nowclass = "2限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }
    else if ((hour == 12 && min >= 40) || (hour == 13) || (hour == 14)) {
        nowclass = "3限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }
    else if ((hour == 15 && min >= 0) || (hour == 16 && min < 40)) {
        nowclass = "4限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }
    else if ((hour == 16 && min >= 40) || hour <= 17 || (hour == 18 && min < 20)) {
        nowclass = "5限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }
    else if ((hour == 18 && min >= 20) || (hour <= 19)) {
        add = dayOfWeek + 1;
        dayOfWeek = add % 7;
        tomorrow = day + 1;
        nowclass = tomorrow + "日1限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }
    else {
        nowclass = day + "日1限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }
}