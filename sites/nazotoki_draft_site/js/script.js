d = document;
function gamestart() {
    d.querySelector('button#hangon').className = 'on';
    let scene0to1 = setInterval(function() {
        d.querySelector('div#call').className = 'go';
        clearInterval(scene0to1);
    }, 600);
}