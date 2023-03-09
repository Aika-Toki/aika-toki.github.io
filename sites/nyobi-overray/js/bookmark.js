document.querySelector('#NAIOVER').onload = function(){
    var el = document.createElement('iframe');
    el.style.position = 'fixed';
    el.style.borderStyle = 'solid';
    el.style.borderRadius = '10px';
    el.style.borderColor = 'cornflowerblue';
    el.src = 'https://secure.nnn.ed.jp/mypage/result/sp/list/index';
    el.style.width = '375px';
    el.style.height = '812px';
    document.body.insertAdjacentElement('afterbegin', el);
    alert('#4');
}