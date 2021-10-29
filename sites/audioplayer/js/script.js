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
  {'f': 'none.mp3', 't': ' ', 'a': ' ', 'n': '', 'p': ''}
  ,{'f': 'roudoku2021from04.mp3', 't': '朗読部門（2021年4月〜中国語学習開始）　読み上げ音声', 'a': 'TTSMP3.com', 'n': '', 'p': ''}
  ,{'f': 'shigh.mp3', 't': '夢で描けば　耳コピ', 'a': '矢歌絵音', 'n': 'https://et-cdn.shoeisha.jp/static/images/article/4778/4778_005.jpg', 'p': ''}
  ,{'f': 'tondemowonders.mp3', 't': 'トンデモワンダーズ', 'a': 'sasakure.UK', 'n': 'http://img.youtube.com/vi/dBQg24mx45Y/maxresdefault.jpg', 'p': ''}
  ,{'f': 'sinigami.mp3', 't': '死神', 'a': '米津玄師', 'n': 'http://img.youtube.com/vi/8nxaZ69ElEc/maxresdefault.jpg', 'p': ''}
  ,{'f': 'tadasentakugaatta.mp3', 't': 'ただ選択があった', 'a': 'Frog96', 'n': 'http://img.youtube.com/vi/FrIiEuNPE38/maxresdefault.jpg', 'p': ''}
  ,{'f': 'mugenloop.mp3', 't': '無限ループのうた', 'a': 'ラムダ', 'n': 'http://img.youtube.com/vi/M5xKbaVXT8U/maxresdefault.jpg', 'p': ''}
  ,{'f': 'n37.mp3', 't': 'ハンター見習い', 'a': 'H/MIX GALLERY', 'n': 'http://img.youtube.com/vi/ZZ8CTqP-py4/maxresdefault.jpg', 'p': ''}
  ,{'f': 'o12.mp3', 't': '馬車道', 'a': 'H/MIX GALLERY', 'n': 'http://img.youtube.com/vi/tgijC899HWY/maxresdefault.jpg', 'p': ''}
  ,{'f': 'mgpdteto.mp3', 't': 'マシンガンポエムドール 重音テトカバー', 'a': 'COSMO@暴走P', 'n': 'http://img.youtube.com/vi/UgZFpO_Y6qo/maxresdefault.jpg', 'p': ''}
  ,{'f': 'MusMus-BGM-103.mp3', 't': '電脳漂流記', 'a': 'MusMus', 'n': 'http://img.youtube.com/vi/sqG_a1-c8f4/maxresdefault.jpg', 'p': ''}
  ,{'f': 'MusMus-BGM-097.mp3', 't': '夕餉の街並み', 'a': 'MusMus', 'n': 'http://img.youtube.com/vi/Hn4Czfdmf5o/maxresdefault.jpg', 'p': ''}
  ,{'f': 'prsk/sekai/alive.mp3', 't': 'alive', 'a': '鏡音リン', 'n': 'https://aika-toki.github.io/others/library/AudioCoverImageLibRaw/jacket_s_082.png', 'p': ''}
  ,{'f': 'prsk/sekai/Nostalogic.mp3', 't': 'Nostalogic', 'a': '桐谷 遥, 日野森 雫, MEIKO', 'n': 'https://aika-toki.github.io/others/library/AudioCoverImageLibRaw/jacket_s_013.png', 'p': ''}
  ,{'f': 'prsk/sekai/TellYourWorld.mp3', 't': 'Tell Your World', 'a': '初音ミク', 'n': 'https://aika-toki.github.io/others/library/AudioCoverImageLibRaw/jacket_s_001.png', 'p': ''}
  ,{'f': 'prsk/sekai/ロキ.mp3', 't': 'ロキ', 'a': '星乃 一歌, 初音 ミク', 'n': 'https://aika-toki.github.io/others/library/AudioCoverImageLibRaw/jacket_s_002.png', 'p': ''}
  ,{'f': 'prsk/sekai/テオ.mp3', 't': 'テオ', 'a': '星乃 一歌, 初音 ミク', 'n': 'https://aika-toki.github.io/others/library/AudioCoverImageLibRaw/jacket_s_003.png', 'p': ''}
  ,{'f': 'prsk/sekai/ヒバナ-Reloaded-.mp3', 't': 'ヒバナ-Reloaded-', 'a': '初音 ミク, 星乃 一歌', 'n': 'https://aika-toki.github.io/others/library/AudioCoverImageLibRaw/jacket_s_006.png', 'p': ''}
  ,{'f': 'prsk/sekai/ネクストネスト.mp3', 't': 'ネクストネスト', 'a': '初音 ミク', 'n': 'https://aika-toki.github.io/others/library/AudioCoverImageLibRaw/jacket_s_043.png', 'p': ''}
  ,{'f': 'prsk/sekai/メルト.mp3', 't': 'メルト', 'a': '初音 ミク', 'n': 'https://aika-toki.github.io/others/library/AudioCoverImageLibRaw/jacket_s_047.png', 'p': ''}
  ,{'f': 'prsk/sekai/初音ミクの消失.mp3', 't': '初音ミクの消失', 'a': '初音 ミク', 'n': 'https://aika-toki.github.io/others/library/AudioCoverImageLibRaw/jacket_s_049.png', 'p': ''}
];
let playlists = ['IzaNECxri4SV', [3,4,5,6,7,8,9,10,11], 'bffvpfte3J-t', [1], '4APTZMQNgmk2', [2], 'base', [1,2,3,4,5,6,7,8,9,10,11,12,13,14], 'PJSekai', [14,18,19,20,15,16,17,13,12]];
let playlistsComp = [];
for(let i = 0; playlists.length > i+1; i=i+2) {
  playlistsComp[playlists[i]] = playlists[i+1];
}
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
  let audioList = d.getElementById('audioList');
  if(d.getElementById('audioList').querySelector('option') != undefined) {
    return false;
  }
  for(let i = 0; i < audioPlayList.length; i++) {
    let option = d.createElement('option');
    option.setAttribute('value', i);
    if (audioPlayList[i]['t'] === '') {
      option.innerHTML = audioPlayList[i]['f'];
    } else {
      option.innerHTML = audioPlayList[i]['t'];
    }
    audioList.appendChild(option);
  }
  audioValue = d.getElementById('audioList').value;
  if (audioPlayList[audioValue]['f'] === '') {
    audio = new Audio(`${audioPlayList[audioValue]['p']}`);
  } else if (audioPlayList[audioValue]['p'] === '') {
    audio = new Audio(`./sounds/${audioPlayList[audioValue]['f']}`);
  } else {
    audio = new Audio(`${audioPlayList[audioValue]['p']}${audioPlayList[audioValue]['f']}`);
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
  d.getElementById('seekbar').style.backgroundSize = 0;
  d.getElementById('progressbar').style.backgroundSize = 0;
  audioList.setAttribute('size', audioPlayList.length);
}

function audioAdded(valueee) {
  audioPlayList.push(audioPathList[valueee]);
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
          if (d.getElementById('audioList').value === String(audioPlayList.length - 1)) {
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
  if(aL.value === String(audioPlayList.length - 1)) {
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