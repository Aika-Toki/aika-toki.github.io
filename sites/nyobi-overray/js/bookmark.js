document.querySelector('#NAIOVER').onload = function(){
    var el = document.createElement('iframe');
    el.style.position = 'fixed';
    el.style.borderStyle = 'solid';
    el.style.borderRadius = '3px';
    el.src = 'https://secure.nnn.ed.jp/mypage/result/pc/list/index';
    document.body.insertAdjacentElement('afterbegin', el);
}