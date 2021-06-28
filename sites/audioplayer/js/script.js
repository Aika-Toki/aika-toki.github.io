const d = document;
window.onload = function () {
    let audioValue = d.getElementById('audioList').value;
    let audioPathList = 
}

function audioChange() {
    let audioValue = d.getElementById('audioList').value;
    let audioPathList = ['./sounds/roudoku2021from04.mp3'];
    let audio = new audio(audioPathList[audioValue]);   
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
  
  audio.addEventListener("timeupdate", (e) => {
    const current = Math.floor(audio.currentTime)
    const duration = Math.round(audio.duration)
    if (!isNaN(duration)) {
      document.getElementById('current').innerHTML = playTime(current)
      document.getElementById('duration').innerHTML = playTime(duration)
    }
  })