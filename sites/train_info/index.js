const d = document;
let JSONdata, e;
function qs(selector) {
    return d.querySelector(selector);
}
let jsonurl = 'https://script.google.com/macros/s/AKfycbwNR8-_QlFKRbSVowyyP5goqj99qFA5nVS2S54a8BEkW2JOnEy06zRb_KONdcYEFBW6/exec';
$(function () {
    $.getJSON(jsonurl, (data) => {
        JSONdata = data;
        JSONdata = JSONdata[1];
        for(let i = 0; i < JSONdata.length; i++) {
            e = d.createElement('li');
            e.id = `item${i}`;
            e.className = 'item';
            // [categories,title,link,summary,pubdate,pubtime,update,uptime]
            e.innerHTML = 
            `<div id="item${i}-head" class="item-head">
            <h1 id="title">${JSONdata[i][1]}</h1>
            <i class="fas fa-caret-circle-right"></i>
            </div>
            <br>`;
            
            qs('#list').querySelector('ul').appendChild(e);
            if(JSONdata[i][1].length > 27) {
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
<a href="${JSONdata[i][2]}" id="link" target="_blank">${JSONdata[i][1]}の情報を見る<i class="fas fa-caret-right"></i></a>`;
            qs('#disp').querySelector('ul').appendChild(e);
            if(qs(`#item${i}-content`).querySelector('a').innerText.length > 30) {
                qs(`#item${i}-content`).querySelector('a').innerHTML = `<marquee scrollamount="15">${qs(`#item${i}-content`).querySelector('a').innerText}</marquee><i class="fas fa-caret-right"></i>`;
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
});
function open(p) {
    if(qs('.item-content.open') !== null) {
        if(qs(`#item${p}-content`).classList.length === 2) {
            qs(`.item-content.open`).classList.remove("open");
        } else {
            qs(`.item-content.open`).classList.remove("open");
            qs(`#item${p}-content`).classList.add("open");
        }
    } else {
        qs(`#item${p}-content`).classList.add("open");
    }
}