function bookmark() {
    var el = document.createElement("script");
    el.src = "https://html2canvas.hertzen.com/dist/html2canvas.js";
    document.body.appendChild(el);
    var el = document.createElement("div");
    el.id = "results";
    el.width = "100%";
    el.height = "min-content";
    document.body.appendChild(el);
    var el = document.createElement("img");
    el.id = "resultMain";
    document.querySelector('#results').appendChild(el);
    var el = document.createElement("img");
    el.id = "resultReport";
    document.querySelector('#results').appendChild(el);
    var el = document.createElement("a");
    el.id = "imgDownload";
    el.innerText = "結果を画像で保存する";
    document.querySelector('.mainBlock').insertAdjacentElement('afterend', el);
    var el = document.createElement("script");
    el.src = "https://aika-toki.github.io/sites/sakura_capture/js/script.js";
    document.body.appendChild(el);
    imageOutput();
}