let audioCtx;
const AudioContext = window.AudioContext || window.webkitAudioContext;
let noteNum = 0;
let hertz = 0;
note = [
    {n:0,d:0},
    {n:4,d:5},
    {n:15,d:0},
    {n:16,d:0},
    {n:16,d:5}
];
let i = 0;
let request, source, soundTick = 1;

function playsound(v) {
    audio = new Audio('./sounds/harp.ogg');
    audio.preservesPitch = false;
    audio.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log(`execute @a[scores={soundTick=${soundTick}}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 ${0.5*(2**(note[v]['n']/12))}`);
    audio.play();
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
    source.start(note[v]['d']*50/1000);
};

function sleepGram(tick) {
    return new Promise(resolve => setTimeout(resolve, tick*50));
}

async function notePl(tick, i) {
    await sleepGram(tick);
    playsound(i);
}

function playnote(n) {
    console.log(`note=${n}`);
    noteNum = n + 54;
    hertz = 440 * (2**((noteNum - 69) / 12));
    playHz(hertz);
}

function start() {
    i = 0;
    soundTick = 1;
    for (let i = 0; i <= note.length - 1; i++) {
//        playsound(i);
        notePl(note[i]['d'], i);
    }
}