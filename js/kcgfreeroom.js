timerID = setInterval(clock, 250);
timerID = setInterval(getClass, 1000);
let year, mon, day, hour, min, sec, dayOfWeek, dayOfWeekStr, free;
function clock() {
    document.getElementById("view_clock").innerHTML = getNow();
}
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
    // デバッグ日時変更
    // dayOfWeek = 2;
    // hour = 10;
    // min = 00;
    //出力用
    let s = mon + "月" + day + "日<br />" + hour + "時" + min + "分" + "<br />" + dayOfWeekStr + "曜日";
    return s;
}
function getClass() {
    let nowclass, add;
    if ((dayOfWeek == 0) || (dayOfWeek == 6)) {
        nowclass = "今日は休日です。<br />月曜1限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        dayOfWeek = 1;
        first()
    }
    else if ((hour == 11 && min >= 0) || (hour == 12 && min < 40)) {
        nowclass = "2限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        second()
    }
    else if ((hour == 12 && min >= 40) || (hour == 13) || (hour == 14)) {
        nowclass = "3限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        third()
    }
    else if ((hour == 15 && min >= 0) || (hour == 16 && min < 40)) {
        nowclass = "4限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        fourth()
    }
    else if ((hour == 16 && min >= 40) || hour <= 17 || (hour == 18 && min < 20)) {
        nowclass = "5限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        fifth()
    }
    else if ((hour == 18 && min >= 20) || (hour <= 19)) {
        add = dayOfWeek + 1;
        dayOfWeek = add % 7;
        tomorrow = day + 1;
        nowclass = tomorrow + "日1限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        first()
    }
    else {
        nowclass = day + "日1限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        first()
    }
}
function first() {
    if (dayOfWeek == 1) {
        free = "E208(電源複数)<br />E302<br />E401(PC?)<br />E502(PC?)<wbr>E508(PC?)<wbr>E510(PC?)<wbr>E512(PC?)";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 2) {
        free = "E208(電源複数)<br />E302<br />E401(PC?)<br />E403(PC?)<br />E501(電源複数,PC)";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 3) {
        free = "E208(電源複数)<br />E302<br />E401(PC?)<br />E406<br />E410<br />E508(PC?)<br />E509(PC?)<br />E510(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 4) {
        free = "E208(電源複数)<br />E302<br />E306(全机電源,PC)<br />E401(PC?)<br />E507(PC?)<br />E508(PC?)<br />E510(PC?)<br />"
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 5) {
        free = "E208(電源複数)<br />E302<br />E304(PC?)<br />E306(全机電源,PC)<br />E401(PC?)<br />E402(PC?)<br />E403(PC?)<br />E501(電源複数)<br />E504(PC?)<br />"
        document.getElementById("free-room").innerHTML = free;
    }
}
function second() {
    if (dayOfWeek == 1) {
        free = "E208(電源複数)<br />E302<br />E401(PC?)<br />E504(PC?)<wbr>E512(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 2) {
        free = "E208(電源複数)<br />E302<br />E401(PC?)<wbr>E403(PC?)<wbr>E409<br />E501(電源複数)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 3) {
        free = "E208(電源複数)<br />E302<br />E401(PC?)<wbr>E406<wbr>E409<wbr>E410<br />E508(PC?)<wbr>E509(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 4) {
        free = "E208(電源複数)<br />E302<wbr>E306(全机電源,PC)<br />E401(PC?)<wbr>E409<wbr>E410<br />E508(PC?)<br />"
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 5) {
        free = "E208(電源複数)<br />E302<wbr>E304(PC?)<wbr>E306(全机電源,PC)<br />E401(PC?)<wbr>E403(PC?)<wbr>E405(PC?)<br />E501(電源複数)<wbr>E503<wbr>E504(PC?)<wbr>E507(PC?)<wbr>E509(PC?)<br />"
        document.getElementById("free-room").innerHTML = free;
    }
}
function third() {
    if (dayOfWeek == 1) {
        free = "E208(電源複数)<br />E302<br />E405(PC?)<wbr>E408<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 2) {
        free = "E208(電源複数)<br />E303(PC?)<br />E401(PC?)<wbr>E407<br />E501(電源複数)<wbr>E511(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 3) {
        free = "E208(電源複数)<br />E302<br />E508(PC?)<wbr>E509(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 4) {
        free = "E204(PC)<wbr>E208(電源複数)<br />E304(PC?)<br />E401(PC?)<wbr>E405(PC?)<wbr>E407<br />E501(電源複数)<wbr>E508(PC?)<br />"
    }
    if (dayOfWeek == 5) {
        free = "E208(電源複数)<br />E304(PC?)<wbr>E306(全机電源,PC)<br />E401(PC?)<wbr>E403(PC?)<wbr>E404<br />E501(電源複数)<wbr>E502(PC?)<wbr>E504(PC?)<br />"
    }
}
function fourth() {
    if (dayOfWeek == 1) {
        free = "E204(PC)<wbr>E208(電源複数)<br />E302<br />E405(PC?)<br />E508(PC?)<wbr>E510(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 2) {
        free = "E208(電源複数)<br />E303(PC?)<wbr>E306(全机電源,PC)<br />E401(PC?)<wbr>E407<br />E501(電源複数)<wbr>E509(PC?)<wbr>E511(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 3) {
        free = "E208(電源複数)<br />E302<br />E408<br />E508(PC?)<wbr>	E509(PC?)<wbr>E510(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 4) {
        free = "E204(PC)<wbr>E208(電源複数)<br />E304(PC?)<br />E401(PC?)<wbr>E405(PC?)<br />E501(電源複数)<wbr>E508(PC?)<br />"
    }
    if (dayOfWeek == 5) {
        free = "E204(PC)<wbr>E208(電源複数)<br />E304(PC?)<br />E401(PC?)<wbr>E405(PC?)<br />E501(電源複数)<wbr>E508(PC?)<br />"
    }
}
function fifth() {
    if (dayOfWeek == 1) {
        free = "E204(PC)<wbr>E208(電源複数)<br />E306(全机電源,PC)<br />E401(PC?)<wbr>E403(PC?)<wbr>E404<wbr>E405(PC?)<wbr>E406<wbr>E408<wbr>	E409<wbr>E410<br />E501(電源複数)<wbr>E503<wbr>E504(PC?)<wbr>E506<wbr>E507(PC?)<wbr>E508(PC?)<wbr>E509(PC?)<wbr>	E510(PC?)<wbr>E511(PC?)<wbr>E512(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 2) {
        free = "E204(PC)<wbr>E208(電源複数)<br />E302<wbr>E304(PC?)<wbr>E306(全机電源,PC)<wbr>E308(PC?)<br />E401(PC?)<wbr>E402(PC?)<wbr>E403(PC?)<wbr>E404<wbr>E405(PC?)<wbr>E406<wbr>E407<wbr>E408<wbr>	E409<wbr>E410<br />E501(電源複数)<wbr>E503<wbr>E504(PC?)<wbr>E506<wbr>E508(PC?)<wbr>E509(PC?)<wbr>E510(PC?)<wbr>E511(PC?)<wbr>E512(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 3) {
        free = "E208(電源複数)<wbr>E302<wbr>E304(PC?)<wbr>E306(全机電源,PC)<wbr>E401(PC?)<wbr>E403(PC?)<wbr>E407<wbr>E408<wbr>	E409<wbr>E410<br />E501(電源複数)<wbr>E504(PC?)<wbr>E506<wbr>E507(PC?)<wbr>E508(PC?)<wbr>E509(PC?)<wbr>E510(PC?)<wbr>E511(PC?)<wbr>E512(PC?)<br />";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 4) {
        free = "E204(PC)<wbr>E208(電源複数)<br />E302<wbr>E304(PC?)<wbr>E306(全机電源,PC)<wbr>E401(PC?)<wbr>E402(PC?)<wbr>E403(PC?)<wbr>E404<wbr>E406<wbr>E407<wbr>E408<wbr>E409<wbr>E410<wbr>E501(電源複数)<wbr>E502(PC?)<wbr>E503<wbr>E504(PC?)<wbr>E506<wbr>E508(PC?)<wbr>E509(PC?)<wbr>E511(PC?)<wbr>E512(PC?)<br />"
    }
    if (dayOfWeek == 5) {
        free = "E204(PC)<wbr>E208(電源複数)<br />E302<wbr>E304(PC?)<wbr>E306(全机電源,PC)<br />E401(PC?)<wbr>E402(PC?)<wbr>E403(PC?)<wbr>E404<wbr>E406<wbr>E407<wbr>E408<wbr>E409<wbr>E410<br />E501(電源複数)<wbr>E502(PC?)<wbr>E503<wbr>E504(PC?)<wbr>E506<wbr>E508(PC?)<wbr>E509(PC?)<wbr>E511(PC?)<wbr>E512(PC?)<br />"
    }
}