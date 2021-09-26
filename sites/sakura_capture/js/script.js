let doc = document,curl,ciframe,cid,cconf,cmainb,creportb,hrefJavaScript;
window.onload = function(){
    curl = doc.querySelector('#sakuraUrl');
    ciframe = doc.querySelector('#sakuraCheckerSite');
    cconf = doc.querySelector('#confirm');
    hrefJavaScript = `(function(){let e=document;e.querySelector(".mainBlock"),e.querySelector(".reportBlock"),e.querySelector("#results");var t=document.createElement("script");t.src="https://aika-toki.github.io/sites/sakura_capture/js/html2canvas.js",t.id="html2canvas",document.head.appendChild(t);t=document.createElement("div");t.id="results",t.width="100%",t.height="min-content",t.style.display="grid",document.body.appendChild(t);t=document.createElement("img");t.id="resultMain",document.querySelector("#results").appendChild(t);t=document.createElement("img");t.id="resultReport",document.querySelector("#results").appendChild(t);t=document.createElement("a");t.id="imgDownload",t.innerText="結果を画像で保存する",document.querySelector(".mainBlock").insertAdjacentElement("afterend",t);t=document.createElement("script");t.id="cs",t.innerText='document.querySelector("#html2canvas").onload=function(){html2canvas(document.querySelector(".mainBlock")).then(e=>{var t=e.toDataURL("image/png",1);document.getElementById("resultMain").src=t}),html2canvas(document.querySelector(".reportBlock")).then(e=>{var t=e.toDataURL("image/png",1);document.getElementById("resultReport").src=t}),html2canvas(document.querySelector("#results")).then(e=>{var t=e.toDataURL("image/png",1);document.getElementById("imgDownload").href=t})};',document.body.appendChild(t);t=document.createElement("style");t.innerText="#imgDownload {¥n    border-style: dotted;¥n    border-radius: 30px;¥n    padding: 2px;¥n    border-width: 2px;¥n    transition: all cubic-bezier(0.46, 0.03, 0.52, 0.96) 800ms;¥n    font-size: 30px;¥n}¥n#imgDownload:hover{¥n    border-color: coral;¥n    color: coral;¥n    border-width: 4px !important;¥n    border-style: solid !important;¥n    transition: all linear 200ms;¥n    text-decoration: none;¥n    background-color: papayawhip;¥n    font-size: 33px !important;¥n    font-weight: bold;¥n}",document.head.appendChild(t)})();`;
    doc.querySelector('#addToBookmark').href = `javascript:${hrefJavaScript}`;
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