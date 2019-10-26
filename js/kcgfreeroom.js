timerID = setInterval(clock, 250);
timerID = setInterval(getClass, 1000);
let year, mon, day, hour, min, sec, dayOfWeek, dayOfWeekStr;
let free = "";
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
// E501(電源複数,WS),E502,E504(電源少,WS),E506(全席電源),E507(全席電源),E508(ほぼ全席電源),E509
// K201(電源1箇所),K202(電源なし,PC),K203(電源なし,iMac Pro)
// 電源状況未確認部屋↓
// E404,E408,E409
// E502

function getClass() {
    let nowclass, add, period;
    if ((dayOfWeek == 5) && ((hour == 18 && min >= 20) || (hour >= 19))) {
        tomorrow = day + 3;
        nowclass = tomorrow + "日1限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        dayOfWeek = 1;
        period = 1;
        search(dayOfWeek, period)
    }
    else if ((dayOfWeek == 0) || (dayOfWeek == 6)) {
        nowclass = "今日は休日です。月曜1限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        dayOfWeek = 1;
        period = 1
        search(dayOfWeek, period)
    }
    else if ((hour == 11 && min >= 0) || (hour == 12 && min < 40)) {
        nowclass = "2限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        period = 2;
        search(dayOfWeek, period)
    }
    else if ((hour == 12 && min >= 40) || (hour == 13) || (hour == 14)) {
        nowclass = "3限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        period = 3
        search(dayOfWeek, period)
    }
    else if ((hour == 15 && min >= 0) || (hour == 16 && min < 40)) {
        nowclass = "4限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        period = 4;
        search(dayOfWeek, period)
    }
    else if ((hour == 16 && min >= 40) || hour == 17 || (hour == 18 && min < 20)) {
        nowclass = "5限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        period = 5;
        search(dayOfWeek, period)
    }
    else if ((hour == 18 && min >= 20) || (hour >= 19)) {
        add = dayOfWeek + 1;
        dayOfWeek = add % 7;
        tomorrow = day + 1;
        nowclass = tomorrow + "日1限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        period = 1;
        search(dayOfWeek, period)
    }
    else {
        nowclass = day + "日1限目の空き教室は、";
        document.getElementById("class").innerHTML = nowclass;
        period = 1;
        search(dayOfWeek, period)
    }
}
var requestURL = '../json/room.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
function search(dayOfWeek, period) {
    free = ""
    period = period - 1
    dayOfWeek = dayOfWeek - 1
    var result = request.response;
    var nor = Object.keys(result).length
    for (let i = 0; i < nor; i++) {
        const k = result[i].use; // use 取り出し
        let l = k.match(/.{2}/g); // 2桁区切り
        let m = l[dayOfWeek]
        foo = parseInt(m, 16).toString(2); //16進数=>2進数
        foo = ('00000000' + foo).slice(-8);
        if (foo[period] == 0) {
            free += result[i].name
        }
    }
    document.getElementById("free-room").innerHTML = free
}