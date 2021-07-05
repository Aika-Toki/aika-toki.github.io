let audioCtx;
let noteNum = 0;
let hertz = 0;
note = [
    {n:0,d:0},
    {n:4,d:5},
    {n:15,d:1},
    {n:16,d:1},
    {n:16,d:5}
];
let i = 0;
const request = new XMLHttpRequest();
request.open('GET','./sounds/harp.ogg',true);
request.responseType = 'arraybuffer';
let bufferSourceNode, gainNode;

request.onload = function() {
    audioCtx = new AudioContext();
    audioCtx.decodeAudioData(request.response, function (buffer) {
        bufferSourceNode = audioCtx.createBufferSource();
        gainNode = audioCtx.createGain();

        bufferSourceNode.buffer = buffer;
        bufferSourceNode.loop = false;

        bufferSourceNode.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        document.getElementById('play').onclick = function () {
            while (i <= note.length - 1) {
                sleep(note[i]['d'], function () {
                    console.log(`note=${note[i]['n']}`);
                    bufferSourceNode.playbackRate.value = 0.5*(2**(note[i]['n']/12));
                    bufferSourceNode.start();
                    if (i <= note.length - 1) {
                        playsound();
                    }
                });
            }
        }
    });
};

request.send();
function sleep(tick,callfunc) {
    let spanedTick = 0;
    let id = setInterval(function() {
        spanedTick++;
        if (spanedTick >= tick) {
            clearInterval(id);
            if (callfunc) callfunc();
        }
    }, 50);
}

function playnote(n) {
    console.log(`note=${n}`);
    noteNum = n + 54;
    hertz = 440 * (2**((noteNum - 69) / 12));
    playHz(hertz);
}
function playsound() {
    if(i <= note.length - 1) {
        play();
        i++;
    }
}

function start() {
    i = 0;
    playsound();
}