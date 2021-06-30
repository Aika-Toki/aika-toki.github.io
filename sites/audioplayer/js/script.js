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
loop = 0;


//Lists
let audioPathList = [
  {
    'file': 'roudoku2021from04.mp3',
    'title': '朗読部門（2021年4月〜中国語学習開始）　読み上げ音声',
    'artist': 'TTSMP3.com',
    'art': '',
    'path': ''
  },
  {
    'file': 'shigh.mp3',
    'title': '夢で描けば　耳コピ',
    'artist': '矢歌絵音',
    'art': 'https://et-cdn.shoeisha.jp/static/images/article/4778/4778_005.jpg',
    'path': ''
  },
  {
    'file': 'tondemowonders.mp3',
    'title': 'トンデモワンダーズ',
    'artist': 'sasakure.UK',
    'art': 'http://img.youtube.com/vi/dBQg24mx45Y/maxresdefault.jpg',
    'path': ''
  },
  {
    'file': 'sinigami.mp3',
    'title': '死神',
    'artist': '米津玄師',
    'art': 'http://img.youtube.com/vi/8nxaZ69ElEc/maxresdefault.jpg',
    'path': ''
  },
  {
    'file': 'tadasentakugaatta.mp3',
    'title': 'ただ選択があった',
    'artist': 'Frog96',
    'art': 'http://img.youtube.com/vi/FrIiEuNPE38/maxresdefault.jpg',
    'path': ''
  },
  {
    'file': '',
    'title': 'ハンター見習い',
    'artist': 'H/MIX GALLERY',
    'art': 'http://img.youtube.com/vi/ZZ8CTqP-py4/maxresdefault.jpg',
    'path': 'http://www.hmix.net/music/n/n37.mp3'
  },
  {
    'file': '',
    'title': '馬車道',
    'artist': 'H/MIX GALLERY',
    'art': 'http://img.youtube.com/vi/tgijC899HWY/maxresdefault.jpg',
    'path': 'http://www.hmix.net/music/o/o12.mp3'
  }
  ];


window.onload = function () {
  let audioList = d.getElementById('audioList');
  d.createElement('option')
  for (let i = 0; i <= audioPathList.length - 1; i++){
    let option = d.createElement('option');
    option.setAttribute('value', i);
    if (audioPathList[i]['title'] === '') {
      option.innerHTML = audioPathList[i]['file'];
    } else {
      option.innerHTML = audioPathList[i]['title'];
    }
    audioList.appendChild(option);
  };
  audioValue = d.getElementById('audioList').value;
  if (audioPathList[audioValue]['file'] === '') {
    audio = new Audio(`${audioPathList[audioValue]['path']}`);
  } else if (audioPathList[audioValue]['path'] === '') {
    audio = new Audio(`./sounds/${audioPathList[audioValue]['file']}`);
  } else {
    audio = new Audio(`${audioPathList[audioValue]['path']}${audioPathList[audioValue]['file']}`);
  }
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
    timeUpdate();
  }
  if (audioPathList[audioValue]['title'] === '') {
    d.getElementById('audioTitle').innerText = audioPathList[audioValue]['file'];
  } else {
    d.getElementById('audioTitle').innerText = audioPathList[audioValue]['title'];
  }
  if (audioPathList[audioValue]['artist'] === '') {
    d.getElementById('audioArtist').innerText = '不明';
  } else {
    d.getElementById('audioArtist').innerText = audioPathList[audioValue]['artist'];
  }
  d.getElementById('seekbar').style.backgroundSize = 0;
  d.getElementById('progressbar').style.backgroundSize = 0;
  audioList.setAttribute('size', audioPathList.length)
}

function audioChange() {
  audioValue = d.getElementById('audioList').value;
  audio.pause();
  audio.currentTime = 0;
  if (play === 0) {
    play = 1;
  } else {
    play = 0;
  }
  if (audioPathList[audioValue]['file'] === '') {
    audio = new Audio(`${audioPathList[audioValue]['path']}`);
  } else if (audioPathList[audioValue]['path'] === '') {
    audio = new Audio(`./sounds/${audioPathList[audioValue]['file']}`);
  } else {
    audio = new Audio(`${audioPathList[audioValue]['path']}${audioPathList[audioValue]['file']}`);
  }
  current = 0;
  duration = Math.round(audio.duration);
  timeUpdate();
  if (audioPathList[audioValue]['title'] === '') {
    d.getElementById('audioTitle').innerText = audioPathList[audioValue]['file'];
  } else {
    d.getElementById('audioTitle').innerText = audioPathList[audioValue]['title'];
  }
  if (audioPathList[audioValue]['artist'] === '') {
    d.getElementById('audioArtist').innerText = '不明';
  } else {
    d.getElementById('audioArtist').innerText = audioPathList[audioValue]['artist'];
  }
  d.getElementById('current').innerText = '00:00';
  d.getElementById('duration').innerText = '**:**';
  d.getElementById('seekbar').style.backgroundSize = '0%';
  d.getElementById('progressbar').style.backgroundSize = '0%';
  d.getElementById('speedChanger').value = 1.0;
  speedChange();
  d.getElementById('playerbg').style.backgroundImage = `url("${audioPathList[audioValue]['art']}")`;
  audio.volume = d.getElementById('volumeRange').value;
  playPauseAudio();
}

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
          if (d.getElementById('audioList').value === String(audioPathList.length - 1)) {
            d.getElementById('audioList').value = 0;
          } else {
            ++d.getElementById('audioList').value;
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
      aL.value = audioPathList.length - 1;
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
  if(aL.value === String(audioPathList.length - 1)) {
    aL.value = 0;
  } else {
    ++aL.value;
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