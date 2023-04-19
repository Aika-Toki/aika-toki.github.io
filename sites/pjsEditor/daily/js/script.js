let urlParam, param, paramArray, paramItem, year, month, date, id;
const d = document;
//*debug*//
// d.cookie = `id=1OiRDYPWloHROvSB2xVKcYg9bdsLCMSunpvH4qgVVclc`;
//*DEBUG//
const JSONURLBASED = "https://script.google.com/a/macros/nnn.ed.jp/s/AKfycby4ax8jU2dtozrw5Oe8b79lQ_tI7yCnDQoaKuWchxjIEMZST7bcOz9vr_DSY4GJJ0A8/exec";
let randcolor = `hsl(${Math.floor(Math.random()*360)},70%,40%)`
d.querySelector("html").style.setProperty('--accent-color', randcolor);
let cookies = d.cookie.split("; ");
    let cookieItem, cookieArray = [];
    for (let i = 0; i < cookies.length; i++) {
        cookieItem = cookies[i].split("=");
        cookieArray[cookieItem[0]] = cookieItem[1];
    }
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
    id = cookieArray.id;
    if (id == "" || id == undefined) {
        location.href = location.pathname;
    }
    let jsonUrlBase = JSONURLBASED;
    let jsonUrl = `${jsonUrlBase}?y=${year}&m=${month}&d=${date}&i=${id}&w=0`;
    let wd = "日月火水木金土";
    let datedata = new Date(year, month - 1, date);
    d.querySelector("#currentDate>label").innerText = `${year}年${month}月${date}日(${wd.charAt(datedata.getDay())})`;
    d.querySelector('#currentInput').value = `${year}/${month}/${date}`;
    $.getJSON(jsonUrl, (data) => {
        let jsondata = data;
        console.log(JSON.stringify(jsondata));
        d.querySelector("#targetArea").innerText = jsondata[0];
        d.querySelector("#reviewArea").innerText = jsondata[2];
        if(jsondata[1] != ""){
            d.querySelector("#feelingArea").querySelector(`option[value=${jsondata[1]}]`).setAttribute('selected','');
        }
        d.querySelector("#tempArea").value = jsondata[3];
        d.querySelector("#id").innerText = jsondata[4];
        tempfix();

        d.querySelector("#loadingCover").classList.add("hidden");
        setTimeout(()=>{
            d.querySelector("#loadingCover").style.overflow = "hidden";
            d.querySelector("#loadingCover").style.zIndex = "-1";
        },400)
    });
} else {
    let cookid = cookieArray.id;
    if (cookid == "" || cookid == undefined) {
        location.pathname = "/sites/pjsEditor/login";
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
d.querySelector("#logout").addEventListener("click", logout, false);
d.querySelector("#previousDate").addEventListener("click", previousd, false);
d.querySelector("#nextDate").addEventListener("click", nextd, false);
d.querySelector("#editbtn").addEventListener("click", edit, false);
d.querySelector('#tempArea').addEventListener("change", tempfix, false);
// d.querySelector('#tempArea').addEventListener("change", savepls, false);
// d.querySelector('#targetArea').addEventListener("change",savepls);
// d.querySelector('#reviewArea').addEventListener("change",savepls);
// d.querySelector('#feelingArea').addEventListener("change",savepls);
d.querySelector("#currentInput").addEventListener("change", datechanged);
d.querySelector("#weekbtn").addEventListener("click",()=>{
    location.href = `./weekly/${location.search}`;
});

function datechanged(){
    let date = d.querySelector("#currentInput").value.split('-');
    for(let i = 0; i < date.length; i++){
        date[i] = Number(date[i]);
    }
    location.search = `?at=${date.join('-')}`;
}

function savepls() {
    d.querySelector('#savenotice').className = "visible";
}

function tempfix() {
    d.querySelector("#tempArea").value = Number(d.querySelector("#tempArea").value).toFixed(1);
}

function logout() {
    d.cookie = "id=;path=/sites/pjsEditor";
    location.pathname = "/sites/pjsEditor/login";
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

function edit() {
    let href = "./edit/"+location.search;
    location.href = href;
}