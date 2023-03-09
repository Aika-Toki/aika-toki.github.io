hljs.addPlugin({
    'after:highlightBlock': ({
        block,
        result
    }) => {
        result.value = `${result.value}`;
    }
});
hljs.addPlugin({
    'after:highlightBlock': ({ block, result }) => {
        result.value = result.value.replace(/^/gm,'<span class="row-number"></span>');
    }
});
function setup(){
    let codes = document.querySelectorAll('pre code');
    for(let i = 0;i < codes.length;i++){
        let _id = randstr("0aA",16);
        codes[i].id = `_${_id}`;
        let btn = document.createElement('button');
        btn.id = `_${_id}`;
        btn.innerText = 'COPY';
        btn.classList.add('uk-button');
        btn.classList.add('uk-button-secondary');
        codes[i].after(btn);
        document.querySelector('button#'+`_${_id}`).addEventListener('click',()=>{
            let intext = document.querySelector('pre code#'+`_${_id}`).innerText;
            navigator.clipboard.writeText(intext);
            UIkit.modal.alert('COPIED!');
        });
    }
};
function randstr(type="0aA",length=6){
    let charact = [];
    if(type.includes('0')){
        charact = charact.concat("0123456789".split(''));
    }
    if(type.includes('a')){
        charact = charact.concat("abcdefghijklmnopqrstuvwxyz".split(''));
    }
    if(type.includes('A')){
        charact = charact.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''));
    }
    console.log(charact)
    let result = [];
    for(let i = 0; i < length; i++){
        let num = Math.floor(Math.random()*charact.length);
        result.push(charact[num]);
    }
    return result.join('');
}
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
    dqs('pre code').innerHTML = JSON.stringify(save,null,2);
    dqs("span").innerText = "実装進捗："+(Math.floor((1-(dqs('pre code').innerText.length / savestrl)) * 1000000)/10000) + "%";
    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();
    setup();
}

function canedit(el){
    el.setAttribute('contenteditable',"");
}

function setinfo(elid,content){
    dqs(elid).innerText = content;
    canedit(dqs(elid));
}