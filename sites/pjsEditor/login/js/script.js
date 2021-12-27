const d = document;
d.querySelector('body').style.backgroundImage = `url(./media/background/bg${Math.floor(Math.random()*4)}.jpg)`;
d.querySelector("#login").addEventListener("click",login,false);
function login() {
    let id = d.querySelector("input#id").value;
    d.cookie = `id=${id};path=/sites/pjsEditor`;
    location.pathname = "/sites/pjsEditor/edit";
}