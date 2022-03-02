// 0.23km/s
const d = document, w = window;
let locationprogress, healthprogress, pageprogress, gamestatus, el, healthtimer, locationtimer, gameevent, starttime, finishtime;
const DURATION = 0.4;
d.addEventListener('DOMContentLoaded', ()=>{
    pageprogress = new Nanobar({
        id: 'pageprogressbar'
    });
    locationprogress = new Nanobar({
        target: d.querySelector('#location>#bar>#barmain'),
        id: 'locationprogress'
    });
    healthprogress = new Nanobar({
        target: d.querySelector('#health>#bar>#barmain'),
        id: 'healthprogress'
    });
    healthprogress.go(99.999999);
    locationprogress.go(0);
    pageprogress.go(0);
    gamestatus = {
        location: [0.00,39.00],
        health: [300, 300],
        speed: 1
    }
    el = {
        currentlocation:d.querySelector('#currentlocation'),
        goallocation:d.querySelector('#goallocation'),
        remininghealth:d.querySelector('#remininghealth'),
        maxhealth:d.querySelector('#maxhealth'),
        health:d.querySelector('#health')
    }
    el.currentlocation.textContent = gamestatus.location[0];
    el.goallocation.textContent = gamestatus.location[1];
    el.remininghealth.textContent = gamestatus.health[0];
    el.maxhealth.textContent = gamestatus.health[1];
    d.querySelector(`div[data-col="1"]#col>div[data-row="1"]#cell`).addEventListener('click',()=>frip(1,1));
    d.querySelector(`div[data-col="1"]#col>div[data-row="2"]#cell`).addEventListener('click',()=>frip(2,1));
    d.querySelector(`div[data-col="1"]#col>div[data-row="3"]#cell`).addEventListener('click',()=>frip(3,1));
    d.querySelector(`div[data-col="1"]#col>div[data-row="4"]#cell`).addEventListener('click',()=>frip(4,1));
    d.querySelector(`div[data-col="1"]#col>div[data-row="5"]#cell`).addEventListener('click',()=>frip(5,1));
    d.querySelector(`div[data-col="2"]#col>div[data-row="1"]#cell`).addEventListener('click',()=>frip(1,2));
    d.querySelector(`div[data-col="2"]#col>div[data-row="2"]#cell`).addEventListener('click',()=>frip(2,2));
    d.querySelector(`div[data-col="2"]#col>div[data-row="3"]#cell`).addEventListener('click',()=>frip(3,2));
    d.querySelector(`div[data-col="2"]#col>div[data-row="4"]#cell`).addEventListener('click',()=>frip(4,2));
    d.querySelector(`div[data-col="2"]#col>div[data-row="5"]#cell`).addEventListener('click',()=>frip(5,2));
    d.querySelector(`div[data-col="3"]#col>div[data-row="1"]#cell`).addEventListener('click',()=>frip(1,3));
    d.querySelector(`div[data-col="3"]#col>div[data-row="2"]#cell`).addEventListener('click',()=>frip(2,3));
    d.querySelector(`div[data-col="3"]#col>div[data-row="3"]#cell`).addEventListener('click',()=>frip(3,3));
    d.querySelector(`div[data-col="3"]#col>div[data-row="4"]#cell`).addEventListener('click',()=>frip(4,3));
    d.querySelector(`div[data-col="3"]#col>div[data-row="5"]#cell`).addEventListener('click',()=>frip(5,3));
    d.querySelector(`div[data-col="4"]#col>div[data-row="1"]#cell`).addEventListener('click',()=>frip(1,4));
    d.querySelector(`div[data-col="4"]#col>div[data-row="2"]#cell`).addEventListener('click',()=>frip(2,4));
    d.querySelector(`div[data-col="4"]#col>div[data-row="3"]#cell`).addEventListener('click',()=>frip(3,4));
    d.querySelector(`div[data-col="4"]#col>div[data-row="4"]#cell`).addEventListener('click',()=>frip(4,4));
    d.querySelector(`div[data-col="4"]#col>div[data-row="5"]#cell`).addEventListener('click',()=>frip(5,4));
    d.querySelector(`div[data-col="5"]#col>div[data-row="1"]#cell`).addEventListener('click',()=>frip(1,5));
    d.querySelector(`div[data-col="5"]#col>div[data-row="2"]#cell`).addEventListener('click',()=>frip(2,5));
    d.querySelector(`div[data-col="5"]#col>div[data-row="3"]#cell`).addEventListener('click',()=>frip(3,5));
    d.querySelector(`div[data-col="5"]#col>div[data-row="4"]#cell`).addEventListener('click',()=>frip(4,5));
    d.querySelector(`div[data-col="5"]#col>div[data-row="5"]#cell`).addEventListener('click',()=>frip(5,5));
    d.querySelector('footer').addEventListener('click',()=>{game_pause();});
});
w.addEventListener('load',()=>{
    pageprogress.go(100);
    setup(true);
});
function setup(first){
    if(!first){
        clearInterval(healthtimer);
        clearInterval(locationtimer);
    }
    gamestatus.health[0] = gamestatus.health[1];
    gamestatus.location[0] = 0.00;
    healthtimer = setInterval(()=>{
        gamestatus.health[0]--;
        hupd(gamestatus.health[0]);
        if(gamestatus.health[0] < 1){
            game_over();
        }
    },1000);
    hupd(gamestatus.health[0]);
    lupd(gamestatus.location[0]);
    starttime = new Date();
    starttime = starttime.getTime();
    next(true);
}
function lupd(val) {
    locationprogress.go(((val/gamestatus.location[1])*100)-0.000001);
    let from = parseFloat(el.currentlocation.innerText), to = parseFloat(val);
    let obj = {count: from}
    TweenMax.to(obj, DURATION, {
        count: to,
        ease: Power3.easeInOut,
        onUpdate: () => {
            el.currentlocation.textContent = Math.round(obj.count*100)/100;
        }
    });
}
function hupd(val) {
    healthprogress.go(((val/gamestatus.health[1])*100)-0.000001);
    let from = parseInt(el.remininghealth.innerText), to = parseInt(val);
    let obj = {count: from}
    TweenMax.to(obj, DURATION, {
        count: to,
        ease: Power3.easeInOut,
        onUpdate: () => {
            el.remininghealth.textContent = Math.round(obj.count);
            if((Math.round(obj.count*10)/10)/gamestatus.health[1] >= 0.451){
                el.health.className = "safe";
            } else if ((Math.round(obj.count*10)/10)/gamestatus.health[1] >= 0.101){
                el.health.className = "warn";
            } else {
                el.health.className = "danger";
            }
        }
    });
}
function frip(row, col){
    switchlight(row, col);
    switchlight(row-1, col);
    switchlight(row, col-1);
    switchlight(row, col+1);
    switchlight(row+1, col);
    check();
}
function switchlight(row, col){
    if (row == 0 || col == 0 || row == 6 || col == 6){
        return false;
    }
    let e = d.querySelector(`div[data-col="${col}"]#col>div[data-row="${row}"]#cell`);
    if(e.className === 'on'){
        e.className = 'off';
    } else {
        e.className = 'on';
    }
}
function check(){
    let clear = 0;
    for(let i = 0; i < 5; i++){
        if(d.querySelectorAll('div[data-col="'+(i+1)+'"]#col>div#cell.on').length == 5){
            clear++;
        }
    }
    if(clear == 5){
        next();
    }
}
function next(first){
    for(let i = 0; i < 5; i++){
        for(let ii = 0; ii < 5; ii++){
            d.querySelectorAll('div[data-col="'+(i+1)+'"]#col>div[data-row="'+(ii+1)+'"]').className = "off";
        }
    }
    let rand = Math.floor(Math.random()*13)+4;
    for(let i = 0; i < rand; i++){
        frip(Math.floor(Math.random()*5)+1,Math.floor(Math.random()*5)+1);
    }
    if(!first){
        new Audio('../audio/next.mp3').play();
        gamestatus.location[0] += 2.3;
        gamestatus.health[0] += 60;
        if(gamestatus.health[0]>gamestatus.health[1]){
            gamestatus.health[0]=300;
        }
        lupd(gamestatus.location[0]);
        if(gamestatus.location[0] >= gamestatus.location[1]){
            game_clear();
        }
        hupd(gamestatus.health[0]);
    }
}
function game_clear(){
    new Audio('../audio/clear.mp3').play();
    finishtime = new Date();
    finishtime = finishtime.getTime();
    let record = finishtime - starttime;
    finishtime = new Date();
    finishtime = [
        finishtime.getFullYear(),
        finishtime.getMonth()+1,
        finishtime.getDate(),
        finishtime.getHours(),
        finishtime.getMinutes(),
        finishtime.getSeconds(),
        finishtime.getMilliseconds()
    ];
    let timerecord = [
        Math.floor(record/1000/60/60)%60,
        Math.floor(record/1000/60)%60,
        Math.floor(record/1000)%60,
        String((Math.trunc((record/1000)*1000)/1000)).split('.')[1]
    ];
    let dialog0 = confirm(`クリアおめでとう！

かかった時間は ${timerecord[0]}時間${timerecord[1]}分${timerecord[2]}秒${timerecord[3]} でした！
ランキングに記録しますか？`);
    if(dialog0 == true){
        let name = prompt("名前は？","量産型メロス");
        let f = d.createElement('iframe');
        f.src = `https://script.google.com/macros/s/AKfycbysuE5m1tbH_UA14htS6IiKH55ksiud70SEtXEJ8vpq5ksqRCbPXc1DTOfrRa9VQjNJ/exec?rec=${timerecord.join(':')}&time=${finishtime.join('-')}&name=${name}&recm=${record}`;
        f.style.width = "0px";
        f.style.height = "0px";
        f.style.display = "none";
        d.body.appendChild(f);
    }
    setup();
    game_pause();
}
function game_over(){
    new Audio("../audio/fail.mp3").play();
    alert("ゲームオーバー！");
    setup();
}
function game_pause(){
    alert("一時停止中");
}