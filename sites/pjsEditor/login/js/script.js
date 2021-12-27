const d = document;
d.querySelector('body').style.backgroundImage = `url(./media/background/bg${Math.floor(Math.random()*4)}.jpg)`;
d.querySelector("#login").addEventListener("click",login,false);
function login() {
    let id = d.querySelector("input#id").value;
    d.cookie = `id=${id};path=/sites/pjsEditor`;
    location.pathname = "/sites/pjsEditor/edit";
}
let cookies = document.cookie.split("; ");
let cookieItem, cookieArray = [];
for (let i = 0; i < cookies.length; i++) {
    cookieItem = cookies[i].split("=");
    cookieArray[cookieItem[0]] = cookieItem[1];
}
if(cookieArray.id != undefined && cookieArray.id != ""){
    location.pathname = "/sites/pjsEditor/edit/"
}