const d = document;
let audioValue = "",
audio = "", 
play = 0, 
current = Math.floor(audio.currentTime), 
duration = Math.round(audio.duration), 
timeUpdateAvailableConditionsRes = "",
mouse = "",
element = "",
rect = "",
position = "",
offset = "",
width = "";


//Lists
let audioPathList = ['roudoku2021from04.mp3','shigh.mp3','tondemowonders.mp3'];


window.onload = function () {
  let audioList = d.getElementById('audioList');
  d.createElement('option')
  for (let i = 0; i <= audioPathList.length - 1; i++){
    let option = d.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = audioPathList[i];
    audioList.appendChild(option);
  };
  audioValue = d.getElementById('audioList').value;
  audio = new Audio(`./sounds/${audioPathList[audioValue]}`);
  audio.load();
  d.getElementById('speedVal').innerText = '1x';
  d.getElementById('volumeVal').innerText = '100%';
  timeUpdate();
  d.getElementById('seekarea').onclick = function (e) {
    if (e) event = e;
    const duration = Math.round(audio.duration)
    if(!isNaN(duration)){
      mouse = e.pageX;
      element = document.getElementById('seekarea');
      rect = element.getBoundingClientRect();
      position = rect.left + window.pageXOffset;
      offset = mouse - position;
      width = rect.right - rect.left;
      audio.currentTime = //Math.round
      (duration * (offset / width));
    }
  }
}

function audioChange() {
  audioValue = d.getElementById('audioList').value;
  audio.pause();
  audio.currentTime = 0;
  play = 1;
  playPauseAudio();
  audio = new Audio(`./sounds/${audioPathList[audioValue]}`);
  current = Math.floor(audio.currentTime);
  duration = Math.round(audio.duration);
  timeUpdate();
}

function playPauseAudio() {
    if (play === 0) {
        play = 1;
        audio.play();
        d.getElementById('playPause').innerHTML = '<i class="fas fa-pause"></i>';
    } else if (play === 1){
        play = 0;
        audio.pause();
        d.getElementById('playPause').innerHTML = '<i class="fas fa-play"></i>';
    } else {
        play = 0;
        audio.pause();
        audio.currentTime = 0;
        d.getElementById('playPause').innerHTML = '<i class="fas fa-undo-alt"></i>';
    }
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  play = 1;
  playPauseAudio();
}

function playTime (t) {
    let hms = ''
    const h = t / 3600 | 0
    const m = t % 3600 / 60 | 0
    const s = t % 60
    const z2 = (v) => {
      const s = '00' + v
      return s.substr(s.length - 2, 2)
    }
    if(h != 0){
      hms = h + ':' + z2(m) + ':' + z2(s)
    }else if(m != 0){
      hms = z2(m) + ':' + z2(s)
    }else{
      hms = '00:' + z2(s)
    }
    return hms
}
  
function timeUpdate() {
      current = Math.floor(audio.currentTime)
      duration = Math.round(audio.duration)
      if (!isNaN(duration)) {
        d.getElementById('current').innerText = playTime(current);
        d.getElementById('duration').innerText = playTime(duration);
        const percent = Math.round((audio.currentTime/audio.duration)*1000)/10;
        d.getElementById('seekbar').style.backgroundSize = percent + '%';
        if(audio.buffered.length > 0){
          const percent = Math.round((audio.buffered.end(audio.buffered.length-1)/audio.duration)*1000)/10
          document.getElementById('progressbar').style.backgroundSize = percent + '%'
        }
      }
      if (audio.ended === true) {
        play = 2;
        playPauseAudio();
      }
}

function timeUpdateAvailable() {
  if ((audio.currentTime < audio.duration || audio.currentTime === audio.duration)&& play > 0) {
    timeUpdate();
  } else {
    return false;
  }
}
setInterval(timeUpdateAvailable, 0);

function speedChange() {
  d.getElementById('speedVal').innerText = `${d.getElementById('speedChanger').value}x`;
  audio.playbackRate = d.getElementById('speedChanger').value;
}

function volumeChange() {
  d.getElementById('volumeVal').innerText = `${d.getElementById('volumeRange').value * 100}%`;
  audio.volume = d.getElementById('volumeRange').value;
}