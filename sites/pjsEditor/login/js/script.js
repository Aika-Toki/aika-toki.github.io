const d = document;
d.querySelector('body').style.backgroundImage = `url(./media/background/bg${Math.floor(Math.random()*4)}.jpg)`;
d.querySelector("#login").addEventListener("click",login,false);
function login() {
    let id = d.querySelector("input#id").value;
    d.querySelector('input#pw').value = btoa(id);
    d.cookie = `id=${id};path=/sites/pjsEditor`;
    location.search = "";
    // location.pathname = "/sites/pjsEditor/edit";
}
let cookies = document.cookie.split("; ");
let cookieItem, cookieArray = [];
for (let i = 0; i < cookies.length; i++) {
    cookieItem = cookies[i].split("=");
    cookieArray[cookieItem[0]] = cookieItem[1];
}
if(cookieArray.id != undefined && cookieArray.id != ""){
    location.pathname = "/sites/pjsEditor/daily/"
}
let userAgent = [window.navigator.userAgent.toLowerCase(),window.navigator.platform.toLowerCase()];
if(userAgent[0].indexOf('msie') != -1 || userAgent[0].indexOf('trident') != -1) {
    document.querySelector('#plslatest').style.display = "flex";
}
if(userAgent[1].indexOf('windows') != -1 || userAgent[1].indexOf('linux') != -1) {
    d.querySelector('#safari').classList.add("win");
    d.querySelector('#safari').querySelector('h3').innerText = "サポートされていません！";
} else {
    d.querySelector('#safari').addEventListener("click",redsafari,false);
}
d.querySelector('#edge').addEventListener("click",rededge,false);
d.querySelector('#chrome').addEventListener("click",redchrome,false);
d.querySelector('#firefox').addEventListener("click",redfirefox,false);
d.querySelector('#opera').addEventListener("click",redopera,false);
d.querySelector('#vivaldi').addEventListener("click",redvivaldi,false);

function rededge() {
    window.open("https://www.microsoft.com/ja-jp/edge");
}

function redchrome() {
    window.open("https://www.google.com/intl/ja_jp/chrome/");
}

function redsafari() {
    d.querySelector('#safari').querySelector('h3').innerText = "LaunchPadから開いてください！";
}

function redfirefox() {
    window.open('https://www.mozilla.org/ja/firefox/new/');
}

function redopera() {
    window.open('https://www.opera.com/ja/browsers/opera');
}

function redvivaldi() {
    window.open('https://vivaldi.com/ja/');
}