let d = document,curl,ciframe,cid,cconf,cmainb,creportb;
window.onload = function(){
    curl = d.querySelector('#sakuraUrl');
    ciframe = d.querySelector('#sakuraCheckerSite');
    cconf = d.querySelector('#confirm');
    d.querySelector('#addToBookmark').href = `javascript:(function(){var el = document.createElement("script");el.src = "https://aika-toki.github.io/sites/sakura_capture/js/bookmark.js";document.body.appendChild(el);bookmark();})();`;
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