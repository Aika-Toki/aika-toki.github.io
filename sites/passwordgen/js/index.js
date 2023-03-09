const d = document;
let rangePercent,rangeValue;
function lengthchanged(){
    rangechanged('length');
    // d.querySelector('#lengthLabel').querySelector('b').innerText = d.querySelector('#length').value;
}
function countchanged(){
    rangechanged('count');
    // d.querySelector('#countLabel').querySelector('b').innerText = d.querySelector('#count').value;
}
function rangechanged(rangeid){
    let rangeElement = d.querySelector(`#${rangeid}[type="range"]`);
    rangeValue = rangeElement.value;
    rangePercent = (rangeElement.value/rangeElement.max)*100;
    let rangeIndicatorElement = d.querySelector(`#${rangeid}[type="range"]`).nextElementSibling;
    console.log([rangeElement.outerHTML,rangeValue,rangePercent,rangeIndicatorElement.outerHTML]);
    rangeIndicatorElement.querySelector('h4').innerHTML=rangeValue+'<span></span>';
    rangeIndicatorElement.querySelector('h4').style.transform = 'translateX(-50%)';
    rangeIndicatorElement.querySelector('h4').style.left = rangePercent+'%';
}
function checkboxChanged(){
    if(d.querySelectorAll('[type="checkbox"]:checked').length === 1) {
        d.querySelector('[type="checkbox"]:checked').setAttribute("disabled", "");
    } else {
        d.querySelector('[type="checkbox"]:disabled').removeAttribute("disabled");
    }
}
function generate() {
    let category = [];
    const number = "0123456789",
    smallLetter = "abcdefhijkmnopqrstuvwxyz",
    bigLetter = "ABCDEFGHJKLMNPQRSTUVWXYZ",
    simbol = "`~!@#$%^&*()_+-={}[]¥|:;'<>,.?/";
    if(d.querySelector('#allowNumber').checked===true){
        category.push(number);
    }
    if(d.querySelector('#allowSmallLetter').checked===true){
        category.push(smallLetter);
    }
    if(d.querySelector('#allowBigLetter').checked===true){
        category.push(bigLetter);
    }
    if(d.querySelector('#allowSimbol').checked===true){
        category.push(simbol);
    }
    let passwordAmount = d.querySelector('#count').value,
    passwordLength = d.querySelector('#length').value,
    password = '',
    passwordCharacter,
    pelement;
    d.querySelector('#result').innerHTML = '';
    for(i = 0; i < passwordAmount; i++){
        for(ii = 0; ii < passwordLength; ii++){
            passwordCharacter = category[Math.floor(Math.random()*category.length)].charAt(Math.floor(Math.random()*category[Math.floor(Math.random()*category.length)].length));
            password = password.concat(passwordCharacter);
        }
        pelement = d.createElement("textarea");
        pelement.innerText = password;
        pelement.id = "passwordContent"+i;
        pelement.setAttribute("readonly",'');
        pelement.addEventListener('mouseover',(e)=>{console.log(e.target.id);d.querySelector('#'+e.target.id).select();},false);
        d.querySelector('#result').appendChild(pelement);
        password = "";
    }
}