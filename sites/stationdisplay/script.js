let stu=setInterval(()=>{if(document.querySelector('.inline')){poschange(0);clearInterval(stu)}},10);
window.addEventListener('keydown',(event)=>{
  // console.log(event.keyCode);
  switch(event.keyCode){
    case 38:
      poschange(pos-1);
      break;
    case 40:
      poschange(pos+1);
      break;
  }
});
const stationName = {
  nh01:{ja: "豊橋",en: "Toyohashi",stop: {semi: "神宮前、堀田、鳴海、有松、中京競馬場前、前後、豊明、知立",exp: "神宮前、堀田、鳴海、前後、知立、新安城、東岡崎",ltd: "神宮前、知立、新安城、東岡崎、国府",rapidltd: "神宮前、知立、東岡崎"},},
  nh02:{ja: "伊奈",en: "Ina",stop: {local: "神宮前、堀田、呼続、桜、本笠寺、本星崎、鳴海",semi: "神宮前、堀田、鳴海、有松、中京競馬場前、前後、豊明、知立",exp: "神宮前、堀田、鳴海、前後、知立、新安城、東岡崎"},},
  nh04:{ja: "国府",en: "Ko",stop: {local: "神宮前、堀田、呼続、桜、本笠寺、本星崎、鳴海",semi: "神宮前、堀田、鳴海、有松、中京競馬場前、前後、豊明、知立",exp: "神宮前、堀田、鳴海、前後、知立、新安城、東岡崎",ltd: "神宮前、知立、新安城、東岡崎"},},
  nh13:{ja: "東岡崎",en: "Higashi Okazaki",stop: {local: "神宮前、堀田、呼続、桜、本笠寺、本星崎、鳴海",semi: "神宮前、堀田、鳴海、有松、中京競馬場前、前後、豊明、知立",exp: "神宮前、堀田、鳴海、前後、知立、新安城",ltd: "神宮前、知立、新安城",rapidltd: "神宮前、知立"},},
  nh17:{ja: "新安城",en: "Shin Anjo",stop: {local: "神宮前、堀田、呼続、桜、本笠寺、本星崎、鳴海",semi: "神宮前、堀田、鳴海、有松、中京競馬場前、前後、豊明、知立",exp: "神宮前、堀田、鳴海、前後、知立",ltd: "神宮前、知立"},},
  nh19:{ja: "知立",en: "Chiryu",stop: {local: "神宮前、堀田、呼続、桜、本笠寺、本星崎、鳴海",semi: "神宮前、堀田、鳴海、有松、中京競馬場前、前後、豊明",exp: "神宮前、堀田、鳴海、前後",ltd: "神宮前",rapidltd: "神宮前"},},
  nh22:{ja: "豊明",en: "Toyoake",stop: {local: "神宮前、堀田、呼続、桜、本笠寺、本星崎、鳴海",semi: "神宮前、堀田、鳴海、有松、中京競馬場前、前後",exp: "神宮前、堀田、鳴海"},},
  nh27:{ja: "鳴海",en: "Narumi",stop: {local: "神宮前、堀田、呼続、桜、本笠寺、本星崎",semi: "神宮前、堀田",exp: "神宮前、堀田"},},
  nh33:{ja: "神宮前",en: "Jingu-mae",stop: {},},
  nh36:{ja: "名古屋",en: "Nagoya",stop: {local: "山王"}},
  nh42:{ja: "須ヶ口",en: "Sukaguchi",stop: {local: "山王、名古屋、栄生、東枇杷島、西枇杷島、二ツ杁、新川橋",semi: "名古屋、栄生、二ツ杁",exp: "名古屋、栄生"}},
  nh50:{ja: "一宮",en: "Ichinomiya",stop: {local: "山王、名古屋、栄生、東枇杷島、西枇杷島、二ツ杁、新川橋、須ケ口",semi: "名古屋、栄生、二ツ杁、須ケ口、新清洲、大里、国府宮",exp: "名古屋、栄生、須ケ口、新清洲、大里、国府宮",ltd: "名古屋、国府宮",rapidltd: "名古屋、国府宮",musky: "名古屋、国府宮"}},
  nh60:{ja:"岐阜",en:"Gifu",stop:{local: "山王、名古屋、栄生、東枇杷島、西枇杷島、二ツ杁、新川橋、須ケ口",semi: "名古屋、栄生、二ツ杁、須ケ口、新清洲、大里、国府宮",exp: "名古屋、栄生、須ケ口、新清洲、大里、国府宮",ltd: "名古屋、国府宮、一宮、新木曽川、笠松",rapidltd: "名古屋、国府宮、一宮、新木曽川、笠松",musky: "名古屋、国府宮、一宮"}},
  tb07:{ja: "津島",en: "Tsushima",stop: {local: "山王、名古屋、栄生、東枇杷島、西枇杷島、二ツ杁、新川橋、須ケ口",semi: "名古屋、栄生、二ツ杁、須ケ口、甚目寺、木田、勝幡",exp: "名古屋、栄生、須ケ口、甚目寺、木田、勝幡",ltd: "名古屋、甚目寺、木田、勝幡"}},
  tb09:{ja: "佐屋",en: "Saya",stop: {local: "山王、名古屋、栄生、東枇杷島、西枇杷島、二ツ杁、新川橋、須ケ口",semi: "名古屋、栄生、二ツ杁、須ケ口、甚目寺、木田、勝幡、津島",exp: "名古屋、栄生、須ケ口、甚目寺、木田、勝幡、津島",ltd: "名古屋、甚目寺、木田、勝幡、津島、日比野"}},
  tb11:{ja: "弥富",en: "Yatomi",stop: {local: "山王、名古屋、栄生、東枇杷島、西枇杷島、二ツ杁、新川橋、須ケ口",semi: "名古屋、栄生、二ツ杁、須ケ口、甚目寺、木田、勝幡、津島",exp: "名古屋、栄生、須ケ口、甚目寺、木田、勝幡、津島"}},
  gn10:{ja: "西尾",en: "Nishio",stop: {local: "神宮前、堀田、鳴海、有松、中京競馬場前、前後、豊明、知立",exp: "神宮前、堀田、鳴海、前後、知立、新安城、南安城",ltd: "神宮前、知立、新安城、南安城、桜井"}},
  gn13:{ja: "吉良吉田",en: "Kira Yoshida",stop: {local: "神宮前、堀田、鳴海、有松、中京競馬場前、前後、豊明、知立",exp: "神宮前、堀田、鳴海、前後、知立、新安城、南安城"}},
  tk04:{ja: "豊川稲荷",en: "Toyokawa-inari",stop: {local: "神宮前、堀田、鳴海、有松、中京競馬場前、前後、豊明、知立",semi: "神宮前、堀田、鳴海、有松、中京競馬場前、前後、豊明、知立",exp: "神宮前、堀田、鳴海、前後、知立、新安城、東岡崎"}},
  ta09:{ja: "太田川",en: "Otagawa",stop: {local: "神宮前、豊田本町、道徳、大江、大同町、柴田、名和、聚楽園",semi: "神宮前、大江、大同町、聚楽園",exp: "神宮前、大江",rapid: "神宮前",ltd: "神宮前"}},
  ta22:{ja: "常滑",en: "Tokoname",stop: {local: "神宮前、豊田本町、道徳、大江、大同町、柴田、名和、聚楽園",semi: "神宮前、大江、大同町、聚楽園、太田川、尾張横須賀",exp: "神宮前、大江、太田川、尾張横須賀、寺本、朝倉、古見、新舞子",rapid: "神宮前、太田川、尾張横須賀、朝倉、新舞子",ltd: "神宮前、太田川、尾張横須賀、朝倉、新舞子"}},
  ta24:{ja: "中部国際空港",en: "Central Japan International Airport",stop: {local: "神宮前、豊田本町、道徳、大江、大同町、柴田、名和、聚楽園",semi: "神宮前、大江、大同町、聚楽園、太田川、尾張横須賀",exp: "神宮前、大江、太田川、尾張横須賀、寺本、朝倉、古見、新舞子",rapid: "神宮前、太田川、尾張横須賀、朝倉、新舞子、常滑",ltd: "神宮前、太田川、尾張横須賀、朝倉、新舞子、常滑",musky: "神宮前"}},
  kc12:{ja: "知多半田",en: "Chita Handa",stop: {local: "神宮前、豊田本町、道徳、大江、大同町、柴田、名和、聚楽園",semi: "神宮前、大江、大同町、聚楽園、太田川、南加木屋",exp: "神宮前、大江、太田川、南加木屋、巽ヶ丘、阿久比、住吉町",rapid: "神宮前、太田川、南加木屋、巽ヶ丘、阿久比、住吉町",ltd: "神宮前、太田川、阿久比"}},
  kc19:{ja: "河和",en: "Kowa",stop: {local: "神宮前、豊田本町、道徳、大江、大同町、柴田、名和、聚楽園",semi: "神宮前、大江、大同町、聚楽園、太田川、南加木屋",exp: "神宮前、大江、太田川、南加木屋、巽ヶ丘、阿久比、住吉町、知多半田",rapid: "神宮前、太田川、南加木屋、巽ヶ丘、阿久比、住吉町、知多半田、成岩",ltd: "神宮前、太田川、阿久比、知多半田、青山、知多武豊、富貴、河和口"}},
  kc24:{ja: "内海",en: "Utsumi",stop: {local: "神宮前、豊田本町、道徳、大江、大同町、柴田、名和、聚楽園",semi: "神宮前、大江、大同町、聚楽園、太田川、南加木屋",exp: "神宮前、大江、太田川、南加木屋、巽ヶ丘、阿久比、住吉町、知多半田",rapid: "神宮前、太田川、南加木屋、巽ヶ丘、阿久比、住吉町、知多半田、成岩",ltd: "神宮前、太田川、阿久比、知多半田、青山、知多武豊、富貴、上野間、美浜緑苑、知多奥田、野間"}},
  iy07:{ja: "岩倉",en: "Iwakura",stop: {local: "山王、名古屋、栄生、東枇杷島、下小田井、中小田井、上小田井",semi: "名古屋、栄生、上小田井、西春",exp: "名古屋、栄生、上小田井、西春",ltd: "名古屋",rapidltd: "名古屋",musky: "名古屋"}},
  iy15:{ja: "犬山",en: "Inuyama",stop: {local: "山王、名古屋、栄生、東枇杷島、下小田井、中小田井、上小田井",semi: "名古屋、栄生、上小田井、西春、岩倉、石仏、布袋",exp: "名古屋、栄生、上小田井、西春、岩倉、布袋、江南",ltd: "名古屋、岩倉、江南、柏森",rapidltd: "名古屋、岩倉、江南、柏森",musky: "名古屋、岩倉、江南"}},
  iy17:{ja: "新鵜沼",en: "Shin Unuma",stop: {local: "山王、名古屋、栄生、東枇杷島、下小田井、中小田井、上小田井",semi: "名古屋、栄生、上小田井、西春、岩倉、石仏、布袋",exp: "名古屋、栄生、上小田井、西春、岩倉、布袋、江南",ltd: "名古屋、岩倉、江南、柏森、犬山、犬山遊園",rapidltd: "名古屋、岩倉、江南、柏森、犬山、犬山遊園",musky: "名古屋、岩倉、江南、犬山、犬山遊園"}},
  hm06:{ja: "新可児",en: "Shin Kani",stop: {local: "山王、名古屋、栄生、東枇杷島、下小田井、中小田井、上小田井",semi: "名古屋、栄生、上小田井、西春、岩倉、石仏、布袋",exp: "名古屋、栄生、上小田井、西春、岩倉、布袋、江南",ltd: "名古屋、岩倉、江南、柏森、犬山、西可児、可児川、日本ライン今渡",musky: "名古屋、岩倉、江南、犬山、西可児、可児川、日本ライン今渡"}},
  nh60viy15:{ja: "犬山経由岐阜",en: "Gifu via Inuyama",stop: {local: "山王、名古屋、栄生、東枇杷島、下小田井、中小田井、上小田井",semi: "名古屋、栄生、上小田井、西春、岩倉、石仏、布袋",exp: "名古屋、栄生、上小田井、西春、岩倉、布袋、江南"}},
};
const typeName = {
  local: {ja: "普通",en: "Local"},
  semi: {ja: "準急",en: "Semi Exp."},
  exp: {ja: "急行",en: "Express"},
  rapid: {ja: "快急",en: "Rapid Exp."},
  ltd: {ja: "特急",en: "Ltd.Exp."},
  rapidltd: {ja: "快特",en: "RapidLtd.Exp."},
  musky: {ja: "ミュースカイ",en: "μSKYLtd.Exp."}
}
const carName = {
  2:{ja: "2両",en: "2"},
  4:{ja: "4両",en: "4"},
  6:{ja: "6両",en: "6"},
  8:{ja: "8両",en: "8"}
}
const schedule = [
  ['5','15',"exp","ta24",6],
  ['5','27',"exp","ta24",6],
  ['5','37',"local","nh02",2],
  ['5','40',"rapid","ta24",6],
  ['5','44',"semi","nh01",4],
  ['5','46',"ltd","ta24",4],
  ['5','55',"local","nh02",2],
  ['5','58',"local","ta24",2],
  ['6','00','musky',"ta24",6]
];
function setup(){
  replaceArrow();
  setMarqueeSpeed();
  replaceColor();
}
let pos = 0;
let runningid = 0;
function poschange(n){
  pos = n;
  clearInterval(runningid);
  scheduleSetup('ja');
  let marqueelength = document.querySelectorAll('marquee')[0].textContent.length>=document.querySelectorAll('marquee')[1].textContent.length?document.querySelectorAll('marquee')[0].textContent.length:document.querySelectorAll('marquee')[1].textContent.length;
  let waitingMillisec = Math.round(marqueelength*(window.innerWidth*4.304)/calcMarqueeSpeed());
  setup();
  runningid = setInterval(()=>{
    scheduleSetup('en');
    setup();
    setTimeout(()=>{
      scheduleSetup('ja');
      setup();
    },3000);
  },waitingMillisec+3000);
  setup();
}
function scheduleSetup(lang){
  let display = document.querySelectorAll('.display');
  for(let pi = 0; pi<4; pi++){
    let inline = display[[0,2,4,5][pi]].querySelectorAll('.inline');
    for(let i=0;i<inline.length;i++){
      inline[i].innerHTML="";
    }
    inline[0].innerHTML = ["local","semi","exp","rapid"].includes(schedule[pos+pi][2])?"←③":"④→";
    inline[1].innerHTML = lang=="ja"?typeName[schedule[pos+pi][2]].ja:typeName[schedule[pos+pi][2]].en;
    inline[2].innerHTML = 
    lang=="ja"?
    (
      ["local","semi","exp","rapid"].includes(schedule[pos+pi][2])?
      stationName[schedule[pos+pi][3]].ja:
      (
        ["ltd","rapidltd"].includes(schedule[pos+pi][2])?
        stationName[schedule[pos+pi][3]].ja+" 一部特別車":
        stationName[schedule[pos+pi][3]].ja+" 全車特別車"
      )
    ):
    stationName[schedule[pos+pi][3]].en;
    inline[3].innerHTML = schedule[pos+pi][0]+":"+schedule[pos+pi][1];
    inline[4].innerHTML = lang=="ja"?carName[schedule[pos+pi][4]].ja:carName[schedule[pos+pi][4]].en;
  }
  display[1].innerHTML = lang=="ja"?generateMarquee(schedule[pos][2],schedule[pos][3]):"";
  display[3].innerHTML = lang=="ja"?generateMarquee(schedule[pos+1][2],schedule[pos+1][3]):"";
  document.querySelector('body').className = lang;
}
function generateMarquee(type,station){
  let muticket = ["ltd","rapidltd","musky"].includes(type)?"特別車の座席は指定で、特別車両券（ミューチケット）が必要です。":"";
  let stops = ["ltd","rapidltd","musky"].includes(type)?"この電車は、"+stationName[station].stop[type]+"にとまります。":"この電車は、"+stationName[station].stop[type]+"の順にとまります。";
  return '<marquee loop="1">'+stops+muticket+'</marquee>';
}
function replaceArrow(){
  let inlines = document.querySelectorAll('.inline');
  for(let i=0;i<inlines.length;i++){
    // console.log(i);
    inlines[i].innerHTML = inlines[i].innerHTML.replaceAll('←','<div style="transform: rotateZ(180deg);color:#f00;">➔</div>');
    inlines[i].innerHTML = inlines[i].innerHTML.replaceAll('→','<div style="color:#f00;">➔</div>');
  }
}
function setMarqueeSpeed(){
  let marquees = document.querySelectorAll('marquee');
  let scrollSpeed = calcMarqueeSpeed();
  for(let i=0;i<marquees.length;i++){
    marquees[i].setAttribute('scrollamount',scrollSpeed);
  }
}
function calcMarqueeSpeed(){
  return window.innerWidth*0.917/100;
}
function replaceColor(){
  let inlines = document.querySelectorAll('.inline');
  for(let i=0;i<inlines.length;i++){
    function replacer(a,b){
      inlines[i].innerHTML = inlines[i].innerHTML==a?b:inlines[i].innerHTML;
    }
    // console.log(i);
    replacer('2両','2<div style="font-size:1.101vw;font-family:Misaki Mincho;padding-top:2.202vw;">両</div>');
    replacer('4両','4<div style="font-size:1.101vw;font-family:Misaki Mincho;padding-top:2.202vw;">両</div>');
    replacer('6両','6<div style="font-size:1.101vw;font-family:Misaki Mincho;padding-top:2.202vw;">両</div>');
    replacer('8両','8<div style="font-size:1.101vw;font-family:Misaki Mincho;padding-top:2.202vw;">両</div>');
    replacer('特急','<div style="color:#ff0000;filter: drop-shadow(0px 0px 10px #f008);">特急</div>');
    replacer('快特','<div style="color:#ff0000;filter: drop-shadow(0px 0px 10px #f008);">快特</div>');
    replacer('ミュースカイ','<div style="color:#ff0000;filter: drop-shadow(0px 0px 10px #f008);font-style:italic;letter-spacing:-0.1em;font-weight:bold;font-size: 4.753vw;">ﾐｭｰｽｶｲ</div>');
    replacer('全車特別車','<div style="letter-spacing:-0.1em;font-size:2.202vw;color:#f00;filter: drop-shadow(0px 0px 10px #f008);padding-left:1.101vw;">全車　<br>特別車</div>');
    replacer('一部特別車','<div style="letter-spacing:-0.1em;font-size:2.202vw;color:#f00;filter: drop-shadow(0px 0px 10px #f008);padding-left:1.101vw;">一部特別車</div>');
    replacer('中部国際空港','<div style="font-size:4.304vw;">中部国際空港</div>');
    replacer('中部国際空港 全車特別車','<div style="font-size:2.753vw;">中部国際空港</div><div style="letter-spacing:-0.1em;font-size:2.202vw;filter: drop-shadow(0px 0px 10px #f008);color:#f00;padding-left:1.101vw;">全車　<br>特別車</div>');
    replacer('中部国際空港 一部特別車','<div style="font-size:2.753vw;">中部国際空港</div><div style="letter-spacing:-0.1em;font-size:1.753vw;filter: drop-shadow(0px 0px 10px #f008);color:#f00;padding-left:1.101vw;">一部特別車</div>');
    replacer('豊橋 一部特別車','<div style="">豊橋</div><div style="letter-spacing:-0.1em;font-size:1.753vw;filter: drop-shadow(0px 0px 10px #f008);color:#f00;padding-left:1.101vw;">一部特別車</div>');
    replacer('Express','<div style="letter-spacing:-0.1em;font-weight:bold;">Express</div>');
    replacer('Rapid Exp.','<div style="letter-spacing:-0.1em;font-size:3.103vw;font-weight:bold;">Rapid Exp.</div>');
    replacer('Semi Exp.','<div style="letter-spacing:-0.1em;font-size:3.403vw;font-weight:bold;">Semi Exp.</div>');
    replacer('Ltd.Exp.','<div style="letter-spacing:-0.1em;font-size:4.304vw;color:#f00;filter: drop-shadow(0px 0px 10px #f008);font-weight:bold;">Ltd.Exp.</div>');
    replacer('RapidLtd.Exp.','<div style="letter-spacing:-0.1em;font-size:2.202vw;color:#f00;filter: drop-shadow(0px 0px 10px #f008);font-weight:bold;text-align:left;">Rapid<br>&nbsp;Ltd.Exp.</div>');
    replacer('μSKYLtd.Exp.','<div style="font-size:4.404vw;color:#f00;filter: drop-shadow(0px 0px 10px #f008);font-weight:bold;font-style:italic;">μ</div><div style="letter-spacing:-0.1em;font-size:2.202vw;color:#f00;font-weight:bold;text-align:left;">SKY<br>Ltd.Exp.</div>');
    replacer('Central Japan International Airport','<div style="font-size:2.202vw;text-align:left;">Central Japan<br>&emsp;&emsp;&emsp;&nbsp;International Airport</div>');
  }
}