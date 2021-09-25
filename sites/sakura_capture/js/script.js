let doc = document,curl,ciframe,cid,cconf,cmainb,creportb;
window.onload = function(){
    curl = doc.querySelector('#sakuraUrl');
    ciframe = doc.querySelector('#sakuraCheckerSite');
    cconf = doc.querySelector('#confirm');
    doc.querySelector('#addToBookmark').href = `javascript:(function(){let e=document;e.querySelector(".mainBlock"),e.querySelector(".reportBlock"),e.querySelector("#results");var t=document.createElement("script");t.src="https://aika-toki.github.io/sites/sakura_capture/js/html2canvas.js",t.id="html2canvas",document.head.appendChild(t);t=document.createElement("div");t.id="results",t.width="100%",t.height="min-content",document.body.appendChild(t);t=document.createElement("img");t.id="resultMain",document.querySelector("#results").appendChild(t);t=document.createElement("img");t.id="resultReport",document.querySelector("#results").appendChild(t);t=document.createElement("a");t.id="imgDownload",t.innerText="結果を画像で保存する",document.querySelector(".mainBlock").insertAdjacentElement("afterend",t);t=document.createElement("script");t.src="https://aika-toki.github.io/sites/sakura_capture/js/script.js",document.body.appendChild(t);t=document.createElement("script");t.id="cs",t.innerText="document.querySelector('#html2canvas').onload = function() {d = document, cmainb = d.querySelector('.mainBlock'), creportb = d.querySelector('.reportBlock'), cresult = d.querySelector('#results');html2canvas(cmainb,{onrendered: function(canvas){var imgData = canvas.toDataURL();document.getElementById('resultMain').src = imgData;}});html2canvas(creportb,{onrendered: function(canvas){var imgData = canvas.toDataURL();document.getElementById('resultReport').src = imgData;}});html2canvas(cresult,{onrendered: function(canvas){var imgData = canvas.toDataURL();document.getElementById('imgDownload').href = imgData;}});}",document.body.appendChild(t)})();`;
}
function load() {
    let id = curl.value;
    ciframe.setAttribute('src', `https://sakura-checker.jp/search/${id}/`);
    ciframe.style.display = 'block';
    cid = ciframe.contentWindow.document;
    cmainb = cid.querySelector('.mainBlock');
    creportb = cid.querySelector('.reportBlock');

}
function imageOutput() {
    let d = document, cmainb = d.querySelector('.mainBlock'), creportb = d.querySelector('.reportBlock'), cresult = d.querySelector('#results');
    html2canvas(cmainb,{
        onrendered: function(canvas){
            var imgData = canvas.toDataURL();
            document.getElementById("resultMain").src = imgData;
        }
    });
    html2canvas(creportb,{
        onrendered: function(canvas){
            var imgData = canvas.toDataURL();
            document.getElementById("resultReport").src = imgData;
        }
    });
    html2canvas(cresult,{
        onrendered: function(canvas){
            var imgData = canvas.toDataURL();
            document.getElementById("resultReport").src = imgData;
        }
    });
}