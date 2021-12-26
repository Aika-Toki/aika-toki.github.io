let urlParam, param, paramArray, paramItem, year, month, date, id;
let randcolor = `hsl(${Math.floor(Math.random()*360)},70%,40%)`
document.querySelector("html").style.setProperty('--accent-color', randcolor);
if (location.search !== '') {
    urlParam = location.search.substring(1);
    param = urlParam.split('&');
    paramArray = [];
    for (let i = 0; i < param.length; i++) {
        paramItem = param[i].split('=');
        paramArray[paramItem[0]] = paramItem[1];
    }
    let dates = paramArray.at.split("-");
    year = dates[0],
        month = dates[1],
        date = dates[2];
    let cookies = document.cookie.split("; ");
    let cookieItem, cookieArray = [];
    for (let i = 0; i < cookies.length; i++) {
        cookieItem = cookies[i].split("=");
        cookieArray[cookieItem[0]] = cookieItem[1];
    }
    id = cookieArray.id;
    if (id == "" || id == undefined) {
        location.href = location.pathname;
    }
    let jsonUrlBase = "https://script.google.com/a/macros/nnn.ed.jp/s/AKfycbw6FSP1vn8KXKBl7Nt8wDuKPLzT_5kteFa-Z04FN6XpgnWE62aG9Eo_KnDlM4SSg-7DaQ/exec";
    let jsonUrl = `${jsonUrlBase}?y=${year}&m=${month}&d=${date}&i=${id}`;
    const d = document;
    let wd = "日月火水木金土";
    let datedata = new Date(year, month - 1, date);
    d.querySelector("#currentDate").innerText = `${year}年${month}月${date}日(${wd.charAt(datedata.getDay())})`;
    d.querySelector("#id").innerText = id;
    $.getJSON(jsonUrl, (data) => {
        let jsondata = data;
        d.querySelector("#targetArea").value = jsondata[0];
        d.querySelector("#freeArea").value = jsondata[1];
        d.querySelector("#reviewArea").value = jsondata[2];
        d.querySelector("#tempArea").value = jsondata[3];
        if(jsondata[4]=="◯"){
            d.querySelector("#attendanceArea").setAttribute("checked","");
        }

        d.querySelector("#loadingCover").classList.add("hidden");
        setTimeout(()=>{
            d.querySelector("#loadingCover").style.overflow = "hidden";
            d.querySelector("#loadingCover").style.zIndex = "-1";
        },400)
    });
} else {
    let cookies = document.cookie.split("; ");
    let cookieItem, cookieArray = [];
    for (let i = 0; i < cookies.length; i++) {
        cookieItem = cookies[i].split("=");
        cookieArray[cookieItem[0]] = cookieItem[1];
    }
    let cookid = cookieArray.id;
    if (cookid == "" || cookid == undefined) {
        id = window.prompt("IDを入力", "");
        if (id == "" || id == null) {
            location.reload();
        } else {
            document.cookie = `id=${id}`;
            let date = new Date();
            if(date.getDay()==6){
                location.search = `at=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()-1}`;
            } else if(date.getDay()==0){
                location.search = `at=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}`;
            } else {
                location.search = `at=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
            }
        }
    } else {
        let date = new Date();
        if(date.getDay()==6){
            location.search = `at=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()-1}`;
        } else if(date.getDay()==0){
            location.search = `at=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}`;
        } else {
            location.search = `at=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        }    }
}
document.querySelector("#logout").addEventListener("click", logout, false);
document.querySelector("#previousDate").addEventListener("click", previousd, false);
document.querySelector("#nextDate").addEventListener("click", nextd, false);
document.querySelector("#submitbtn").addEventListener("click", submit, false);

function logout() {
    document.cookie = "id=";
    location.href = location.pathname;
}

function previousd() {
    let dates = location.search.slice(4).split("-");
    let datedate = new Date(dates[0], Number(dates[1]) - 1, Number(dates[2]) - 1);
    if (datedate.getDay() == 0) {
        datedate = new Date(dates[0], Number(dates[1]) - 1, Number(dates[2]) - 3);
    }
    dates = [datedate.getFullYear(), datedate.getMonth() + 1, datedate.getDate()];
    location.search = `at=${dates.join("-")}`;
}

function nextd() {
    let dates = location.search.slice(4).split("-");
    let datedate = new Date(dates[0], Number(dates[1]) - 1, Number(dates[2]) + 1);
    if (datedate.getDay() == 6) {
        datedate = new Date(dates[0], Number(dates[1]) - 1, Number(dates[2]) + 3);
    }
    dates = [datedate.getFullYear(), datedate.getMonth() + 1, datedate.getDate()];
    location.search = `at=${dates.join("-")}`;
}

function submit() {
    let d = document;
    d.querySelector("#loadingCover").style.overflow = "hidden";
    d.querySelector("#loadingCover").style.zIndex = "-1";
    d.querySelector("#loadingCover").classList.remove("hidden");
    let tar = d.querySelector("#targetArea").value,
    free = d.querySelector("#freeArea").value,
    review = d.querySelector("#reviewArea").value,
    temperature = d.querySelector("#tempArea").value,
    att = d.querySelector("#attendanceArea").hasAttribute("checked");
    if(att == true){
        att = "◯";
    } else {
        att = "";
    }
    let jsonUrlBase = "https://script.google.com/a/macros/nnn.ed.jp/s/AKfycbw6FSP1vn8KXKBl7Nt8wDuKPLzT_5kteFa-Z04FN6XpgnWE62aG9Eo_KnDlM4SSg-7DaQ/exec";
    let jsonUrl = `${jsonUrlBase}?y=${year}&m=${month}&d=${date}&i=${id}&w=1&ta=${tar}&f=${free}&r=${review}&te=${temperature}&a=${att}`;
    $.getJSON(jsonUrl, (data)=>{
        location.reload();
    }
    );
}