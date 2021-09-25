let d = document,curl,ciframe,cid,cconf,cmainb,creportb;
window.onload = function(){
    curl = d.querySelector('#sakuraUrl');
    ciframe = d.querySelector('#sakuraCheckerSite');
    cconf = d.querySelector('#confirm');
    d.querySelector('#addToBookmark').href = `javascript:(function(){var e=document.createElement("script");e.src="https://html2canvas.hertzen.com/dist/html2canvas.js",e.id="html2canvas",document.head.appendChild(e);e=document.createElement("div");e.id="results",e.width="100%",e.height="min-content",document.body.appendChild(e);e=document.createElement("img");e.id="resultMain",document.querySelector("#results").appendChild(e);e=document.createElement("img");e.id="resultReport",document.querySelector("#results").appendChild(e);e=document.createElement("a");e.id="imgDownload",e.innerText="結果を画像で保存する",document.querySelector(".mainBlock").insertAdjacentElement("afterend",e);e=document.createElement("script");e.src="https://aika-toki.github.io/sites/sakura_capture/js/script.js",document.body.appendChild(e);e=document.createElement("script");e.id="cs",e.innerText="document.querySelector('#html2canvas').onload = function() {let d = document, cmainb = d.querySelector('.mainBlock'), creportb = d.querySelector('.reportBlock'), cresult = d.querySelector('#results');html2canvas(cmainb,{onrendered: function(canvas){var imgData = canvas.toDataURL();document.getElementById('resultMain').src = imgData;}});html2canvas(creportb,{onrendered: function(canvas){var imgData = canvas.toDataURL();document.getElementById('resultReport').src = imgData;}});html2canvas(cresult,{onrendered: function(canvas){var imgData = canvas.toDataURL();document.getElementById('addToBookmark').href = imgData;}});}",document.body.appendChild(e)})();`;
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