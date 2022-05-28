const d = document;
// window.addEventListener('load',demo);
d.querySelector('input#add').addEventListener('click',addlist);
d.querySelector('input#run').addEventListener('click',run);
d.querySelector('input#again').addEventListener('click',run);
function addlist(){
    let v = d.querySelector('input#nameinput').value;
    let el = d.createElement('li');
    el.innerText = v;
    d.querySelector('ul#names').appendChild(el);
    d.querySelector('input#nameinput').value = '';
}
function run(){
    let e = d.querySelector('div#name > ul').querySelectorAll('li');
    let ea = []
    for(let i = 0; i < e.length; i++){
        ea.push(e[i].innerText);
    }
    let r = randomteam(ea,["attacker","defender"]);
    d.querySelector('div#teama > ul').innerHTML = `<li>${r.attacker.join('</li><li>')}</li>`;
    d.querySelector('div#teamb > ul').innerHTML = `<li>${r.defender.join('</li><li>')}</li>`;
    d.querySelector('label#mapname').innerText = r.map;
    d.querySelector('div#result').style.backgroundImage = `url("./img/${r.map.toLowerCase()}.png")`;
    d.querySelector('div#control').className = "";
}
function demo() {
    d.querySelector('ul#names').innerHTML = "";
    for(let i = 0; i < 6; i++){
        let v = `Player#${Math.floor(Math.random()*8999)+1000}`;
        let el = d.createElement('li');
        el.innerText = v;
        d.querySelector('ul#names').appendChild(el);
    }
    run();
}
function randomteam(names=[],teams=[]){
    let output = {};
    for(let ii = 0; ii < teams.length; ii++){
        output[teams[ii]] = [];
    }
    for(let i = 0; i < names.length; i++){
        let rand = Math.floor(Math.random()*teams.length);
        output[teams[rand]].push(names[i]);
    }
    let map = ['FRACTURE','BREEZE','ICEBOX','BIND','HAVEN','SPLIT','ASCENT'];
    let random = Math.floor(Math.random()*map.length);
    output['map'] = map[random];
    return output;
}