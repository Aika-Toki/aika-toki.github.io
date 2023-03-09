const d = document,w = window;
const c = d.querySelector('code#cfgdata');
d.querySelector('#resolution-cfg > button').addEventListener('click',()=>{
    Swal.fire({
        title: '解像度を入力',
        html: `<input type="number" id="resolution-width" class="swal2-input" placeholder="Width"><input type="number" id="resolution-height" class="swal2-input" placeholder="Height">`,
        confirmButtonText: 'OK',
        focusConfirm: false,
        preConfirm:()=>{
            const width = Swal.getPopup().querySelector('#resolution-width').value,height = Swal.getPopup().querySelector('#resolution-height').value;
            return {width : width, height: height};
        }
    }).then((result) =>{
        let cfg = cfgcode();
        cfg.canvas.resolution = {width:result.value.width,height:result.value.height};
        cfgcode('s',cfg);
        reload();
    });
});
function cfgcode(mode="p",cfg){
    if(mode == "p"){
        console.log(JSON.parse(c.innerText));
        console.log("config parsed");
        return JSON.parse(c.innerText);
    } else if (mode == "s"){
        c.innerText = JSON.stringify(cfg);
        console.log(JSON.stringify(cfg));
        console.log("config overwrited")
    }
}
function reload(){
    let cfg = cfgcode();
    labelLoad(cfg);
    draw();
}
function labelLoad(cfg){
    let labels = ['resolution-cfg'];
    let values = [`${cfg.canvas.resolution.width}x${cfg.canvas.resolution.height}`];
    for(let i = 0; i < labels.length; i++){
        d.querySelector(`div#${labels[i]} > label`).innerText = values[i];
    }
}
function demo(){
    document.querySelector('textarea').value = "context.fillStyle = '#fff';\ncontext.fillRect(0,0,canvas.width,canvas.height);";
    let cfg = cfgcode();
    cfg.canvas.resolution.width = 1920;
    cfg.canvas.resolution.height = 1080;
    reload();
}
function draw(){
    document.querySelector('script#main').remove();
    let script = document.createElement('script');
    script.id = "main";
    script.innerHTML = `
function drawmain(){
    let cfg = cfgcode("p");
    const previewResolution = [document.querySelector('div#preview').clientWidth,document.querySelector('div#preview').clientHeight];
    const canvasResolution = [Number(cfg.canvas.resolution.width),Number(cfg.canvas.resolution.height)];
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext('2d');
    canvas.setAttribute('width',canvasResolution[0]);
    canvas.setAttribute('height',canvasResolution[1]);
    const canvasClientResolution = [canvas.clientWidth,canvas.clientHeight];
    console.log("["+previewResolution[0]+","+previewResolution[1]+"] : ["+canvasClientResolution[0]+","+canvasClientResolution[1]+"]");
    if(previewResolution[0]>=previewResolution[1]){
        if(canvasClientResolution[0]>=canvasClientResolution[1]){
            if(canvasClientResolution[0]>=previewResolution[0]&&canvasClientResolution[1]>=previewResolution[1]){
                // canvas.className = "";
                console.log("h0-0");
            } else if(canvasClientResolution[0]>=previewResolution[0]){
                // canvas.className = ""
                console.log("h0-1");
            } else if(canvasClientResolution[1]>=previewResolution[1]){
                canvas.className = "heightfit"
                console.log("h0-2");
            } else {
                canvas.className = "widthfit";
                console.log("h0-3");
            }
        } else {
            if(canvasClientResolution[0]>=previewResolution[0]&&canvasClientResolution[1]>=previewResolution[1]){
                canvas.className = "heightfit";
                console.log("h1-0");
            } else if(canvasClientResolution[0]>=previewResolution[0]){
                canvas.className = "widthfit"
                console.log("h1-1");
            } else if(canvasClientResolution[1]>=previewResolution[1]){
                canvas.className = "heightfit"
                console.log("h1-2");
            } else {
                canvas.className = "widthfit";
                console.log("h1-3");
            }
        }
    } else {
        if(canvasClientResolution[0]>=canvasResolution[1]){
            if(canvasClientResolution[0]>=previewResolution[0]&&canvasClientResolution[1]>=previewResolution[1]){
                canvas.className = "widthfit";
                console.log("v0-0");
            } else if(canvasClientResolution[0]>=previewResolution[0]){
                canvas.className = "widthfit"
                console.log("v0-1");
            } else if(canvasClientResolution[1]>=previewResolution[1]){
                canvas.className = "heightfit"
                console.log("v0-2");
            } else {
                canvas.className = "widthfit";
                console.log("v0-3");
            }
        } else {
            if(canvasClientResolution[0]>=previewResolution[0]&&canvasClientResolution[1]>=previewResolution[1]){
                canvas.className = "heightfit";
                console.log("v1-0");
            } else if(canvasClientResolution[0]>=previewResolution[0]){
                canvas.className = "widthfit"
                console.log("v1-1");
            } else if(canvasClientResolution[1]>=previewResolution[1]){
                canvas.className = "heightfit"
                console.log("v1-2");
            } else {
                canvas.className = "widthfit";
                console.log("v1-3");
            }
        }
    }
    ${document.querySelector('textarea').value}
}`;
    document.body.appendChild(script);
    drawmain();
}
function codeAppend(code){
    document.querySelector('textarea').value = document.querySelector('textarea').value + "\n" + code;
}
function codeClear(){
    document.querySelector('textarea').value = "";
}
window.addEventListener('resize',draw);