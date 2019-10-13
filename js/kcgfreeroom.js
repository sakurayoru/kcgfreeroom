timerID = setInterval(clock, 250);
timerID = setInterval(getClass, 1000);
function clock() {
    document.getElementById("view_clock").innerHTML = getNow();
}
let year, mon, day, hour, min, sec, dayOfWeek, dayOfWeekStr, s;
function getNow() {
    let now = new Date();
    year = now.getFullYear();
    mon = now.getMonth() + 1;
    day = now.getDate();
    hour = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();
    dayOfWeek = now.getDay();
    dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
    //出力用
    s = mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒<br />" + dayOfWeekStr + "曜日";
    return s;
}
function getClass() {
    let nowclass, add;
    // dayOfWeek = 1;
    // hour = 19;
    // min = 00;
    console.log(hour + "時" + min + "分");
    if ((hour >= 18 && min >= 20)) {
        add = dayOfWeek + 1;
        dayOfWeek = add % 7;
    }
    else if ((dayOfWeek == 0) || (dayOfWeek == 6)) {
        nowclass = "今日は休日です";
        document.getElementById("class").innerHTML = nowclass;
    }
    else if ((hour >= 11 && min >= 0) || (hour <= 12 && min < 40)) {
        nowclass = "2限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }
    else if ((hour >= 12 && min >= 40) || (hour <= 15 && min < 0)) {
        nowclass = "3限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }
    else if ((hour >= 15 && min >= 0) || (hour <= 16 && min < 40)) {
        nowclass = "4限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }
    else if ((hour >= 16 && min >= 40) || (hour <= 18 && min < 20)) {
        nowclass = "5限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }
    else {
        nowclass = "1限目の空き教室は";
        document.getElementById("class").innerHTML = nowclass;
    }

}