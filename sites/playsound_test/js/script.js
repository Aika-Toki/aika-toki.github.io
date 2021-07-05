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
let request, source;

function playsound(v) {
    request = new XMLHttpRequest();
    request.open("GET","./sounds/harp.wav",true);
    request.responseType = "arraybuffer";
    request.onload = completeOnLoad(v);
    request.send();
}

function completeOnLoad(v) {
    audioCtx = new AudioContext();
    source = audioCtx.createBufferSource();

    audioCtx.decodeAudioData(request.response, function (buf) {
        source.buffer = buf;
        source.loop = false;
    });

    source.connect(audioCtx.destination);
    source.playbackRate.value = 0.5*(2**(note[v]['n']/12));
    source.start(0);
};

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

function start() {
    i = 0;
    for (let i = 0; i <= note.length - 1; i++) {
        setInterval(playsound(i), note[i]['d']*50);
    }
}