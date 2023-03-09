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
    let today = new Date(year,month-1,date);
    let monday = new Date(today.getFullYear(),today.getMonth(),(today.getDate()-(today.getDay()-1)));
    let tuesday = new Date(monday.getFullYear(),monday.getMonth(),monday.getDate()+1);
    let wednesday = new Date(monday.getFullYear(),monday.getMonth(),monday.getDate()+2);
    let thursday = new Date(monday.getFullYear(),monday.getMonth(),monday.getDate()+3);
    let friday = new Date(monday.getFullYear(),monday.getMonth(),monday.getDate()+4);
    let jsonUrl = `${JSONURLBASED}?y=${monday.getFullYear()}&m=${monday.getMonth()+1}&d=${monday.getDate()}&i=${id}&w=2`;
    $.getJSON(jsonUrl, (data)=>{
        let jsondata = data;
        console.log(JSON.stringify(jsondata));
        d.querySelector('#w_comment>code').innerText = jsondata[0];
        d.querySelector('#w_mon>button').innerText = `${monday.getFullYear()}年${monday.getMonth()+1}月${monday.getDate()}日(月)`;
        d.querySelector('#w_tue>button').innerText = `${tuesday.getFullYear()}年${tuesday.getMonth()+1}月${tuesday.getDate()}日(火)`;
        d.querySelector('#w_wed>button').innerText = `${wednesday.getFullYear()}年${wednesday.getMonth()+1}月${wednesday.getDate()}日(水)`;
        d.querySelector('#w_thu>button').innerText = `${thursday.getFullYear()}年${thursday.getMonth()+1}月${thursday.getDate()}日(木)`;
        d.querySelector('#w_fri>button').innerText = `${friday.getFullYear()}年${friday.getMonth()+1}月${friday.getDate()}日(金)`;
        d.querySelector('#w_mon>button').addEventListener('click',()=>{location.href = `../?at=${monday.getFullYear()}-${monday.getMonth()+1}-${monday.getDate()}`});
        d.querySelector('#w_tue>button').addEventListener('click',()=>{location.href = `../?at=${tuesday.getFullYear()}-${tuesday.getMonth()+1}-${tuesday.getDate()}`});
        d.querySelector('#w_wed>button').addEventListener('click',()=>{location.href = `../?at=${wednesday.getFullYear()}-${wednesday.getMonth()+1}-${wednesday.getDate()}`});
        d.querySelector('#w_thu>button').addEventListener('click',()=>{location.href = `../?at=${thursday.getFullYear()}-${thursday.getMonth()+1}-${thursday.getDate()}`});
        d.querySelector('#w_fri>button').addEventListener('click',()=>{location.href = `../?at=${friday.getFullYear()}-${friday.getMonth()+1}-${friday.getDate()}`});
        d.querySelector('#currentDate>label').innerText = `${monday.getFullYear()}年${monday.getMonth()+1}月${monday.getDate()}日(月) 〜 ${friday.getFullYear()}年${friday.getMonth()+1}月${friday.getDate()}日(金)`;
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
// d.querySelector("#editbtn").addEventListener("click", edit, false);
// d.querySelector('#tempArea').addEventListener("change", tempfix, false);
// d.querySelector('#tempArea').addEventListener("change", savepls, false);
// d.querySelector('#targetArea').addEventListener("change",savepls);
// d.querySelector('#reviewArea').addEventListener("change",savepls);
// d.querySelector('#feelingArea').addEventListener("change",savepls);
d.querySelector("#currentInput").addEventListener("change", datechanged);

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
    let datedate = new Date(dates[0], Number(dates[1]) - 1, Number(dates[2]) - 7);
    if (datedate.getDay() == 0) {
        datedate = new Date(dates[0], Number(dates[1]) - 1, Number(dates[2]) - 3);
    }
    dates = [datedate.getFullYear(), datedate.getMonth() + 1, datedate.getDate()];
    location.search = `at=${dates.join("-")}`;
}

function nextd() {
    let dates = location.search.slice(4).split("-");
    let datedate = new Date(dates[0], Number(dates[1]) - 1, Number(dates[2]) + 7);
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