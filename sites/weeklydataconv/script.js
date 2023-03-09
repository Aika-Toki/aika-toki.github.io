let closeddata = [];
let trs;
function load(){
  let articleel = document.querySelector('article')
  trs = articleel.querySelectorAll('tr');
  let articlestyle = articleel.querySelectorAll('style');
  for(let i = 0;i < articlestyle.length;i++){
    articlestyle[i].remove();
  }
}
function setup(){
  for(let i = 3; i < getBottom(); i++){
    let datael = trs[i].querySelectorAll('td');
    let data = {
      Ticket: datael.length>=1?datael[0].textContent:null,
      Type: datael.length>=3?datael[2].textContent:null,
      Size: datael.length>=4?datael[3].textContent:null,
      Item: datael.length>=5?datael[4].textContent:null,
      Open: {
        Time: datael.length>=2?datael[1].textContent:null,
        Price: datael.length>=6?datael[5].textContent:null
      },
      Close: {
        Time: datael.length>=9?datael[8].textContent:null,
        Price: datael.length>=10?datael[9].textContent:null,
      },
      Profit: datael.length>=14?datael[13].textContent:null
    }
    data.Open.Time = data.Open.Time != null ? new Date(data.Open.Time.replaceAll('.','-').replaceAll(' ','T')+"+0200").getTime() : null;
    data.Close.Time = data.Close.Time != null ? new Date(data.Close.Time.replaceAll('.','-').replaceAll(' ','T')+"+0200").getTime() : null;
    trs[3].querySelectorAll('td')[2].textContent=="balance"?closeddata.push(data):closeddata.unshift(data);
  }
}
function main(){
  for(let i = 0; i < closeddata.length; i++){
    let data = closeddata[i];
    addOption("#exf",data.Ticket,`${timeformat(data.Open.Time,'M/D')}(${"日月火水木金土".charAt(new Date(data.Open.Time).getDay())}) ${timeformat(data.Open.Time,'h:m')} <${data.Type}-${data.Item}>`,closeddata);
    addOption("#exe",data.Ticket,`${timeformat(data.Open.Time,'M/D')}(${"日月火水木金土".charAt(new Date(data.Open.Time).getDay())}) ${timeformat(data.Open.Time,'h:m')} <${data.Type}-${data.Item}>`,closeddata);
  }
  exoptchanged('from');
  exoptchanged('until');
}
function exoptchanged(w){
  let el = document.querySelectorAll('tr.'+w);
  let selel = document.querySelector('select#ex'+["f","e"][["from","until"].indexOf(w)])
  let tds = [
    el[1].querySelector('td:nth-of-type(1)'),
    el[1].querySelector('td:nth-of-type(2)'),
    el[1].querySelector('td:nth-of-type(3)'),
    el[1].querySelector('td:nth-of-type(4)'),
    [
      el[3].querySelector('td:nth-of-type(1)'),
      el[3].querySelector('td:nth-of-type(2)'),
      el[3].querySelector('td:nth-of-type(4)'),
      el[3].querySelector('td:nth-of-type(5)')
    ],
    [
      el[5].querySelector('td:nth-of-type(1)'),
      el[5].querySelector('td:nth-of-type(3)'),
    ],
    el[5].querySelector('td:nth-of-type(4)')
  ];
  // tds[0].textContent = ["出力の先頭","出力の末尾"][["from","until"].indexOf(w)];
  let data = ticketSearch(selel.value);
  tds[0].textContent = data.Ticket;
  tds[1].textContent = data.Item;
  tds[2].textContent = data.Type;
  tds[3].textContent = data.Size;
  tds[4][0].textContent = timeformat(data.Open.Time,"Y/M/D");
  tds[4][1].textContent = timeformat(data.Open.Time,"h:m:s");
  tds[4][2].textContent = timeformat(data.Close.Time,"Y/M/D");
  tds[4][3].textContent = timeformat(data.Close.Time,"h:m:s");
  tds[5][0].textContent = data.Open.Price
  tds[5][1].textContent = data.Close.Price;
  tds[6].textContent = data.Profit;

  // el.innerHTML = "";
  // for(let i = 0;i < tds.length;i++){
  //   el.appendChild(tds[i]);
  // }
}
function timeformat(time,format){
  let t = new Date(time);
  format = format.replace('Y',t.getFullYear());
  format = format.replace('M',t.getMonth()+1);
  format = format.replace('D',t.getDate());
  format = format.replace('h',t.getHours());
  format = format.replace('m',("0"+t.getMinutes()).substr(-2));
  format = format.replace('s',("0"+t.getSeconds()).substr(-2));
  return format;
}
function ticketSearch(tn){
  let rtn;
  for(let i = 0;i<closeddata.length;i++){
    if(closeddata[i].Ticket == tn){
      rtn = closeddata[i];
    }
  }
  console.log(rtn);
  return rtn;
}
function addOption(el,value,display,closeddatarr){
  let opt = document.createElement('option');
  opt.value = value;
  let pos = closeddatarr.indexOf(ticketSearch(value))
  opt.textContent = "["+(pos+1)+"/"+closeddatarr.length+"] "+display;
  document.querySelector(el).appendChild(opt);
}
function getBottom(){
  let btm = 0
  for(let i = 3; i < trs.length; i++){
    if(trs[i].querySelectorAll('td').length == 2){
      btm = i-1;
    }
  }
  return btm;
}
function calcpips(price,profit){
  let pips = Math.abs(((price[1]*1000)-(price[0]*1000))/10)
  if(Number(String(profit).replaceAll(' ',''))<0){
    pips = 0-pips;
  }
  return pips;
}
function upload(inp){
  let reader = new FileReader();
  reader.onload = ()=>{
    let ifr = document.createElement('article');
    ifr.innerHTML = reader.result;
    ifr.style.display = 'none';
    document.body.appendChild(ifr);
    document.querySelector('div#upload').style.display = "none";
    load();
    setup();
    main();
    let periodspan = document.querySelector('label#period').querySelectorAll('span');
    periodspan[0].textContent = timeformat(closeddata[0].Open.Time,"Y/M/D h:m:s");
    periodspan[1].textContent = timeformat(closeddata[closeddata.length-1].Open.Time,"Y/M/D h:m:s");
    document.querySelector('div#setting').style.display = "unset";
  }
  reader.readAsText(inp.files[0], 'UTF-8');
}
function preview(){
  document.querySelector('textarea#preview').value = generate()[0];
}
function generate(){
  let sel_f = document.querySelector('select#exf').value;
  let sel_e = document.querySelector('select#exe').value;
  let outputarr = [];
  let tmp = "今週の成績 (";
  tmp+=timeformat(ticketSearch(sel_f).Open.Time,"Y/M/D");
  tmp+="～";
  tmp+=timeformat(ticketSearch(sel_e).Open.Time,"Y/M/D");
  tmp+=") - ";
  tmp+=closeddata.indexOf(ticketSearch(sel_e))-closeddata.indexOf(ticketSearch(sel_f))+1;
  tmp+=" entries"
  outputarr.push(tmp);
  outputarr.push("");
  outputarr.push("曜日　　　時間帯　　通貨ペア　　　 PIPS");
  for(let i = closeddata.indexOf(ticketSearch(sel_f));i < closeddata.indexOf(ticketSearch(sel_e))+1;i++){
    let data = closeddata[i];
    let line = "";
    line+="月火水木金土".charAt(new Date(data.Open.Time).getDay()-1);
    line+="曜日　　";
    console.log(line);
    let timeslot = ["深夜","深夜","深夜","深夜","朝","朝","朝","朝","朝","朝","朝","昼","昼","昼","昼","昼","昼","夜","夜","夜","夜","夜","夜","夜"][new Date(data.Open.Time).getHours()];
    line+=timeslot;
    console.log(line);
    console.log(timeslot);
    line+="　　　　　".substr(timeslot.length);
    line+=data.Item;
    console.log(line);
    line+="　　　　";
    line+=calcpips([data.Open.Price,data.Close.Price],data.Profit);
    console.log(line);
    outputarr.push(line);
  }
  return [outputarr.join("\n"),timeformat(ticketSearch(sel_f).Open.Time,"Y-M-D").split('-'),timeformat(ticketSearch(sel_e).Open.Time,"Y-M-D").split('-'),closeddata.indexOf(ticketSearch(sel_e))+1];
}
function exportfile(){
  let result = generate();
  const blob = new Blob([result[0]], {type: 'text/plain'});
  const bloburl = URL.createObjectURL(blob);
  const div = document.createElement('div');
  div.id="downloadArea";
  if(document.querySelector('div#downloadArea')){document.querySelector('div#downloadArea').remove();}
  document.querySelector('div#setting').appendChild(div);
  const a = document.createElement("a");
  div.appendChild(a);
  a.download = `WeeksResult_${result[1][0]}${result[1][1].padStart(2,"0")}${result[1][2].padStart(2,"0")}-${result[2][0]}${result[2][1].padStart(2,"0")}${result[2][2].padStart(2,"0")}-${result[3]}entries.txt`;
  a.href = bloburl;
  a.id = "downloadbtn";
  let previewframe = document.createElement('iframe');
  previewframe.src = bloburl;
  previewframe.style.width = "800px";
  div.appendChild(previewframe);
  div.appendChild(document.createElement('br'));
  let btn = document.createElement('button');
  btn.setAttribute('onclick','download()');
  btn.textContent="保存";
  btn.id="downloadbtn";
  div.appendChild(btn);
}
function download(){
  document.querySelector('a#downloadbtn').click();
}