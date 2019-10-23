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
    // dayOfWeek = 1;
    // hour = 10;
    // min = 00;
    //出力用
    let s = mon + "月" + day + "日 <wbr>" + hour + "時" + min + "分" + "<wbr>" + dayOfWeekStr + "曜日";
    return s;
}
// 調査済み教室
// E204(電源複数,PC),E208
// E304(電源複数,PC)
// E401(電源少,PC),E406(電源4箇所),E410(電源5箇所)
// E501(電源複数,WS),E502,E504(電源少,WS),E506(全席電源),E507(全席電源),E509
// K201(電源1箇所),K202(電源なし,PC),K203(電源なし,iMac Pro)
// 電源状況未確認部屋↓
// E404,E408,E409
// E502

function getClass() {
    let nowclass, add;
    if ((dayOfWeek == 5) && ((hour == 18 && min >= 20) || (hour >= 19))) {
        dayOfWeek = 1;
        tomorrow = day + 3;
        nowclass = tomorrow + "日1限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        first()
    }
    else if ((dayOfWeek == 0) || (dayOfWeek == 6)) {
        nowclass = "今日は休日です。2限目の空き教室は、月曜1限目の空き教室は、";
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
    else if ((hour == 16 && min >= 40) || hour == 17 || (hour == 18 && min < 20)) {
        nowclass = "5限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        fifth()
    }
    else if ((hour == 18 && min >= 20) || (hour >= 19)) {
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
        free = "E208(電源複数)<br />E302<br />E401(電源少,PC)<br />E502(PC),<wbr>E508(PC?),<wbr>E510(PC?),<wbr>E512(PC?)<hr>RC,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RM<hr>K10a,<wbr>K10b<br />K201(電源1箇所),<wbr>K203(電源なし,iMac Pro),<wbr>K204<br />K300<br />K403";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 2) {
        free = "E208(電源複数)<br />E302<br />E401(電源少,PC)<br />E403(電源なし,PC)<br />E501(電源複数,WS)<hr>RA,<wbr>RD,<wbr>RG,<wbr>RK<hr>K201(電源1箇所),<wbr>K204<br />K300<br />K403";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 3) {
        free = "E208(電源複数)<br />E302<br />E401(電源少,PC)<br />E406(電源4箇所)<br />E410(電源5箇所)<br />E508(PC?),<wbr>E509(全席電源),<wbr>E510(PC?)<hr>RA,<wbr>RC,<wbr>RE,<wbr>RF,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K10b<br />K201(電源1箇所),<wbr>K202(電源なし,PC)";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 4) {
        free = "E208(電源複数)<br />E302,<wbr>E306(全席電源,PC)<br />E401(電源少,PC)<br />E507(全席電源)(PC?),<wbr>E508(PC?),<wbr>E510(PC?)<hr>RA,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K201(電源1箇所),<wbr>K204<br />K300<br />K403"
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 5) {
        free = "E208(電源複数)<br />E302,<wbr>E304(電源複数,PC),<wbr>E306(全席電源,PC)<br />E401(電源少,PC),<wbr>E402(電源複数,PC),<wbr>E403(電源なし,PC)<br />E501(電源複数),<wbr>E504(電源少,WS)<hr>RA,<wbr>RB,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K002,<wbr>K10a,<wbr>K10b<br />K201(電源1箇所),<wbr>K204< br>K300<br />K402,<wbr>K403"
        document.getElementById("free-room").innerHTML = free;
    }
}
function second() {
    if (dayOfWeek == 1) {
        free = "E208(電源複数)<br />E302<br />E401(電源少,PC)<br />E504(電源少,WS),<wbr>E512(PC?)<hr>RC,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RM<hr>K10a,<wbr>K10b<br />K203(電源なし,iMac Pro),<wbr>K204<br />K300<br />K403";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 2) {
        free = "E208(電源複数)<br />E302<br />E401(電源少,PC),<wbr>E403(電源なし,PC),<wbr>E409<br />E501(電源複数)<hr>RA,<wbr>RD,<wbr>RK<hr>K201(電源1箇所),<wbr>K204<br />K300<br />K403";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 3) {
        free = "E208(電源複数)<br />E302<br />E401(電源少,PC),<wbr>E406(電源4箇所),<wbr>E409,<wbr>E410(電源5箇所)<br />E508(PC?),<wbr>E509(全席電源)<hr>RA,<wbr>RC,<wbr>RE,<wbr>RF,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K10b<br />K201(電源1箇所),<wbr>K202(電源なし,PC),<wbr>K203(電源なし,iMac Pro)";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 4) {
        free = "E208(電源複数)<br />E302,<wbr>E306(全席電源,PC)<br />E401(電源少,PC),<wbr>E409,<wbr>E410(電源5箇所)<br />E508(PC?)<hr>RA,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K201(電源1箇所),<wbr>K203(電源なし,iMac Pro),<wbr>K204<br />K300<br />K403"
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 5) {
        free = "E208(電源複数)<br />E302,<wbr>E304(電源複数,PC),<wbr>E306(全席電源,PC)<br />E401(電源少,PC),<wbr>E403(電源なし,PC),<wbr>E405(PC?)<br />E501(電源複数),<wbr>E503,<wbr>E504(電源少,WS),<wbr>E507(全席電源)(PC?),<wbr>E509(全席電源)<hr>RA,<wbr>RB,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K002,<wbr>K10a,<wbr>K10b<br />K201(電源1箇所),<wbr>K204<br />K300<br />K402,<wbr>K403"
        document.getElementById("free-room").innerHTML = free;
    }
}
function third() {
    if (dayOfWeek == 1) {
        free = "E208(電源複数)<br />E302<br />E405(PC?),<wbr>E408<hr>RB,<wbr>RC,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RM<hr>K10a<br />K201(電源1箇所),<wbr>K202(電源なし,PC),<wbr>K204<br />K300<br />K403";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 2) {
        free = "E208(電源複数)<br />E303(PC?)<br />E401(電源少,PC),<wbr>E407<br />E501(電源複数),<wbr>E511(PC?)<hr>RG,<wbr>RI,<wbr>RK<hr>K002<br />K201(電源1箇所),<wbr>K202(電源なし,PC),<wbr>K204";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 3) {
        free = "E208(電源複数)<br />E302<br />E508(PC?),<wbr>E509(全席電源)<hr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K10b<br />K201(電源1箇所),<wbr>K203(電源なし,iMac Pro),<wbr>K204<br />K300";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 4) {
        free = "E204(PC),<wbr>E208(電源複数)<br />E304(電源複数,PC)<br />E401(電源少,PC),<wbr>E405(PC?),<wbr>E407<br />E501(電源複数),<wbr>E508(PC?)<hr>RA,<wbr>RC,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K201(電源1箇所),<wbr>K202(電源なし,PC),<wbr>K203(電源なし,iMac Pro)<br />K300<br />K403"
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 5) {
        free = "E208(電源複数)<br />E304(電源複数,PC),<wbr>E306(全席電源,PC)<br />E401(電源少,PC),<wbr>E403(電源なし,PC),<wbr>E404<br />E501(電源複数),<wbr>E502(PC),<wbr>E504(電源少,WS)<hr>RA,<wbr>RB,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K002,<wbr>K10a<br />K201(電源1箇所),<wbr>K204<br />K300<br />K402,<wbr>K403"
        document.getElementById("free-room").innerHTML = free;
    }
}
function fourth() {
    if (dayOfWeek == 1) {
        free = "E204(PC),<wbr>E208(電源複数)<br />E302<br />E405(PC?)<br />E508(PC?),<wbr>E510(PC?)<hr>RB,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RM<hr>K10a<br />K201(電源1箇所),<wbr>K202(電源なし,PC)<br />K204<br />K300<br />K403";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 2) {
        free = "E208(電源複数)<br />E303(PC?),<wbr>E306(全席電源,PC)<br />E401(電源少,PC),<wbr>E407<br />E501(電源複数),<wbr>E509(全席電源),<wbr>E511(PC?)<hr>RD,<wbr>RG,<wbr>RI,<wbr>RK<hr>K002<br />K201(電源1箇所),<wbr>K202(電源なし,PC),<wbr>K204";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 3) {
        free = "E208(電源複数)<br />E302<br />E408<br />E508(PC?),<wbr>	E509(全席電源),<wbr>E510(PC?)<hr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RJ,<wbr>RM<hr>K10b<br />K201(電源1箇所),<wbr>K203(電源なし,iMac Pro),<wbr>K204<br />K300";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 4) {
        free = "E204(PC),<wbr>E208(電源複数)<br />E304(電源複数,PC)<br />E401(電源少,PC),<wbr>E405(PC?)<br />E501(電源複数),<wbr>E508(PC?)<hr>RA,<wbr>RC,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K10b<br />K201(電源1箇所),<wbr>K202(電源なし,PC),<wbr>K203(電源なし,iMac Pro)<br />K300<br />K403"
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 5) {
        free = "E208(電源複数)<br />E304(電源複数,PC)<br />E401(電源少,PC),<wbr>E405(PC?)<br />E501(電源複数),<wbr>E508(PC?)<hr>RA,<wbr>RB,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K002,<wbr>K10a<br />K201(電源1箇所),<wbr>K204<br />K300<br />K402,<wbr>K403"
        document.getElementById("free-room").innerHTML = free;
    }
}
function fifth() {
    if (dayOfWeek == 1) {
        free = "E208(電源複数)<br />E302,<wbr>E306(全席電源,PC)<br />E401(電源少,PC),<wbr>E403(電源なし,PC),<wbr>E404,<wbr>E405(PC?),<wbr>E406(電源4箇所),<wbr>E408,<wbr>	E409,<wbr>E410(電源5箇所)<br />E501(電源複数),<wbr>E503,<wbr>E504(電源少,WS),<wbr>E506(全席電源),<wbr>E507(全席電源)(PC?),<wbr>E508(PC?),<wbr>E509(全席電源),<wbr>E510(PC?),<wbr>E511(PC?),<wbr>E512(PC?)<hr>RA,<wbr>RB,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K002,<wbr>K10a,<wbr>K10b<br />K201(電源1箇所),<wbr>K202(電源なし,PC),<wbr>K203(電源なし,iMac Pro),<wbr>K204<br />K300<br />K402,<wbr>K403";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 2) {
        free = "E204(PC),<wbr>E208(電源複数)<br />E302,<wbr>E304(電源複数,PC),<wbr>E306(全席電源,PC),<wbr>E308(PC?)<br />E401(電源少,PC),<wbr>E402(電源複数,PC),<wbr>E403(電源なし,PC),<wbr>E404,<wbr>E405(PC?),<wbr>E406(電源4箇所),<wbr>E407,<wbr>E408,<wbr>	E409,<wbr>E410(電源5箇所)<br />E501(電源複数),<wbr>E503,<wbr>E504(電源少,WS),<wbr>E506(全席電源),<wbr>E508(PC?),<wbr>E509(全席電源),<wbr>E510(PC?),<wbr>E511(PC?),<wbr>E512(PC?)<hr>RA,<wbr>RB,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K002,<wbr>K10a,<wbr>K10b<br />K202(電源なし,PC),<wbr>K203(電源なし,iMac Pro),<wbr>K204<br />K300<br />K402,<wbr>K403";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 3) {
        free = "E208(電源複数)<br />E302,<wbr>E306(全席電源,PC)<br />E401(電源少,PC),<wbr>E403(電源なし,PC),<wbr>E405(PC?),<wbr>E407,<wbr>E408,<wbr>E409,<wbr>E410(電源5箇所)<br />E501(電源複数),<wbr>E504(電源少,WS),<wbr>E506(全席電源),<wbr>E507(全席電源)(PC?),<wbr>E508(PC?),<wbr>E509(全席電源),<wbr>E510(PC?),<wbr>E511(PC?),<wbr>E512(PC?)<hr>RB,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K002,<wbr>K10a,<wbr>K10b<br />K201(電源1箇所),<wbr>K202(電源なし,PC),<wbr>K203(電源なし,iMac Pro),<wbr>K204<br />K300<br />K402,<wbr>K403";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 4) {
        free = "E204(PC),<wbr>E208(電源複数)<br />E302,<wbr>E304(電源複数,PC),<wbr>E306(全席電源,PC)<br />E401(電源少,PC),<wbr>E402(電源複数,PC),<wbr>E403(電源なし,PC),<wbr>E404,<wbr>E406(電源4箇所),<wbr>E407,<wbr>E408,<wbr>E409,<wbr>E410(電源5箇所)<br />E501(電源複数),<wbr>E502(PC),<wbr>E503,<wbr>E504(電源少,WS),<wbr>E506(全席電源),<wbr>E508(PC?),<wbr>E509(全席電源),<wbr>E511(PC?),<wbr>E512(PC?)<hr>RB,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K002,<wbr>K10a,<wbr>K10b<br />K201(電源1箇所),<wbr>K202(電源なし,PC),<wbr>K203(電源なし,iMac Pro),<wbr>K204<br />K300<br />K402,<wbr>K403";
        document.getElementById("free-room").innerHTML = free;
    }
    if (dayOfWeek == 5) {
        free = "E204(PC),<wbr>E208(電源複数)<br />E302,<wbr>E303(PC?)E304(電源複数,PC),<wbr>E306(全席電源,PC)<br />E401(電源少,PC),<wbr>E403(電源なし,PC),<wbr>E404,<wbr>E406(電源4箇所),<wbr>E405(PC?),<wbr>E406(電源4箇所),<wbr>E408,<wbr>E409,<wbr>E410(電源5箇所)<br />E501(電源複数),<wbr>E502(PC),<wbr>E503,<wbr>E504(電源少,WS),<wbr>E506(全席電源),<wbr>E507(全席電源)(PC?),<wbr>508(PC?),<wbr>E509(全席電源)E510(PC?),<wbr>E511(PC?),<wbr>E512(PC?)<hr>RA,<wbr>RB,<wbr>RC,<wbr>RD,<wbr>RE,<wbr>RF,<wbr>RG,<wbr>RI,<wbr>RJ,<wbr>RK,<wbr>RM<hr>K002,<wbr>K10a,<wbr>K10b<br />K201(電源1箇所),<wbr>K202(電源なし,PC),<wbr>K203(電源なし,iMac Pro),<wbr>K204<br />K300<br />K402,<wbr>K403";
        document.getElementById("free-room").innerHTML = free;
    }
}