window.onerror = (a,b,c,d,e)=>{
    iziToast.show({title:`${b}\n${c}:${d}`,message:`${a}`,timeout: 10000,color: "red",layout:2});
}

function pageLoaded(){
    return true;
}

function co(msg){
    typeof msg == 'number'?String(msg):msg;
    iziToast.show({message:`${typeof msg}:${msg}`,position:"topCenter"});
}

function run(){
    let base = document.querySelector('#base'),
    seed = document.querySelector('#seed'),
    seedraw = document.querySelector('#seedraw'),
    result = document.querySelector('#result'),
    now = new Date(),
    nowarr = (now.toISOString()).split(''),
    nowseed = '',
    seedconverted = '',
    seedresult = 0;
    
    let basearr=atob(base.value).split('|');
    // iziToast.show({message:basearr[2]});
    seed.value = atob(basearr[2]);
    let seedfbase = atob(basearr[2]).split('|');
    if(seedfbase.length==1){
        for(let i=0;i<nowarr.length;i++){
            nowseed+=nowarr[i].charCodeAt(0).toString(16).padStart(4,'0');
        }
        seedfbase.push(btoa(nowseed));
    }
    let baseseed = atob(seedfbase[0]);
    let seedarr = atob(seedfbase[1]).split('');
    
    for(let i=0;i<seedarr.length;i++){
        seedconverted += seedarr[i].charCodeAt(0).toString(10).padStart(4,'0');
    }
    let seedconvarr =seedconverted.match(/.{4}/g);
    seedresult = 0;
    for(let i=0;i<seedconvarr.length;i++){
        seedresult+=Number(seedconvarr[i]);
    }
    // co(seedresult);
    seedconverted = '';
    seedarr = baseseed.split('');
    for(let i=0;i<seedarr.length;i++){
        seedconverted += seedarr[i].charCodeAt(0).toString(8).padStart(4,'0');
    }
    seedconverted.charAt(0)=='0'?seedconverted='9999'+seedconverted:seedconverted;
    seedconvarr =seedconverted.match(/.{8}/g);
    let seedbaseresult = 0;
    for(let i=0;i<seedconvarr.length;i++){
        seedbaseresult+=Number(seedconvarr[i]);
    }
    // co(String(seedbaseresult));
    seedresult = Number(String(seedbaseresult)+String(seedresult));
    seedraw.value = seedresult;
    result.value = new Random(seedresult).range(Number(basearr[0]),Number(basearr[1]));
}
function generate(){
    function q(e){
        return document.querySelector(e);
    }
    let seed = q('#_seed'),
    time = q('#_time'),
    min = q('#_min'),
    max = q('#_max'),
    result = q('#_result');
    let base='', seedbase = '';
    let timeseed;
    seedbase = btoa(seed.value);
    if (time.checked) {
        let nowarr = (new Date().toISOString()).split('');
        let nowseed = '';
  	    for(let i=0;i<nowarr.length;i++){
            nowseed+=nowarr[i].charCodeAt(0).toString(16).padStart(4,'0');
        }
        timeseed = btoa(nowseed);
        seedbase += '|'+timeseed;
    }
    seedbase = btoa(seedbase);
    base = btoa(`${min.value}|${max.value}|${seedbase}`);
    result.value = base;
    q('#base').value = base;
}

function lib_generate(seed="seed",min=0,max=10,time=(new Date())){
    let base='', seedbase = '';
    let timeseed;
    seedbase = btoa(seed);
    let nowarr = (time.toISOString()).split('');
    let nowseed = '';
    for(let i=0;i<nowarr.length;i++){
        nowseed+=nowarr[i].charCodeAt(0).toString(16).padStart(4,'0');
    }
    timeseed = btoa(nowseed);
    seedbase += '|'+timeseed;
    seedbase = btoa(seedbase);
    base = btoa(`${min}|${max}|${seedbase}`);
    return base;
}

function lib_run(seed=lib_generate()){
    let now = new Date(),
    nowarr = (now.toISOString()).split(''),
    nowseed = '',
    seedconverted = '',
    seedresult = 0;
    
    let basearr=atob(seed).split('|');
    // iziToast.show({message:basearr[2]});
    // seed.value = atob(basearr[2]);
    let seedfbase = atob(basearr[2]).split('|');
    if(seedfbase.length==1){
        for(let i=0;i<nowarr.length;i++){
            nowseed+=nowarr[i].charCodeAt(0).toString(16).padStart(4,'0');
        }
        seedfbase.push(btoa(nowseed));
    }
    let baseseed = atob(seedfbase[0]);
    let seedarr = atob(seedfbase[1]).split('');
    
    for(let i=0;i<seedarr.length;i++){
        seedconverted += seedarr[i].charCodeAt(0).toString(10).padStart(4,'0');
    }
    let seedconvarr =seedconverted.match(/.{4}/g);
    seedresult = 0;
    for(let i=0;i<seedconvarr.length;i++){
        seedresult+=Number(seedconvarr[i]);
    }
    // co(seedresult);
    seedconverted = '';
    seedarr = baseseed.split('');
    for(let i=0;i<seedarr.length;i++){
        seedconverted += seedarr[i].charCodeAt(0).toString(8).padStart(4,'0');
    }
    seedconverted.charAt(0)=='0'?seedconverted='9999'+seedconverted:seedconverted;
    seedconvarr =seedconverted.match(/.{8}/g);
    let seedbaseresult = 0;
    for(let i=0;i<seedconvarr.length;i++){
        seedbaseresult+=Number(seedconvarr[i]);
    }
    // co(String(seedbaseresult));
    seedresult = Number(String(seedbaseresult)+String(seedresult));
    // seedraw.value = seedresult;
    return new Random(seedresult).range(Number(basearr[0]),Number(basearr[1]));
}