let d = document;
let stlist = [
    ['日本橋','にほんばし','Nihonbashi','日本桥','日本橋','니혼 바시'],
    ['新宿','しんじゅく','Shinjuku','新宿','新宿','신주쿠'],
    ];
function jakVisible(s) {
    if(s === 0) {
        d.querySelectorAll('#ja-k').forEach(function(a){a.className = 'hidden';});
    } else if(s === 1) {
        d.querySelectorAll('#ja-k').forEach(function(a){a.className = 'visible';});
    } else {
        console.error(`"${s}"は無効な数値です`)
    }
}
function jahVisible(s) {
    if(s === 0) {
        d.querySelectorAll('#ja-h').forEach(function(a){a.className = 'hidden';});
    } else if(s === 1) {
        d.querySelectorAll('#ja-h').forEach(function(a){a.className = 'visible';});
    } else {
        console.error(`"${s}"は無効な数値です`)
    }
}
function enVisible(s) {
    if(s === 0) {
        d.querySelectorAll('#en').forEach(function(a){a.className = 'hidden';});
    } else if(s === 1) {
        d.querySelectorAll('#en').forEach(function(a){a.className = 'visible';});
    } else {
        console.error(`"${s}"は無効な数値です`)
    }
}
function zhcVisible(s) {
    if(s === 0) {
        d.querySelectorAll('#zh-cn').forEach(function(a){a.className = 'hidden';});
    } else if(s === 1) {
        d.querySelectorAll('#zh-cn').forEach(function(a){a.className = 'visible';});
    } else {
        console.error(`"${s}"は無効な数値です`)
    }
}
function zhtVisible(s) {
    if(s === 0) {
        d.querySelectorAll('#zh-tw').forEach(function(a){a.className = 'hidden';});
    } else if(s === 1) {
        d.querySelectorAll('#zh-tw').forEach(function(a){a.className = 'visible';});
    } else {
        console.error(`"${s}"は無効な数値です`)
    }
}
function koVisible(s) {
    if(s === 0) {
        d.querySelectorAll('#ko').forEach(function(a){a.className = 'hidden';});
    } else if(s === 1) {
        d.querySelectorAll('#ko').forEach(function(a){a.className = 'visible';});
    } else {
        console.error(`"${s}"は無効な数値です`)
    }
}

function start() {
    let transform0 = setInterval(function(){
        jakVisible(1);
        koVisible(0);
        let transform1 = setInterval(function(){
            enVisible(1);
            jakVisible(0);
            let transform2 = setInterval(function(){
                jahVisible(1);
                enVisible(0);
                let transform3 = setInterval(function(){
                    zhcVisible(1);
                    jahVisible(0);
                    let transform4 = setInterval(function(){
                        jakVisible(1);
                        zhcVisible(0);
                        let transform5 = setInterval(function(){
                            zhtVisible(1);
                            jakVisible(0);
                            let transform6 = setInterval(function(){
                                jahVisible(1);
                                zhtVisible(0);
                                let transform7 = setInterval(function(){
                                    koVisible(1);
                                    jahVisible(0);
                                    start();
                                    clearInterval(transform7);
                                },3000);
                                clearInterval(transform6);
                            },3000);
                            clearInterval(transform5);
                        },3000);
                        clearInterval(transform4);
                    },3000);
                    clearInterval(transform3);
                },3000);
                clearInterval(transform2);
            },3000);
            clearInterval(transform1);
        },3000);
        clearInterval(transform0);
    },3000);
}
function stationChange(val) {
    d.querySelector('div#station').innerHTML = `<h1 id="ja-k" class="hidden">${stlist[val][0]}</h1>`;
    d.querySelector('div#station').innerHTML = `${d.querySelector('div#station').innerHTML}
<h1 id="ja-h" class="hidden">${stlist[val][1]}</h1>`;
    d.querySelector('div#station').innerHTML = `${d.querySelector('div#station').innerHTML}
<h1 id="en" class="hidden">${stlist[val][2]}</h1>`;
    d.querySelector('div#station').innerHTML = `${d.querySelector('div#station').innerHTML}
<h1 id="zh-cn" class="hidden">${stlist[val][3]}</h1>`;
    d.querySelector('div#station').innerHTML = `${d.querySelector('div#station').innerHTML}
<h1 id="zh-tw" class="hidden">${stlist[val][4]}</h1>`;
    d.querySelector('div#station').innerHTML = `${d.querySelector('div#station').innerHTML}
<h1 id="ko" class="hidden">${stlist[val][5]}</h1>`;
};
window.onload = function() {
    start();
};