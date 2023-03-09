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
width = "",
loop = 0,
shuffle = 0;
const apiurl = "https://script.google.com/macros/s/AKfycbzpK34WhbSNwqhtiExfwxraUo0eC5mbJOsrPJoWdsGr_1nvVJo5wi4WVUZz8mpS28kq/exec";


let playlistComp = [];
// for(let i = 0; playlists.length > i+1; i=i+2) {
//   playlistsComp[playlists[i]] = playlists[i+1];
// }
let audioPlayList =[];

function audioChange() {
  audioValue = d.getElementById('audioList').value;
  audio.pause();
  audio.currentTime = 0;
  if (play === 0) {
    play = 1;
  } else {
    play = 0;
  }
  if (audioPlayList[audioValue]['f'] === '') {
    audio = new Audio(`${audioPlayList[audioValue]['p']}`);
  } else if (audioPlayList[audioValue]['p'] === '') {
    audio = new Audio(`https://aika-toki.github.io/others/library/AudioLibRaw/${audioPlayList[audioValue]['f']}`);
  } else {
    audio = new Audio(`${audioPlayList[audioValue]['p']}${audioPlayList[audioValue]['f']}`);
  }
  current = 0;
  duration = Math.round(audio.duration);
  timeUpdate();
  if (audioPlayList[audioValue]['t'] === '') {
    d.getElementById('audioTitle').innerText = audioPlayList[audioValue]['f'];
  } else {
    d.getElementById('audioTitle').innerText = audioPlayList[audioValue]['t'];
  }
  if (audioPlayList[audioValue]['a'] === '') {
    d.getElementById('audioArtist').innerText = '不明';
  } else {
    d.getElementById('audioArtist').innerText = audioPlayList[audioValue]['a'];
  }
  d.getElementById('current').innerText = '00:00';
  d.getElementById('duration').innerText = '**:**';
  d.getElementById('seekbar').style.backgroundSize = '0%';
  d.getElementById('progressbar').style.backgroundSize = '0%';
  d.getElementById('speedChanger').value = 1.0;
  speedChange();
  d.getElementById('playerbg').style.backgroundImage = `url("${audioPlayList[audioValue]['n']}")`;
  audio.volume = d.getElementById('volumeRange').value;
  playPauseAudio();
}
function load() {
  const audioList = d.getElementById('audioList');
  // if(audioList.querySelector('option') != undefined) {
  //   return false;
  // }
      for(let i = 0; i < audioPlayList.length; i++) {
        let optione = d.createElement('option');
        optione.setAttribute('value', i);
        if (audioPlayList[i]['t'] === '') {
          optione.innerHTML = audioPlayList[i]['f'];
        } else {
          optione.innerHTML = audioPlayList[i]['t'];
        }
        audioList.appendChild(optione);
      }
      audioValue = d.getElementById('audioList').value;
      if(audioValue === ""){audioValue=0;}
      if (audioPlayList[audioValue]['f'] === '') {
        audio = new Audio(`${audioPlayList[audioValue]['p']}`);
      } else if (audioPlayList[audioValue]['p'] === '') {
        audio = new Audio(`https://aika-toki.github.io/others/library/AudioLibRaw/${audioPlayList[audioValue]['f']}`);
      } else {
        audio = new Audio(`${audioPlayList[audioValue]['p']}${audioPlayList[audioValue]['f']}`);
      }
      audio.load();
      d.getElementById('speedVal').innerText = '1x';
      d.getElementById('volumeVal').innerText = '100%';
      timeUpdate();
      if (audioPlayList[audioValue]['t'] === '') {
        d.getElementById('audioTitle').innerText = audioPlayList[audioValue]['f'];
      } else {
        d.getElementById('audioTitle').innerText = audioPlayList[audioValue]['t'];
      }
      if (audioPlayList[audioValue]['a'] === '') {
        d.getElementById('audioArtist').innerText = '不明';
      } else {
        d.getElementById('audioArtist').innerText = audioPlayList[audioValue]['a'];
      }
      audioList.setAttribute('size', audioPlayList.length);
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
        timeUpdate();
      }
      d.getElementById('seekbar').style.backgroundSize = 0;
      d.getElementById('progressbar').style.backgroundSize = 0;
}

// function audioAdded(valueee) {
//   $.getJSON(jsonurl, (data) => {
//     jsondata = data;
//     audioPlayList.push(data);
//   });
// }

function playPauseAudio() {
    if (play === 0) {
        play = 1;
        audio.play();
        d.getElementById('playPause').innerHTML = '<i class="fas fa-pause"></i>';
        d.getElementById('playPause').setAttribute('title', '一時停止');
    } else if (play === 1){
        play = 0;
        audio.pause();
        d.getElementById('playPause').innerHTML = '<i class="fas fa-play"></i>';
        d.getElementById('playPause').setAttribute('title', '再生');
    } else {
        play = 0;
        audio.pause();
        audio.currentTime = 0;
        d.getElementById('playPause').innerHTML = '<i class="fas fa-undo-alt"></i>';
        d.getElementById('playPause').setAttribute('title', 'もう一度再生');
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
        if (loop === 0) {
          play = 2;
          playPauseAudio();
        } else if (loop === 1) {
          play = 0;
          playPauseAudio();
        } else if (loop === 2) {
          play = 0;
          if(shuffle === 0){
            if (d.getElementById('audioList').value === String(audioPlayList.length - 1)) {
              d.getElementById('audioList').value = 0;
            } else {
              ++d.getElementById('audioList').value;
            }
          } else {
            d.getElementById('audioList').value = Math.floor(Math.random() * audioPlayList.length);
          }
          audioChange();
          playPauseAudio();
        }
      }
}

function prevFile() {
  if (audio.currentTime <= 0.5) {
    let aL = d.getElementById('audioList');
    if(aL.value === "0") {
      aL.value = audioPlayList.length - 1;
    } else {
      --aL.value;
    }
    audioChange();
  } else {
    audio.currentTime = 0;
    timeUpdate();
  }
}

function nextFile() {
  let aL = d.getElementById('audioList');
  if(shuffle === 0){
    if(aL.value === String(audioPlayList.length - 1)) {
      aL.value = 0;
    } else {
      ++aL.value;
    }
  } else {
    aL.value = Math.floor(Math.random() * audioPlayList.length);
  }
  audioChange();
}

function rewind() {
  if (audio.currentTime < 5) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = audio.currentTime - 5;
  }
  timeUpdate();
}

function skip() {
  if (audio.duration - audio.currentTime < 5) {
    audio.currentTime = audio.duration;
  } else {
    audio.currentTime = audio.currentTime + 5;
  }
  timeUpdate();
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
  d.getElementById('volumeVal').innerText = `${Math.round(d.getElementById('volumeRange').value * 100)}%`;
  audio.volume = d.getElementById('volumeRange').value;
}

function shiftLoopMode() {
  let loopButton = d.getElementById('loop');
  if (loop === 0) {
    loop = 1;
    loopButton.innerHTML = '<i class="fas fa-repeat-1 loopEnable"></i>';
    loopButton.setAttribute('title', '1曲ループ');
  } else if (loop === 1) {
    loop = 2;
    loopButton.innerHTML = '<i class="fas fa-repeat loopEnable"></i>';
    loopButton.setAttribute('title', '全てループ');
  } else {
    loop = 0;
    loopButton.innerHTML = '<i class="fas fa-repeat"></i>';
    loopButton.setAttribute('title', 'ループ')
  }
}

function toggleShuffle() {
  let randbtn = d.getElementById('shuffle');
  if (shuffle === 0) {
    shuffle = 1;
    randbtn.innerHTML = '<i class="far fa-random shuffleEnable"></i>';
  } else {
    shuffle = 0;
    randbtn.innerHTML = '<i class="far fa-random"></i>';
  }
}