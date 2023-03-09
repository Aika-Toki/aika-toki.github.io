const d = document;
let contentid = 0;
let dlid;
function dlidChange() {
    let jsondata;
    d.querySelector('#dlid').value = '生成中';
    d.querySelector('#dlidGenBtn').setAttribute("disabled","");
    $.getJSON("https://script.google.com/macros/s/AKfycbxxL5TTjvGvMQunRNsFY4WJ86zaBvmZBUzaeghZyjDL7O-JYqyimVb6E9niVgRlqkGW/exec?lngth=4&count=4&isUseNumber=1&isUseSmallLetter=1&isUseBigLetter=1",
        (data)=>{
            jsondata = data;
            d.querySelector('#dlid').value = `${jsondata[0]}-${jsondata[1]}-${jsondata[2]}-${jsondata[3]}`;
            dlid = jsondata[0]+jsondata[1]+jsondata[2]+jsondata[3];
        }
    );
}
function dlLinkAdd() {
    let e = d.createElement('tr');
    let ec1 = d.createElement('td');
    ec1.setAttribute("contenteditable","true");
    ec1.setAttribute("id","contenturl");
    ec1.setAttribute("onchanged",`dlLinkisEmpty(${contentid});`);
    let ec2 = d.createElement('td');
    let ec2c = d.createElement('input');
    ec2c.setAttribute('type','button');
    ec2c.setAttribute('value','-');
    ec2c.setAttribute('onclick',`dlLinkRemove(${contentid})`);
    ec2c.setAttribute('id','removebtn');
    ec2.appendChild(ec2c);
    ec2.setAttribute("id","remove");
    e.appendChild(ec1);
    e.appendChild(ec2);
    e.setAttribute("id",`linkContent${contentid}`)
    e.setAttribute("class","linkContent");
    d.querySelector("#dllinkadd").before(e);
    contentid++;
}
function dlLinkRemove(pos) {
    d.querySelector(`tr#linkContent${pos}`).remove();
}
function dlLinkisEmpty(pos) {
    if(d.querySelector(`tr#linkContent${pos}`).querySelector(`td#contenturl`).innerHTML === ''){
        dlLinkRemove(pos);
    }
}
function generateCode() {
    let links = [];
    for(let i = 0;i<d.querySelectorAll('.linkContent').length;i++){
        links.push(encodeURIComponent(d.querySelectorAll('.linkContent')[i].querySelector("#contenturl").innerText));
    }
    let codeContent = d.querySelector('#code').querySelector("code");
    codeContent.innerHTML = `links.id.push(${JSON.stringify(dlid)});`;
    codeContent.innerHTML = codeContent.innerHTML + '<br>';
    codeContent.innerHTML = codeContent.innerHTML + `links.title.push(${JSON.stringify(d.querySelector('#dlname').value)});`;
    codeContent.innerHTML = codeContent.innerHTML + '<br>';
    codeContent.innerHTML = codeContent.innerHTML + `links.link.push(${JSON.stringify(links)});`;
    
    hljs.highlightAll();
}

function submit() {
    let links = [];
    for(let i = 0;i<d.querySelectorAll('.linkContent').length;i++){
        links.push(encodeURIComponent(d.querySelectorAll('.linkContent')[i].querySelector("#contenturl").innerText));
    }
    if(d.querySelector("#dlid").value === ""||d.querySelector('#dlname').value === ''||links.length == 0){
        alert("値が不足しています。")
        return false;
    }
    let jsondata;
    let jsonurlbase = "https://script.google.com/macros/s/AKfycbzAmXJKJgPuso_FDStgsIu0ZXD3yT6TusoO79bpcfipQr31Eosllbdjq6VpZSeAJrYw/exec";
    let jsonurl = `${jsonurlbase}?i=${dlid}&t=${d.querySelector('#dlname').value}&l=${JSON.stringify(links)}&s=1`;
    $.getJSON(jsonurl,
        (data)=>{
            jsondata = data[0];
            if(jsondata==="save-success"){
                alert("登録完了");
            } else if(jsondata==="save-fail"){
                alert("既存のIDです。IDを再生成します。");
                dlidChange();
            }
        }
    );
}