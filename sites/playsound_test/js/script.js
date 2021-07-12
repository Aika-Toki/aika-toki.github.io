let audioCtx;
const AudioContext = window.AudioContext || window.webkitAudioContext;
let noteNum = 0;
let hertz = 0;
let i = 0;
let request, source, soundTick = 1, audio1, audio2, audio3, isEndedAudio1 = true, isEndedAudio2 = true, isEndedAudio3 = true, d=document, audio4, isEndedAudio4 = true;
let audio5, isEndedAudio5 = true;
let audio6, isEndedAudio6 = true;
let audio7, isEndedAudio7 = true;
let audio8, isEndedAudio8 = true;
let audio9, isEndedAudio9 = true;
let audio10, isEndedAudio10 = true;
let audio11, isEndedAudio11 = true;
let audio12, isEndedAudio12 = true;
let audio13, isEndedAudio13 = true;
let audio14, isEndedAudio14 = true;
let audio15, isEndedAudio15 = true;
let audio16, isEndedAudio16 = true;

function audio1Ended() { 
    let audio1End = setInterval(function() {
        isEndedAudio1 = true;
        clearInterval(audio1End);
    }, 800);
}
function audio2Ended() {
    let audio2End = setInterval(function() {
        isEndedAudio2 = true;
        clearInterval(audio2End);
    }, 800);
}
function audio3Ended() {
    let audio3End = setInterval(function() {
        isEndedAudio3 = true;
        clearInterval(audio3End);
    }, 800);
}
function audio4Ended() { 
    let audio4End = setInterval(function() {
        isEndedAudio4 = true;
        clearInterval(audio4End);
    }, 800);
}
function audio5Ended() { 
    let audio5End = setInterval(function() {
        isEndedAudio5 = true;
        clearInterval(audio5End);
    }, 800);
}
function audio6Ended() { 
    let audio6End = setInterval(function() {
        isEndedAudio6 = true;
        clearInterval(audio6End);
    }, 800);
}
function audio7Ended() { 
    let audio7End = setInterval(function() {
        isEndedAudio7 = true;
        clearInterval(audio7End);
    }, 800);
}
function audio8Ended() { 
    let audio8End = setInterval(function() {
        isEndedAudio8 = true;
        clearInterval(audio8End);
    }, 800);
}
function audio9Ended() { 
    let audio9End = setInterval(function() {
        isEndedAudio9 = true;
        clearInterval(audio9End);
    }, 800);
}
function audio10Ended() { 
    let audio10End = setInterval(function() {
        isEndedAudio10 = true;
        clearInterval(audio10End);
    }, 800);
}
function audio11Ended() { 
    let audio11End = setInterval(function() {
        isEndedAudio11 = true;
        clearInterval(audio11End);
    }, 800);
}
function audio12Ended() { 
    let audio12End = setInterval(function() {
        isEndedAudio12 = true;
        clearInterval(audio12End);
    }, 800);
}
function audio13Ended() { 
    let audio13End = setInterval(function() {
        isEndedAudio13 = true;
        clearInterval(audio13End);
    }, 800);
}
function audio14Ended() { 
    let audio14End = setInterval(function() {
        isEndedAudio14 = true;
        clearInterval(audio14End);
    }, 800);
}
function audio15Ended() { 
    let audio15End = setInterval(function() {
        isEndedAudio15 = true;
        clearInterval(audio15End);
    }, 800);
}
function audio16Ended() { 
    let audio16End = setInterval(function() {
        isEndedAudio16 = true;
        clearInterval(audio16End);
    }, 800);
}

function playsound1(v) {
    if(audio1 === undefined) {
        audio1 = new Audio('./sounds/harp.ogg');
        audio1.preservesPitch = false;
    }
    audio1.pause();
    audio1.currentTime = 0;
    audio1.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log(`execute @a[scores={soundTick=${soundTick}}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 ${0.5*(2**(note[v]['n']/12))}@A1`);
    audio1.play();
    audio1.onended = audio1Ended();
}
function playsound2(v) {
    if(audio2 === undefined) {
        audio2 = new Audio('./sounds/harp.ogg');
        audio2.preservesPitch = false;
    }
    audio2.pause();
    audio2.currentTime = 0;
    audio2.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A2');
    audio2.play();
    audio2.onended = audio2Ended();
}
function playsound3(v) {
    if(audio3 === undefined) {
        audio3 = new Audio('./sounds/harp.ogg');
        audio3.preservesPitch = false;
    }
    audio3.pause();
    audio3.currentTime = 0;
    audio3.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A3');
    audio3.play();
    audio3.onended = audio3Ended();
}
function playsound4(v) {
    if(audio4 === undefined) {
        audio4 = new Audio('./sounds/harp.ogg');
        audio4.preservesPitch = false;
    }
    audio4.pause();
    audio4.currentTime = 0;
    audio4.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A4');
    audio4.play();
    audio4.onended = audio4Ended();
}
function playsound5(v) {
    if(audio5 === undefined) {
        audio5 = new Audio('./sounds/harp.ogg');
        audio5.preservesPitch = false;
    }
    audio5.pause();
    audio5.currentTime = 0;
    audio5.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A5');
    audio5.play();
    audio5.onended = audio5Ended();
}
function playsound6(v) {
    if(audio6 === undefined) {
        audio6 = new Audio('./sounds/harp.ogg');
        audio6.preservesPitch = false;
    }
    audio6.pause();
    audio6.currentTime = 0;
    audio6.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A6');
    audio6.play();
    audio6.onended = audio6Ended();
}
function playsound7(v) {
    if(audio7 === undefined) {
        audio7 = new Audio('./sounds/harp.ogg');
        audio7.preservesPitch = false;
    }
    audio7.pause();
    audio7.currentTime = 0;
    audio7.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A7');
    audio7.play();
    audio7.onended = audio7Ended();
}
function playsound8(v) {
    if(audio8 === undefined) {
        audio8 = new Audio('./sounds/harp.ogg');
        audio8.preservesPitch = false;
    }
    audio8.pause();
    audio8.currentTime = 0;
    audio8.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A8');
    audio8.play();
    audio8.onended = audio8Ended();
}
function playsound9(v) {
    if(audio9 === undefined) {
        audio9 = new Audio('./sounds/harp.ogg');
        audio9.preservesPitch = false;
    }
    audio9.pause();
    audio9.currentTime = 0;
    audio9.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A9');
    audio9.play();
    audio9.onended = audio9Ended();
}
function playsound10(v) {
    if(audio10 === undefined) {
        audio10 = new Audio('./sounds/harp.ogg');
        audio10.preservesPitch = false;
    }
    audio10.pause();
    audio10.currentTime = 0;
    audio10.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A10');
    audio10.play();
    audio10.onended = audio10Ended();
}
function playsound11(v) {
    if(audio11 === undefined) {
        audio11 = new Audio('./sounds/harp.ogg');
        audio11.preservesPitch = false;
    }
    audio11.pause();
    audio11.currentTime = 0;
    audio11.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A11');
    audio11.play();
    audio11.onended = audio11Ended();
}
function playsound12(v) {
    if(audio12 === undefined) {
        audio12 = new Audio('./sounds/harp.ogg');
        audio12.preservesPitch = false;
    }
    audio12.pause();
    audio12.currentTime = 0;
    audio12.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A12');
    audio12.play();
    audio12.onended = audio12Ended();
}
function playsound13(v) {
    if(audio13 === undefined) {
        audio13 = new Audio('./sounds/harp.ogg');
        audio13.preservesPitch = false;
    }
    audio13.pause();
    audio13.currentTime = 0;
    audio13.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A13');
    audio13.play();
    audio13.onended = audio13Ended();
}
function playsound14(v) {
    if(audio14 === undefined) {
        audio14 = new Audio('./sounds/harp.ogg');
        audio14.preservesPitch = false;
    }
    audio14.pause();
    audio14.currentTime = 0;
    audio14.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A14');
    audio14.play();
    audio14.onended = audio14Ended();
}
function playsound15(v) {
    if(audio15 === undefined) {
        audio15 = new Audio('./sounds/harp.ogg');
        audio15.preservesPitch = false;
    }
    audio15.pause();
    audio15.currentTime = 0;
    audio15.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A15');
    audio15.play();
    audio15.onended = audio15Ended();
}
function playsound16(v) {
    if(audio16 === undefined) {
        audio16 = new Audio('./sounds/harp.ogg');
        audio16.preservesPitch = false;
    }
    audio16.pause();
    audio16.currentTime = 0;
    audio16.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A16');
    audio16.play();
    audio16.onended = audio16Ended();
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
    source.start(note[v]['d']*50/800);
};

function sleepGram(tick) {
    return new Promise(resolve => setTimeout(resolve, tick*50));
}

async function notePlay(i) {
        await sleepGram(note[i]['d']);
        if (isEndedAudio1) {
            isEndedAudio1 = false;
            playsound1(i);
        } else if (isEndedAudio2) {
            isEndedAudio2 = false;
            playsound2(i);
        } else if (isEndedAudio3) {
            isEndedAudio3 = false;
            playsound3(i);
        } else if (isEndedAudio4) {
            isEndedAudio4 = false;
            playsound4(i);
        } else if (isEndedAudio5) {
            isEndedAudio5 = false;
            playsound5(i);
        } else if (isEndedAudio6) {
            isEndedAudio6 = false;
            playsound6(i);
        } else if (isEndedAudio7) {
            isEndedAudio7 = false;
            playsound7(i);
        } else if (isEndedAudio8) {
            isEndedAudio8 = false;
            playsound8(i);
        } else if (isEndedAudio9) {
            isEndedAudio9 = false;
            playsound9(i);
        } else if (isEndedAudio10) {
            isEndedAudio10 = false;
            playsound10(i);
        } else if (isEndedAudio11) {
            isEndedAudio11 = false;
            playsound11(i);
        } else if (isEndedAudio12) {
            isEndedAudio12 = false;
            playsound12(i);
        } else if (isEndedAudio13) {
            isEndedAudio13 = false;
            playsound13(i);
        } else if (isEndedAudio14) {
            isEndedAudio14 = false;
            playsound14(i);
        } else if (isEndedAudio15) {
            isEndedAudio15 = false;
            playsound15(i);
        } else if (isEndedAudio16) {
            isEndedAudio16 = false;
            playsound16(i);
        }
        document.querySelector('label').innerText = soundTick;
}

function start() {
    i = 0;
    soundTick = 1;
    started();
}
async function started() {
    for (let i = 0; i <= note.length - 1; i++) {
        await notePlay(i);
    }
}

function cmdGen() {
    let atn = d.querySelector('#audioThreadNum').value;
    d.querySelector('#definition').innerText =
`let audio${atn}, isEndedAudio${atn} = true;
`;
    d.querySelector('#functionPlaysound').innerText = 
`
function playsound${atn}(v) {
    if(audio${atn} === undefined) {
        audio${atn} = new Audio('./sounds/harp.ogg');
        audio${atn}.preservesPitch = false;
    }
    audio${atn}.pause();
    audio${atn}.currentTime = 0;
    audio${atn}.playbackRate = 0.5*(2**(note[v]['n']/12));
    soundTick = soundTick + note[v]['d'];
    console.log('execute @a[scores={soundTick='+soundTick+'}] ~ ~ ~ playsound note.harp @a ~ ~ ~ 0.8 '+String(0.5*(2**(note[v]['n']/12)))+'@A${atn}');
    audio${atn}.play();
    audio${atn}.onended = audio${atn}Ended();
}`;
    d.querySelector('#functionAudioEnded').innerText =
`
function audio${atn}Ended() { 
    let audio${atn}End = setInterval(function() {
        isEndedAudio${atn} = true;
        clearInterval(audio${atn}End);
    }, 800);
}`;
    d.querySelector('#inNotePlay').innerText =
` else if (isEndedAudio${atn}) {
    isEndedAudio${atn} = false;
    playsound${atn}(i);
}`;
}
function copyFAE() {
    let str = d.querySelector('#functionAudioEnded').innerText;
    let listener = function(e){
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
        d.removeEventListener('copy', listener);
    }
    d.addEventListener('copy', listener);
    d.execCommand('copy');
    copied();
}
function copyFPS() {
    let str = d.querySelector('#functionPlaysound').innerText;
    let listener = function(e){
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
        d.removeEventListener('copy', listener);
    }
    d.addEventListener('copy', listener);
    d.execCommand('copy');
    copied();
}
function copyINP() {
    let str = d.querySelector('#inNotePlay').innerText;
    let listener = function(e){
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
        d.removeEventListener('copy', listener);
    }
    d.addEventListener('copy', listener);
    d.execCommand('copy');
    copied();
}
function copyD() {
    let str = d.querySelector('#definition').innerText;
    let listener = function(e){
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
        d.removeEventListener('copy', listener);
    }
    d.addEventListener('copy', listener);
    d.execCommand('copy');
    copied();
}
function copied() {
    d.querySelector('#infobar').className = 'open';
    let untilRemoveOpen = setInterval(function() {
        d.querySelector('#infobar').className = '';
        clearInterval(untilRemoveOpen);
    },3000);
}