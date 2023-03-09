const d = document;
// autoname(10)
// window.addEventListener('load',demo);
d.querySelector('input#add').addEventListener('click',addlist);
d.querySelector('input#run').addEventListener('click',run);
d.querySelector('input#again').addEventListener('click',again);
d.querySelector('input#edit').addEventListener('click',edit);
function edit(){
    d.querySelector('div#control').className = "";
    d.querySelector('div#result').className = "hide";
}
function again(){
    edit();
    run();
}
function addlist(){
    let v = d.querySelector('input#nameinput').value;
    if(v == ""||v.replaceAll(' ','') == ""){
        let numm = String("000" + Math.floor(Math.random()*10000)).substr(-4);
        v = "NoName#"+numm;
    }
    let el = d.createElement('tr');
    elid = "_"+randstr('0aA',8);
    el.id = elid;
    el.innerHTML = `<td>${v}</td><td><button onclick="remove('${elid}');">×</button></td>`;
    d.querySelector('table#names>tbody').appendChild(el);
    d.querySelector('input#nameinput').value = '';
    checkmemamo();
}
function checkmemamo(){
    let e = d.querySelectorAll('#names td:nth-child(1)');
    let ea = []
    for(let i = 0; i < e.length; i++){
        ea.push(e[i].innerText);
    }
    document.querySelector('#warn').className = ea.length>=11?'show':'';
}
function addlistwarg(name){
    let v = name;
    let el = d.createElement('tr');
    elid = "_"+randstr('0aA',8);
    el.id = elid;
    el.innerHTML = `<td>${v}</td><td><button onclick="remove('${elid}');">×</button></td>`;
    d.querySelector('table#names>tbody').appendChild(el);
}
function remove(id){
    d.querySelector(`tr#${id}`).remove();
    checkmemamo();
}
function run(){
    document.querySelector('#mapnamearea').style.backgroundImage = 'url("./img/71_20221028232650.png")';
    d.querySelector('div#teammember > div#teama').innerHTML="";
    d.querySelector('div#teammember > div#teamb').innerHTML="";
    let e = d.querySelectorAll('#names td:nth-child(1)');
    let ea = []
    for(let i = 0; i < e.length; i++){
        ea.push(e[i].innerText);
    }
    randomteam(ea,["attacker","defender"]);
}
function demo(a) {
    autoname(a);
    run();
}
function autoname(a){
    for(let i = 0; i < a; i++){
        addlistwarg(`Player#${Math.floor(Math.random()*8999)+1000}`);
    }
}
function randomteam(names=[],teams=[]){
    let output = {teams:{}};
    for(let ii = 0; ii < teams.length; ii++){
        output.teams[teams[ii]] = {players:[],cards:[],titles:[],agents:[]};
    }
    let namesl = names.length;
    for(let i = 0; i < namesl; i++){
        let rand = Math.floor(Math.random()*names.length);
        output.teams[teams[i%2]].players.push(names.splice(rand,1)[0]);
    }
    let url = "https://valorant-api.com/v1/maps";
    fetch(url)
    .then((r)=>r.json())
    .then((data)=>{
        let mapdata = data.status==200?data.data:null;
        mapdata.splice(mapdata.findIndex((m)=>m.uuid === "ee613ee9-28b7-4beb-9666-08db13bb2244"));
        let random = Math.floor(Math.random()*mapdata.length);
        let mapresult = [String(mapdata[random].displayName).toUpperCase(),mapdata[random].splash,mapdata[random].displayIcon,mapdata[random].coordinates];
        output["map"] = mapresult;
        fetch('https://valorant-api.com/v1/playercards')
        .then((r)=>r.json())
        .then((_data)=>{
            let carddata = _data.status==200?_data.data:null;
            for(let i = 0;i<teams.length;i++){
                for(let ii = 0;ii<output.teams[teams[i]].players.length;ii++){
                    let card = carddata[Math.floor(Math.random()*carddata.length)].wideArt;
                    output.teams[teams[i]].cards.push(card);
                }
            }
            fetch('https://valorant-api.com/v1/playertitles')
            .then((r)=>r.json())
            .then((__data)=>{
                let titledata = __data.status==200?__data.data:null;
                for(let i = 0;i<teams.length;i++){
                    for(let ii = 0;ii<output.teams[teams[i]].players.length;ii++){
                        let title = titledata[Math.floor(Math.random()*titledata.length)].titleText;
                        output.teams[teams[i]].titles.push(title);
                    }
                }
                fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
                .then((r)=>r.json())
                .then((data_)=>{
                    let agentsdatas = data_.status=200?data_.data:null;
                    for(let i = 0;i<teams.length;i++){
                        let agentdata = agentsdatas;
                        for(let ii = 0;ii<output.teams[teams[i]].players.length;ii++){
                            let randd = Math.floor(Math.random()*agentdata.length);
                            let agent = agentdata.splice(randd,1)[0];
                            let pushagent = {icon:agent.displayIcon,name:agent.displayName};
                            output.teams[teams[i]].agents.push(pushagent);
                        }
                    }
                    console.log(output);
                    for(let i = 0;i<output.teams.attacker.players.length;i++){
                        let el = document.createElement('div');    
                        el.innerHTML = `<div id="teamcolor"></div><div id="playerinfo"><div id="images"><img id="agentIcon" src="${output.teams.attacker.agents[i].icon}"></img><img id="banner" src="${output.teams.attacker.cards[i]}"></img></div><div id="texts"><div id="name">${output.teams.attacker.players[i]}</div><div id="title">${output.teams.attacker.titles[i]}</div><div id="agentName">${output.teams.attacker.agents[i].name}</div></div></div>`;
                        d.querySelector('div#teammember > div#teama').appendChild(el);
                    }
                    for(let i = 0;i<output.teams.defender.players.length;i++){
                        let el = document.createElement('div');    
                        el.innerHTML = `<div id="playerinfo"><div id="images"><img id="banner" src="${output.teams.defender.cards[i]}"></img><img id="agentIcon" src="${output.teams.defender.agents[i].icon}"></img></div><div id="texts"><div id="name">${output.teams.defender.players[i]}</div><div id="title">${output.teams.defender.titles[i]}</div><div id="agentName">${output.teams.defender.agents[i].name}</div></div></div><div id="teamcolor"></div>`;
                        d.querySelector('div#teammember > div#teamb').appendChild(el);
                    }
                    d.querySelector('label#mapname').innerText = output.map[0];
                    d.querySelector('label#coordinate').innerText = output.map[3];
                    d.querySelector('div#result').style.backgroundImage = `url("${output.map[1]}")`;
                    d.querySelector('div#control').className = "hide";
                    d.querySelector('div#result').className = "";
                    setTimeout(()=>{
                        document.querySelector('#mapnamearea').style.backgroundImage = "none";
                    },6800);
                });
            });
        });
    });
}
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