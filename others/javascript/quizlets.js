setup();
let f;
function setup(){
    if(!document.querySelector('div#searcher')){
        let ui = crel('script');
        let uiicon = crel('script');
        let uistyle = crel('link');
        ui.src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.9/js/uikit.min.js";
        ui.integrity="sha512-OZ9Sq7ecGckkqgxa8t/415BRNoz2GIInOsu8Qjj99r9IlBCq2XJlm9T9z//D4W1lrl+xCdXzq0EYfMo8DZJ+KA==";
        ui.crossorigin="anonymous";
        uiicon.src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.9/js/uikit-icons.min.js";
        uiicon.integrity="sha512-hcz3GoZLfjU/z1OyArGvM1dVgrzpWcU3jnYaC6klc2gdy9HxrFkmoWmcUYbraeS+V/GWSgfv6upr9ff4RVyQPw==";
        uiicon.crossorigin="anonymous";
        uistyle.href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.9/css/uikit.min.css";
        uistyle.rel="stylesheet";
        document.body.append(ui,uiicon);
        document.head.append(uistyle);
    }
    if(document.querySelector('div#searcher')){
        document.querySelector('div#searcher').remove();
        console.log('cleared');
        form = null;
    }
    form = crel('div');
    document.querySelector('.SetPage-setIntro').prepend(form);
    form.id="searcher";
    form.classList.add('SetPage-content');
    form.classList.add('uk-form-stacked');
    if(document.body.classList.contains('theme-default')){
        form.classList.add('uk-background-muted');
    } else {
        document.body.classList.add('uk-light');
        form.classList.add('uk-background-secondary');
    }
    form.classList.add('uk-padding','uk-panel');
    form.append(crel('div'),crel('div'),crel('div'),crel('div'),crel('div'));
    console.log(form);
    qd(1,'').append(crel('label'),crel('div'));
    qd(1,'label').textContent="1問目問題文の一部";
    qd(1,'label').classList.add("uk-form-label");
    qd(1,'div').classList.add('uk-form-controls');
    qd(1,'div').append(crel('input'));
    qd(1,'div>input').classList.add('uk-input');
    qd(1,'div>input').id = 'firstqstr';
    qd(2,'').append(crel('label'),crel('div'));
    qd(2,'label').textContent="最終問題文の一部";
    qd(2,"label").classList.add("uk-form-label");
    qd(2,'div').classList.add('uk-form-controls');
    qd(2,'div').append(crel('input'));
    qd(2,'div>input').classList.add('uk-input');
    qd(2,'div>input').id='lastqstr';
    qd(3,'').append(crel('label'));
    qd(3,'label').append(crel('input'));
    qd(3,'label>input').type="checkbox";
    qd(3,'label>input').id="kanzicheck";
    qd(3,'label>input').classList.add('uk-checkbox');
    qd(3,'label').innerHTML=qd(3,'label').innerHTML+" 漢字問題スキップ";
    qd(4,'').append(crel('label'),crel('div'));
    qd(4,'div').classList.add('uk-form-controls');
    qd(4,'div').append(crel('input'));
    qd(4,'div>input').classList.add('uk-input');
    qd(4,'label').textContent="漢字問題数";
    qd(4,'div>input').type="number";
    qd(4,'div>input').id="kanziamount";
    qd(5,'').append(crel('button'));
    qd(5,'button').classList.add('uk-button','uk-button-default');
    qd(5,'button').textContent="実行";
    qd(5,'button').onclick = ()=>{run();};
    qd(1,'').classList.add('uk-margin');
    qd(2,'').classList.add('uk-margin');
    qd(3,'').classList.add('uk-margin');
    qd(4,'').classList.add('uk-margin');
    qd(5,'').classList.add('uk-margin');
}
function setupb(){
    let scr = document.createElement('script');
    document.body.append(scr);
    scr.id="resetupsrc";
    scr.innerHTML = `function setup(){
        if(!document.querySelector('div#searcher')){
            let ui = crel('script');
            let uiicon = crel('script');
            let uistyle = crel('link');
            ui.src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.9/js/uikit.min.js";
            ui.integrity="sha512-OZ9Sq7ecGckkqgxa8t/415BRNoz2GIInOsu8Qjj99r9IlBCq2XJlm9T9z//D4W1lrl+xCdXzq0EYfMo8DZJ+KA==";
            ui.crossorigin="anonymous";
            uiicon.src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.9/js/uikit-icons.min.js";
            uiicon.integrity="sha512-hcz3GoZLfjU/z1OyArGvM1dVgrzpWcU3jnYaC6klc2gdy9HxrFkmoWmcUYbraeS+V/GWSgfv6upr9ff4RVyQPw==";
            uiicon.crossorigin="anonymous";
            uistyle.href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.9/css/uikit.min.css";
            uistyle.rel="stylesheet";
            document.body.append(ui,uiicon);
            document.head.append(uistyle);
        }
        if(document.querySelector('div#searcher')){
            document.querySelector('div#searcher').remove();
            console.log('cleared');
            form = null;
        }
        form = crel('div');
        document.querySelector('.SetPage-setIntro').prepend(form);
        form.id="searcher";
        form.classList.add('SetPage-content');
        form.classList.add('uk-form-stacked');
        form.append(crel('div'),crel('div'),crel('div'),crel('div'),crel('button'));
        console.log(form);
        qd(1,'').append(crel('label'),crel('div'));
        qd(1,'label').textContent="1問目問題文の一部";
        qd(1,'label').classList.add("uk-form-label");
        qd(1,'div').classList.add('uk-form-controls');
        qd(1,'div').append(crel('input'));
        qd(1,'div>input').classList.add('uk-input');
        qd(2,'').append(crel('label'),crel('div'));
        qd(2,'label').textContent="最終問題文の一部";
        qd(2,"label").classList.add("uk-form-label");
        qd(2,'div').classList.add('uk-form-controls');
        qd(2,'div').append(crel('input'));
        qd(2,'div>input').classList.add('uk-input');
    }`;
}
function resetup(addcode){
    let scr = document.querySelector('script#resetupsrc');
    let newscr = crel('script');
    newscr.innerHTML = scr.innerHTML.substring(0,scr.innerHTML.length-1)+addcode+"}";
    newscr.id="resetupsrc";
    scr.remove();
    document.body.append(newscr);
    setup();
}
function run(){
    let searcher = document.querySelector('#searcher');
    let fq = searcher.querySelector('#firstqstr');
    let lq = searcher.querySelector('#lastqstr');
    let kc = searcher.querySelector('#kanzicheck');
    let ka = searcher.querySelector('#kanziamount');
    let xam = 3
    fq.value==""?fq.classList.add('uk-form-danger'):xam--;
    lq.value==""?lq.classList.add('uk-form-danger'):xam--;
    kc.checked?(ka.value==""?ka.classList.add('uk-form-danger'):xam--):xam--;
    if(xam!=0){
        alert('内容が不正');
        return false;
    } else {
        let e=fq.value,
        ee=lq.value,
        ep=-1,
        eep=-1,
        t=document.querySelectorAll(".SetPageTerm-content"),
        rt=[];console.log(e);
        for(let l=0;l<t.length;l++){
            let r=t[l].querySelector(".SetPageTerm-smallSide").textContent;
            if(r.includes(e)){
                let e=t[l].querySelector(".SetPageTerm-largeSide").textContent;ep=l;
            }
            if(r.includes(ee)){
                let e=t[l].querySelector(".SetPageTerm-largeSide").textContent;
                eep=l+1;
            }
        }
        if(ep==-1&&eep==-1){
            return alert("見つかりませんでした。")
        }
        if(kc.checked){
            for(let m=0;m<Number(ka.value);m++){
                rt.push('');
            }
        }
        for(let n=ep;n<eep;n++){
            let e=t[n].querySelector(".SetPageTerm-largeSide").textContent;
            let k=e.replaceAll("，","、");
            rt.push(k);
        }
        let eee = crel('textarea');
        eee.classList.add('uk-textarea');
        eee.textContent = ("acorr("+JSON.stringify(rt)+")");
        form.append(crel('hr'),crel('div'));
        q('hr').classList.add('uk-margin');
        qd(6,'').append(crel('label'),crel('div'));
        qd(6,'').classList.add('uk-margin');
        qd(6,'label').textContent="検索結果";
        qd(6,"label").classList.add("uk-form-label");
        qd(6,'div').classList.add('uk-form-controls');
        qd(6,'div').append(eee);
        return true;
    }
}
function crel(type){
    return document.createElement(type);
}
function q(name){
    return form.querySelector(name);
}
function qd(nth, add){
    return add.replaceAll(" ","")==""?form.querySelector(`div:nth-of-type(${nth})`):form.querySelector(`div:nth-of-type(${nth})`).querySelector(add);
}