chn = new Array("week1","week2","week3","week4","week5","week6","week7","D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","D13","D14","D15","D16","D17","D18","D19","D20","D21","D22","D23","D24","D25","D26","D27","D28","D29","D30","D31");
d = document;
window.addEventListener("load",()=>{
  let now = new Date();
  d.querySelector('select[name="Y"]>option[value="'+now.getFullYear()+'"]').setAttribute('selected','selected');
  d.querySelector('select[name="M"]>option[value="'+(now.getMonth()+2)+'"]').setAttribute('selected','selected');
  alter();
  let day = ["日","月","火","水","木","金","土"];
  updatecb();
  d.querySelector('label[for="t1"]>span').textContent = day[new Date(now.getFullYear(),(now.getMonth()+1),1).getDay()];
  d.querySelector('label[for="t2"]>span').textContent = day[new Date(now.getFullYear(),(now.getMonth()+1),2).getDay()];
  d.querySelector('label[for="t3"]>span').textContent = day[new Date(now.getFullYear(),(now.getMonth()+1),3).getDay()];
  d.querySelector('label[for="t4"]>span').textContent = day[new Date(now.getFullYear(),(now.getMonth()+1),4).getDay()];
  d.querySelector('label[for="t5"]>span').textContent = day[new Date(now.getFullYear(),(now.getMonth()+1),5).getDay()];
  d.querySelector('label[for="t6"]>span').textContent = day[new Date(now.getFullYear(),(now.getMonth()+1),6).getDay()];
  d.querySelector('label[for="t7"]>span').textContent = day[new Date(now.getFullYear(),(now.getMonth()+1),7).getDay()];
  disableDays(String(now.getMonth()+2),String(now.getFullYear()));
  color01upd();
  color02upd();
  color03upd();
  if(navigator.userAgent.includes("Firefox")){
    Swal.fire({
      title: '警告',
      text: 'Firefox環境では画像出力した際にレイアウトが崩れる場合があります。',
      icon: 'warning',
      confirmButtonText: '了承した上で利用する',
      cancelButtonText: 'Chromeをインストールする',
      showCancelButton: 'true'
    }).then((result)=>{
      if (!result.isConfirmed){
        window.open("https://chrome.google.com/");
      }
    });
  }
});

function chBxOn(){
  for(i=0; i<chn.length; i++) {
    document.calForm.elements[chn[i]].checked = true;
  }
}
function chBxOff(){
  for(i=0; i<chn.length; i++) {
    document.calForm.elements[chn[i]].checked = false;
  }
}

function ymupd(){
  alter();
  updatecb();
  let day = ["日","月","火","水","木","金","土"];
  let selectedyear = d.querySelector('select[name="Y"]').value;
  let selectedmonth = d.querySelector('select[name="M"]').value;
  d.querySelector('label[for="t1"]>span').textContent = day[new Date(selectedyear+"-"+selectedmonth+"-"+"1").getDay()];
  d.querySelector('label[for="t2"]>span').textContent = day[new Date(selectedyear+"-"+selectedmonth+"-"+"2").getDay()];
  d.querySelector('label[for="t3"]>span').textContent = day[new Date(selectedyear+"-"+selectedmonth+"-"+"3").getDay()];
  d.querySelector('label[for="t4"]>span').textContent = day[new Date(selectedyear+"-"+selectedmonth+"-"+"4").getDay()];
  d.querySelector('label[for="t5"]>span').textContent = day[new Date(selectedyear+"-"+selectedmonth+"-"+"5").getDay()];
  d.querySelector('label[for="t6"]>span').textContent = day[new Date(selectedyear+"-"+selectedmonth+"-"+"6").getDay()];
  d.querySelector('label[for="t7"]>span').textContent = day[new Date(selectedyear+"-"+selectedmonth+"-"+"7").getDay()];
  disableDays(selectedmonth,selectedyear);
}

function disableDays(m,y){
  for(let i = 0;d.querySelectorAll('input[type="checkbox"].datecb.disabled').length > i;i++){
    d.querySelectorAll('input[type="checkbox"].datecb.disabled')[i].classList.remove('disabled');
    d.querySelector('label.disabled').classList.remove('disabled');
  }
  switch(m){
    case "2":
      d.querySelector('input#d30').classList.add('disabled');
      d.querySelector('label[for="d30"]').classList.add('disabled');
      y = Number(y);
      if(!((y%4===0 && y % 100 !== 0) || y % 400 === 0)) {
        d.querySelector('input#d29').classList.add('disabled');
        d.querySelector('label[for="d29"]').classList.add('disabled');
      }
      case "4":
        case "6":
          case "9":
            case "11":
              d.querySelector('input#d31').classList.add('disabled');
              d.querySelector('label[for="d31"]').classList.add('disabled');
      break;
  }
}

function getweekDay(d=0,m=0,y=0,mode=0){
  let weekday;
  switch(mode){
    case 0:
      weekday = [0,1,2,3,4,5,6];
      break;
    case 1:
      weekday = str2arr("Sun,Mon,Tue,Wed,Thu,Fri,Sat");
      break;
    case 2:
      weekday = str2arr("Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday");
      break;
    case 3:
      weekday = str2arr("日,月,火,水,木,金,土");
      break;
  }
  return weekday[new Date(y,m,d).getDay()];
}

function str2arr(str=""){
  return str.split(",");
}

W1 = new Array("D1","D8","D15","D22","D29");
function w1(){
  for(i=0; i<W1.length; i++) {
    document.calForm.elements[W1[i]].checked = d.querySelector('input#t1').checked;
  }
}


W2 = new Array("D2","D9","D16","D23","D30");
function w2(){
  for(i=0; i<W2.length; i++) {
    document.calForm.elements[W2[i]].checked = d.querySelector('input#t2').checked;
  }
}


W3 = new Array("D3","D10","D17","D24","D31");
function w3(){
  for(i=0; i<W3.length; i++) {
    document.calForm.elements[W3[i]].checked = d.querySelector('input#t3').checked;
  }
}


W4 = new Array("D4","D11","D18","D25");
function w4(){
  for(i=0; i<W4.length; i++) {
    document.calForm.elements[W4[i]].checked = d.querySelector('input#t4').checked;
  }
}


W5 = new Array("D5","D12","D19","D26");
function w5(){
  for(i=0; i<W5.length; i++) {
    document.calForm.elements[W5[i]].checked = d.querySelector('input#t5').checked;
  }
}


W6 = new Array("D6","D13","D20","D27");
function w6(){
  for(i=0; i<W6.length; i++) {
    document.calForm.elements[W6[i]].checked = d.querySelector('input#t6').checked;
  }
}


W7 = new Array("D7","D14","D21","D28");
function w7(){
  for(i=0; i<W7.length; i++) {
    document.calForm.elements[W7[i]].checked = d.querySelector('input#t7').checked;
  }
}

let w = [
  [],
  [1,8,15,22,29],
  [2,9,16,23,30],
  [3,10,17,24,31],
  [4,11,18,25],
  [5,12,19,26],
  [6,13,20,27],
  [7,14,21,28]
]

function updatecb(){
  let bs = d.querySelector("#holcb");
  bs.innerHTML = "";
  let sunpos = 8-getweekDay(1,d.calForm.M.value-1,d.calForm.Y.value,0);
  let weekdayel = [];
  for(let i = sunpos; i < 8; i++){
    weekdayel.push(`<td><label for="t${i}"><input type="checkbox" value="${i}" name="week${i}" onclick="w${i}()" id="t${i}"><span>↓</span></label></td>`);
  }
  for(let i = 1; i < sunpos; i++){
    weekdayel.push(`<td><label for="t${i}"><input type="checkbox" value="${i}" name="week${i}" onclick="w${i}()" id="t${i}"><span>↓</span></label></td>`);
  }
  weekdayel = weekdayel.join("");
  let tr1 = d.createElement('tr');
  tr1.innerHTML = weekdayel;
  let tr2 = d.createElement('tr');
  tr2.innerHTML = `<td colspan="7"><hr size="1"></td>`;
  let trs = [[],[],[],[],[],[]];
  
  for (let i = 1; i<8-sunpos+1; i++){
    trs[0].push("<td></td>");
  }
  let j = 0;
  for(let i = 1; i<32; i++){
    if(trs[j].length < 6){
      trs[j].push(`<td><label for="d${i}"><input type="checkbox" value="${i}" name="D${i}" id="d${i}" class="datecb">${i}</label></td>`);
    }else{
      trs[j].push(`<td><label for="d${i}"><input type="checkbox" value="${i}" name="D${i}" id="d${i}" class="datecb">${i}</label></td>`);
      j++;
    }
  }
  
  let tr3 = d.createElement('tr');
  let tr4 = d.createElement('tr');
  let tr5 = d.createElement('tr');
  let tr6 = d.createElement('tr');
  let tr7 = d.createElement('tr');
  let tr8 = d.createElement('tr');
  let tr9 = d.createElement('tr');
  let tr10 = d.createElement('tr');
  tr3.innerHTML = trs[0].join("");
  tr4.innerHTML = trs[1].join("");
  tr5.innerHTML = trs[2].join("");
  tr6.innerHTML = trs[3].join("");
  tr7.innerHTML = trs[4].join("");
  tr8.innerHTML = trs[5].join("");
  tr9.innerHTML = `<td colspan="7"><hr size="1"></td>`;
  tr10.innerHTML = `<td colspan="4"><input type="button" value="すべてにチェックを入れる" onclick="chBxOn()"></td><td colspan="1"></td><td colspan="2"><input type="button" value="すべて外す" onclick="chBxOff()"></td>`;
  bs.appendChild(tr1);
  bs.appendChild(tr2);
  bs.appendChild(tr3);
  bs.appendChild(tr4);
  bs.appendChild(tr5);
  bs.appendChild(tr6);
  bs.appendChild(tr7);
  bs.appendChild(tr8);
  bs.appendChild(tr9);
  bs.appendChild(tr10);
}
function newTag(tag) {
  var elem = document.createElement(tag);
  for (var i = 1; i < arguments.length; i++) {
      elem.appendChild(arguments[i]);
  }
  return elem;
};