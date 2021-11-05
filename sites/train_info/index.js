const d = document;
function qs(selector) {
    return d.querySelector(selector);
}
$(function () {
    $.getJSON("http://api.tetsudo.com/traffic/atom.xml", (data) => {
        let e = d.createElement('li');
        e.id = `item${''}`
        e.innerText = data;
        qs('#list').qs('ul').appendChild(e);
    });
});
