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