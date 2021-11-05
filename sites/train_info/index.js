const d = document;
let JSONdata, e;
function qs(selector) {
    return d.querySelector(selector);
}
$(function () {
    $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=http://api.tetsudo.com/traffic/rss20.xml", (data) => {
        JSONdata = data;
        JSONdata = JSONdata.items;
        for(let i = 0; i < JSONdata.length; i++) {
            e = d.createElement('li');
            e.id = `item${i}`;
            e.innerHTML = 
`<div id="item${i}-head" class="item-head">
    <h1 id="title">${JSONdata[i].title}</h1>
    <i class="fas fa-caret-circle-right"></i>
</div>
<br>
<div id="item${i}-content" class="item-content">
    <h6 id="category">${JSONdata[i].categories}</h6>
    <h4 id="description">${JSONdata[i].description}</h4>
    <a href="${JSONdata[i].link}" id="link">${JSONdata[i].title}の情報を見る<i class="fas fa-caret-right"></i></a>
    <iframe src="https://www.colordic.org/analyze?d=g&q=${JSONdata[i].title}" id="color"></iframe>
</div>`;
            qs('#list').querySelector('ul').appendChild(e);
            qs('#link').style.backgroundColor = qs(`#item${i}-content`).querySelector("#color").contentWindow.document.querySelector('.col-sm-6.form-group').querySelectorAll('p')[6].querySelector('span').style.color;
        }
    });
});