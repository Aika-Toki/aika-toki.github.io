d.addEventListener('load',()=>{
    dqs("button#load").addEventListener('click',load);
});
function load(){
    let savebase64 = dqs("input#savecode").value;
    let save = JSON.parse(atob(savebase64));
    let lastsavetime = new Date(save.lastUpdate);
    let lst2nodestyle = `${lastsavetime.getFullYear()}-${("0"+(lastsavetime.getMonth()+1)).substr(-2)}-${("0"+lastsavetime.getDate()).substr(-2)}T${("0"+lastsavetime.getHours()).substr(-2)}:${("0"+lastsavetime.getMinutes()).substr(-2)}`;
    _lastsavetime.value = lst2nodestyle;
    _version.value = save.version;
    _antimatter.innerText = save.money;
    _antimatter.setAttribute('contenteditable',"");
    _infinitypoint.innerText = save.infinityPoints;
    _infinitypoint.setAttribute('contenteditable',"");
    _eternitypoint.innerText = save.eternityPoints;
    _eternitypoint.setAttribute('contenteditable',"");
    _timetheorems.innerText = save.timestudy.theorem;
    _timetheorems.setAttribute('contenteditable',"");
    let el = d.createElement('pre');
    el.setAttribute("contenteditable","");
    el.innerHTML = JSON.stringify(save,null,2);
    dqs(body).appendChild(el);
}