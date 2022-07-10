d.addEventListener('load',()=>{
    dqs("button#load").addEventListener('click',load);
});
function load(){
    let savebase64 = dqs("input#savecode").value;
    let save = JSON.parse(atob(savebase64));
    let savestr = JSON.stringify(save,null,2);
    let savestrl = savestr.length;
    let lastsavetime = new Date(save.lastUpdate);
    let lst2nodestyle = `${lastsavetime.getFullYear()}-${("0"+(lastsavetime.getMonth()+1)).substr(-2)}-${("0"+lastsavetime.getDate()).substr(-2)}T${("0"+lastsavetime.getHours()).substr(-2)}:${("0"+lastsavetime.getMinutes()).substr(-2)}`;
    _lastsavetime.value = lst2nodestyle;
    delete save.lastUpdate;
    _version.value = save.version;
    delete save.version;
    setinfo("#_antimatter",save.money);
    delete save.money;
    setinfo("#_infinitypoint",save.infinityPoints);
    delete save.infinityPoints;
    setinfo("#_eternitypoint",save.eternityPoints);
    delete save.eternityPoints;
    setinfo("#_timetheorems",save.timestudy.theorem);
    delete save.timestudy.theorem;
    for(let i = 1;i < 9;i++){
        let st = ["first","second","third","fourth","fifth","sixth","seventh","eight"]
        setinfo(`td#_dimention${i}cost`,save[`${st[i-1]}Cost`]);
        delete save[`${st[i-1]}Cost`];
        setinfo(`td#_dimention${i}amount`,save[`${st[i-1]}Amount`]);
        delete save[`${st[i-1]}Amount`];
        setinfo(`td#_dimention${i}multiplier`,save[`${st[i-1]}Pow`]);
        delete save[`${st[i-1]}Pow`];
        setinfo(`td#_dimention${i}bought`,save[`${st[i-1]}Bought`]);
        delete save[`${st[i-1]}Bought`];
        setinfo(`td#_dimention${i}costincrease`,save.costMultipliers[i-1]);
        delete save.costMultipliers[i-1];
    }
    delete save.costMultipliers;
    setinfo("#_tickspeed",save.tickspeed);
    setinfo("#_tickspeedcost",save.tickSpeedCost);
    setinfo("#_tickspeedmultiplier",save.tickspeedMultiplier);
    delete save.tickspeed
    delete save.tickSpeedCost
    delete save.tickspeedMultiplier
    let el = d.createElement('pre');
    el.setAttribute("contenteditable","");
    el.innerHTML = JSON.stringify(save,null,2);
    dqs(body).appendChild(el);
    dqs("span").innerText = "実装進捗："+(Math.floor((1-(el.innerText.length / savestrl)) * 1000000)/10000) + "%";
}

function canedit(el){
    el.setAttribute('contenteditable',"");
}

function setinfo(elid,content){
    dqs(elid).innerText = content;
    canedit(dqs(elid));
}