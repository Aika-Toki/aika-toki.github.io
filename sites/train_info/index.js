const d = document;
const body = 'body', head = 'head', html = 'html';
let JSONdata, e;
function qs(selector) {
    return d.querySelector(selector);
}
let jsonurl = 'https://script.google.com/macros/s/AKfycbwNR8-_QlFKRbSVowyyP5goqj99qFA5nVS2S54a8BEkW2JOnEy06zRb_KONdcYEFBW6/exec';
$(function () {
    $.getJSON(jsonurl, (data) => {
        JSONdata = data;
        JSONdatahead = JSONdata[0];
        JSONdata = JSONdata[1];
        qs('#updt').innerText = JSONdatahead;
        for(let i = 0; i < JSONdata.length; i++) {
            e = d.createElement('li');
            e.id = `item${i}`;
            e.className = 'item';
            // [categories,title,link,summary,pubdate,pubtime,update,uptime]
            e.innerHTML = 
            `<div id="item${i}-head" class="item-head">
            <h1 id="title">${JSONdata[i][1]}</h1>
            <i class="fal fa-chevron-right"></i>
            </div>
            <br>`;
            
            qs('#list').querySelector('ul').appendChild(e);
            if(qs(`#item${i}-head`).clientWidth-30 < qs(`#item${i}-head`).querySelector('#title').clientWidth) {
                let re = d.createElement('marquee');
                re.id = 'title';
                re.innerText = JSONdata[i][1];
                re.setAttribute("scrollamount", "15");
                let rep = d.querySelector(`#item${i}-head`).querySelector('h1#title');
                d.querySelector(`#item${i}-head`).replaceChild(re, rep);
            }
            e = d.createElement('li');
            e.id = `item${i}-content`;
            e.className = 'item-content';
            e.innerHTML =
`<h6 id="category">${JSONdata[i][0]}</h6>
<h5 id="published">${JSONdata[i][4]} ${JSONdata[i][5]}掲載</h5>
<h5 id="updated">${JSONdata[i][6]} ${JSONdata[i][7]}更新</h5>
<h4 id="description">${JSONdata[i][3]}</h4>
<br>
<a href="${JSONdata[i][2]}" id="link" target="_blank"><p id="btntxt">${JSONdata[i][1]}の情報を見る</p><i class="fas fa-caret-right"></i></a>`;
            qs('#disp').querySelector('ul').appendChild(e);
            if(qs(`#item${i}-content`).querySelector('#link').clientWidth-20 < qs(`#item${i}-content`).querySelector('#btntxt').clientWidth ) {
                qs(`#item${i}-content`).querySelector('a').innerHTML = `<marquee scrollamount="10" id="btntxt">${qs(`#item${i}-content`).querySelector('#btntxt').innerText}</marquee><i class="fas fa-caret-right"></i>`;
            }
            e = d.createElement('script');
            e.innerHTML = 
`${qs('#click-script').innerHTML}
qs('#item${i}').onclick = function() {
    open(${i});
}`;
            e.id = `click-script${i}`;
            qs('body').appendChild(e);
        }
    });
    let bgnum = Math.floor(Math.random() * 8);
    qs('#bg').style.backgroundImage = `url("./img/bg${bgnum}.png")`;
    if(qs('body').clientWidth<qs('body').clientHeight) {
        qs(body).className = 'sp';
    }
});
function open(p) {
    if(qs('.item-content.open') !== null) {
        if(qs(`#item${p}-content`).classList.length === 2) {
            qs(`.item-content.open`).classList.remove("open");
            qs(`.item-head.open`).classList.remove('open');
            qs('#itemtop-content').classList.add("open");
            qs('#itemtop-head').classList.add('open');
            qs('#disp').classList.remove('open');
        } else {
            qs(`.item-content.open`).classList.remove("open");
            qs(`.item-head.open`).classList.remove('open');
            qs(`#item${p}-content`).classList.add("open");
            qs(`#item${p}-head`).classList.add("open");
            qs('#disp').classList.add('open');
        }
    } else {
        qs(`#item${p}-content`).classList.add("open");
        qs(`#item${p}-head`).classList.add('open');
        qs('#disp').classList.add('open');
    }
}

window.onresize = function(){
    location.reload();
}

