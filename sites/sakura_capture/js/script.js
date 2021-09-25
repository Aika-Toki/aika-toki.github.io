let d = document,curl,ciframe,cid,cconf,cmainb,creportb;
window.onload = function(){
    curl = d.querySelector('#sakuraUrl');
    ciframe = d.querySelector('#sakuraCheckerSite');
    cconf = d.querySelector('#confirm');
}
function load() {
    let id = curl.value;
    ciframe.setAttribute('src', `https://sakura-checker.jp/search/${id}/`);
    cid = ciframe.contentWindow.document;
    cmainb = cid.querySelector('.mainBlock');
    creportb = cid.querySelector('.reportBlock');
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
}