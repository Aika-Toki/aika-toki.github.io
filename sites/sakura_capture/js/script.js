let d = document,curl,ciframe,cconf;
window.onload = function(){
    curl = d.querySelector('#sakuraUrl');
    ciframe = d.querySelector('#sakuraCheckerSite');
    cconf = d.querySelector('#confirm');
}
function load() {
    let id = curl.value;
    ciframe.setAttribute('src', `https://sakura-checker.jp/search/${id}/`);
}