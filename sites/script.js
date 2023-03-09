const links = [
  ['Antimatter Dimention Save Editor','','/sites/ad/'],
  ['Animation Creator','','/sites/animate/kyuukurarin/'],
  ['【Audioplayer】','Audio player.','/sites/audioplayer/'],
  ['Calendar Creator','','/sites/calendar/simp/'],
  ['HTML Canvas Tester','','/sites/canvastest/'],
  ['Chime','Program to play chimes on time','/sites/chime'],
  ['Command Describer','Explains the introduction of Minecraft commands.','/sites/redirect/#eyJ2IjoiMC4wLjEiLCJlIjoiZGZYWDFlaFNYVVlsV1VVMmlBMUYxU1AxdkV2dDRRU2JMTTVsMVBIbndjZFNNUmdwa3BSbUI0S2VWWi92RGExc0ROenhGTVJCZFdMZXZ1SkpCSEo1bFd0WkZ3PT0iLCJpIjoiZ2dsRGdzaHpRcFRPcTNWUSJ9'],
  ['Simple Counter','','/sites/counter/'],
  ['Discord Bot Announcement','','/sites/DiscordBotAnnouncement'],
  ['Minecraft Inventory Simulator','A site that recreates the inventory of Minecraft.','/sites/minecraft_Inventory_sim/'],
  ['Minecraft Mods Downloader','A site where you can download Minecraft mods in bulk.','/sites/mod_downloader/'],
  ['文字化け','','/sites/mojibake/index.html'],
  ['Password Generator','','/sites/passwordgen/'],
  ['PDFファイルテスト',"Test of uploading a PDF file.","/sites/redirect/#eyJ2IjoiMC4wLjEiLCJlIjoibDdXVTljRUV4bGNwUDF0NW9oV3lHNjRNb0FDMzlvZWlIbWdET2NPVS8zdHFvN2MxSzUvRFphTDJWUVQzekJxUFlNUWhYNEV3cTY2Wmo3bllXUT09IiwiaSI6IjFxcG9pVTVtSlBjNWpSZUYifQ=="],
  ['PJSEditor','PJS can be easily edited on this website.','/sites/pjsEditor/'],
  ['リダイレクト','Redirect generation.',"/sites/redirect"],
  ['Roulette Calcurator','','/sites/roulette_calc/'],
  ['Sakura Capture','','/sites/sakura_capture/'],
  ['Valorant Team Generator','','/sites/teamsplit/'],
  ['車内ディスプレイ再現','A site that reproduces LCDs inside a train car.','/sites/traindisplay/'],
  ['電車遅延情報','A website that allows you to check train delays nationwide.','/sites/train_info/'],
  ['Weather Forecast','','/sites/weather/'],
  ['MT4 Data Converter','','/sites/weeklydataconv/'],
  ['Article To Markdown','','/sites/yjbot_post/'],
  ['Youtube Shorts To Normal Viewer','','/sites/yt-shorts-normal-conv/'],
  ['Kanayama Station Display','','/sites/stationdisplay/'],
  ['Seeded Randomizer','','/sites/coder/'],
  ['Demo Trader','','/sites/demotrade/']
]
function setup(){
  for(let item in links){
    let div = document.createElement('div');
    document.querySelector('#linklist').append(div);
    div.innerHTML = `<a class="uk-link-toggle" href="${links[item][2]}"><div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-small" uk-grid><div class="uk-flex-last@s uk-card-media-right uk-cover-container"><img src="https://s.wordpress.com/mshots/v1/${location.host+links[item][2]}?w=1200&h=600" alt="" uk-cover><canvas width="600" height="150"></canvas></div><div><div class="uk-card-body"><h3 class="uk-card-title"><span class="uk-link-heading">${links[item][0]}</span></h3><p>${links[item][1]==""?links[item][0]+".":links[item][1]}</p></div></div></div></a>`;
  }
}
let si = setInterval(()=>{
  if(document.querySelector('#linklist')){
    setup();
    clearInterval(si);
  }
},10)