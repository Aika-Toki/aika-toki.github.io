const Prize = "1st/1st-near-f/1st-near-b/1st-difclass/2nd/3rd/4th-1/4th-2/4th-3/4th-4/4th-5/4th-6/4th-7/5th/6th/7th".split('/');
let usedId = [];
let stock = [];
let _ticket = [];
function getPrize(n){
  if(-1<n&&n<16){
    return document.querySelector('tr#p'+Prize[n]);
  } else {
    return console.error('Out of range');
  }
}
function crel(a){
  return document.createElement(a);
}
function randomClass(){
  return String(Math.ceil(Math.random()*200)).padStart(3,"0");
}
function randomNumber(){
  return String(Math.floor(Math.random()*100000)).padStart(5,"0");
}
function setup(){
  let prizeName = "1等/1等前後賞(前)/1等前後賞(後)/1等組違い賞/2等/3等/4等/4等/4等/4等/4等/4等/4等/5等/6等/7等".split('/');
  let prizeDetail = "700,000,000/150,000,000/150,000,000/300,000/10,000,000/1,000,000/100,000/100,000/100,000/100,000/100,000/100,000/100,000/10,000/3,000/300".split('/');
  for(let k in Prize){
    console.log(`Processing ${Prize[k]}`);
    let el = document.querySelector('tr#p'+Prize[k]);
    let childNodes = [crel('td'),crel('td'),crel('td'),crel('td')];
    childNodes[0].classList.add("uk-text-left");
    childNodes[0].classList.add("prizeName");
    childNodes[0].textContent = prizeName[k];
    childNodes[1].classList.add("uk-text-right");
    childNodes[1].classList.add("prizeDetail");
    childNodes[1].textContent = prizeDetail[k];
    childNodes[2].classList.add("uk-text-right");
    childNodes[2].classList.add("prizeClass");
    childNodes[2].textContent = "---";
    childNodes[3].classList.add("uk-text-left");
    childNodes[3].classList.add("prizeNumber");
    childNodes[3].textContent = "1-----";
    // childNodes[4].classList.add("uk-text-center");
    // childNodes[4].classList.add("prizeIsHit");
    // childNodes[4].textContent = "✅/❌";
    
    el.append(childNodes[0],childNodes[1],childNodes[2],childNodes[3]);
  }
}
function lottery(){
  let rn = "1"+String(randomNumber());
  while(stock.includes(rn)){
    console.log(`[ERROR] ${rn} has exist. Retrying...`);
    rn="1"+String(randomNumber());
  }
  stock.push(rn);
  return `${randomClass()}/${rn}`;
}
function main(){
  setup();
  mainLottery();
}
function mainLottery(){
  stock = [];
  let tmparr = [];
  let tmp = lottery();
  getPrize(0).querySelector(".prizeClass").textContent = tmp.split('/')[0];
  getPrize(0).querySelector(".prizeNumber").textContent = tmp.split('/')[1];
  getPrize(1).querySelector(".prizeClass").textContent = tmp.split('/')[0];
  getPrize(1).querySelector(".prizeNumber").textContent = Number(tmp.split('/')[1])==100000?199999:Number(tmp.split('/')[1])-1;
  getPrize(2).querySelector(".prizeClass").textContent = tmp.split('/')[0];
  getPrize(2).querySelector(".prizeNumber").textContent = Number(tmp.split('/')[1])==199999?100000:Number(tmp.split('/')[1])+1;
  getPrize(3).querySelector(".prizeClass").textContent = "任意";
  getPrize(3).querySelector(".prizeNumber").textContent = tmp.split('/')[1];
  tmp = lottery();
  getPrize(4).querySelector(".prizeClass").textContent = "##"+String(tmp.split('/')[0]).substring(2,3);
  getPrize(4).querySelector(".prizeNumber").textContent = tmp.split('/')[1];
  for(let i = 5;i<13;i++){
    tmp = lottery();
    getPrize(i).querySelector(".prizeClass").textContent = "任意";
    getPrize(i).querySelector(".prizeNumber").textContent = tmp.split('/')[1];
  }
  tmp = lottery();
  getPrize(13).querySelector('.prizeClass').textContent = "任意";
  getPrize(13).querySelector('.prizeNumber').textContent = "###"+tmp.split('/')[1].substring(3,6);
  tmp = lottery();
  getPrize(14).querySelector('.prizeClass').textContent = "任意";
  getPrize(14).querySelector('.prizeNumber').textContent = "####"+tmp.split('/')[1].substring(4,6);
  tmp = lottery();
  getPrize(15).querySelector('.prizeClass').textContent = "任意";
  getPrize(15).querySelector('.prizeNumber').textContent = "#####"+tmp.split('/')[1].substring(5,6);
}
function generateTicket(){
  let rn = "1"+String(randomNumber());
  return `${randomClass()}/${rn}`;
}
function getTicket(freeticket="n"){
  let ticket;
  if(freeticket!="n"){
    ticket = freeticket;
  } else {
    ticket = generateTicket();
  }
  _ticket.push(ticket);
  let ticketClassNumberArray = ticket.split('/');
  let prizeList = crel('table');
  let prizetotal = "";
  prizeList.classList.add('uk-table');
  let listdata = [
    ["class",ticketClassNumberArray[0]],
    ["number",ticketClassNumberArray[1]],
    ["prizelist",prizeList],
    ["prizetotal",prizetotal]
  ]
  addlist("#tickets",listdata);
}
function ticketsJudge(){
  mainLottery();
  let prizeName = ["1等","1等前後","1等組違","2等","3等","4等","5等","6等","7等"];
  let allprizetotal = 0;
  let bought = 0;
  for(let i=0;i<usedId.length;i++){
    let parentElement = document.querySelector(`#${usedId[i]}`);
    let prizeList = parentElement.querySelector('td#prizelist>table');
    prizeList.innerHTML="";
    let prizetotalE = parentElement.querySelector('td#prizetotal');
    let prizetotal = 0;
    let prizeListHeader = crel('thead');
    let prizeListHeaderTableRow = crel('thead');
    for(let i = 0;i<prizeName.length;i++){
      let el = crel('th');
      let ell = crel('div');
      ell.textContent = prizeName[i];
      el.append(ell);
      prizeListHeaderTableRow.append(el);
    }
    prizeListHeader.append(prizeListHeaderTableRow);
    let prizeListBody = crel('tbody');
    let prizeListBodyTableRow = crel('tr');
    let hitData = [];
    let ticket = `${parentElement.querySelector('td#class').textContent}/${parentElement.querySelector('td#number').textContent}`;
    let judgeres = judgeAll(ticket);
    hitData.push([judgeres[0][0]].includes(true));
    hitData.push([judgeres[0][1],judgeres[0][2]].includes(true));
    hitData.push([judgeres[0][3]].includes(true));
    hitData.push([judgeres[0][4]].includes(true));
    hitData.push([judgeres[0][5]].includes(true));
    hitData.push([judgeres[0][6],judgeres[0][7],judgeres[0][8],judgeres[0][9],judgeres[0][10],judgeres[0][11],judgeres[0][12]].includes(true));
    hitData.push([judgeres[0][13]].includes(true));
    hitData.push([judgeres[0][14]].includes(true));
    hitData.push([judgeres[0][15]].includes(true));
    for(let i=0;i<judgeres[1].length;i++){
      prizetotal+=judgeres[1][i];
    }
    prizetotalE.textContent = prizetotal;
    allprizetotal += prizetotal;
    bought++;
    console.log(hitData);
    let prizeListHeaderTableDatas = prizeListHeaderTableRow.querySelectorAll('th');
    for(let i = 0;i<hitData.length;i++){
      prizeListHeaderTableDatas[i].classList.add(hitData[i]?"uk-background-primary":"uk-background-default");
      prizeListHeaderTableDatas[i].querySelector('div').classList.add(hitData[i]?"uk-light":"uk-dark");
    }
    prizeListBody.append(prizeListBodyTableRow);
    prizeList.append(prizeListHeader,prizeListBody);
  }
  document.querySelector('#allTotal').textContent = allprizetotal.toLocaleString();
  let spent = bought*300;
  document.querySelector('#spent').textContent = spent.toLocaleString();
  document.querySelector('#bought').textContent = bought.toLocaleString();
  document.querySelector('#profit').textContent = (allprizetotal-spent).toLocaleString();
}
function judge(ticketClassNumber,sourcePrizeTargetNumber){
  let source = getPrize(sourcePrizeTargetNumber);
  let sourceClass = source.querySelector('.prizeClass').textContent.replaceAll('組',"");
  let sourceNumber = source.querySelector('.prizeNumber').textContent.replaceAll('番',"");
  let ticketClass = ticketClassNumber.split('/')[0];
  let ticketNumber = ticketClassNumber.split('/')[1];
  let returnContent = [];
  if(sourceClass=="任意"){
    if(sourceNumber.includes('#')){
      let sourceNumberTruth = sourceNumber.replaceAll('#',"");
      let sourceNumberTruthLength = sourceNumberTruth.length;
      let substringedTicketNumber = ticketNumber.substring(6-sourceNumberTruthLength,6);
      if(sourceNumberTruth==substringedTicketNumber){
        returnContent.push(true);
        returnContent.push(Number(source.querySelector('.prizeDetail').textContent.replaceAll(',',"")));
      } else {
        returnContent.push(false);
        returnContent.push(0);
      }
    }else if(sourcePrizeTargetNumber==3){
      sourceClass = getPrize(0).querySelector('.prizeClass').textContent.replaceAll('組',"");
      if(sourceClass!=ticketClass&&sourceNumber==ticketNumber){
        returnContent.push(true);
        returnContent.push(Number(source.querySelector('.prizeDetail').textContent.replaceAll(',',"")));
      } else {
        returnContent.push(false);
        returnContent.push(0);
      }
    }else{
      if(ticketNumber==sourceNumber){
        returnContent.push(true);
        returnContent.push(Number(source.querySelector('.prizeDetail').textContent.replaceAll(',',"")));
      } else {
        returnContent.push(false);
        returnContent.push(0);
      }
    }
  }else if(sourceClass.includes('#')){
    let sourceClassTruth = sourceClass.replaceAll('#',"");
    let sourceClassTruthLength = sourceClassTruth.length;
    let substringedTicketClass = ticketClass.substring(3-sourceClassTruthLength,3);
    if(sourceClassTruth==substringedTicketClass&&sourceNumber==ticketNumber){
      returnContent.push(true);
      returnContent.push(Number(source.querySelector('.prizeDetail').textContent.replaceAll(',',"")));
    } else {
      returnContent.push(false);
      returnContent.push(0);
    }
  }else{
    if(ticketClassNumber==`${sourceClass}/${sourceNumber}`){
      returnContent.push(true);
      returnContent.push(Number(source.querySelector('.prizeDetail').textContent.replaceAll(',',"")));
    } else {
      returnContent.push(false);
      returnContent.push(0);
    }
  }
  return returnContent
}
function judgeAll(ticketClassNumber){
  let resultAll = [[],[]];
  for(let i = 0;i<16;i++){
    let result = judge(ticketClassNumber,i);
    //getPrize(i).querySelector('.prizeIsHit').textContent=result[0]?"✅":"❌";
    resultAll[0].push(result[0]);
    resultAll[1].push(result[1]);
  }
  return resultAll;
}
function addlist(element,dataArray){
  let el = document.createElement('tr');
  elid = "_"+randstr('0aA',32);
  while(usedId.includes(elid)){
    elid = "_"+randstr('0aA',32);
  }
  usedId.push(elid);
  el.id = elid;
  for(let i = 0;i<dataArray.length;i++){
    let tableDataElement = crel('td');
    tableDataElement.id = dataArray[i][0];
    if(typeof dataArray[i][1] == "object"){
      tableDataElement.append(dataArray[i][1]);
    } else {
      tableDataElement.textContent = dataArray[i][1];
    }
    el.append(tableDataElement);
  }
  let removeButton = crel('td');
  let rmvbtn = crel('button');
  rmvbtn.setAttribute('onclick',`remove('${elid}');`);
  rmvbtn.setAttribute('uk-close',"");
  // rmvbtn.textContent = "×";
  removeButton.append(rmvbtn);
  el.append(removeButton);
  document.querySelector(element+' tbody').appendChild(el);
}
function randstr(type="0aA",length=6){
  let charact = [];
  if(type.includes('0')){
      charact = charact.concat("0123456789".split(''));
  }
  if(type.includes('a')){
      charact = charact.concat("abcdefghijklmnopqrstuvwxyz".split(''));
  }
  if(type.includes('A')){
      charact = charact.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''));
  }
  let result = [];
  for(let i = 0; i < length; i++){
      let num = Math.floor(Math.random()*charact.length);
      result.push(charact[num]);
  }
  return result.join('');
}
function remove(id){
  document.querySelector(`tr#${id}`).remove();
  let pos = usedId.indexOf(id);
  usedId.splice(pos,1);
}