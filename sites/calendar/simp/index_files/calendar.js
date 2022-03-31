function alter(){

  var fm = document.calForm;
  yy = fm.Y.value;
  mm = fm.M.value -1;
  bgcol01 = fm.bgcolor01.value;
  bgcol02 = fm.bgcolor02.value;
  bgcol03 = fm.bgcolor03.value;
  bgcol04 = fm.bgcolor04.value;
  wdh01 = fm.wdh01.value;
  dd = new Date(yy,mm,1);
  ll = new Date(yy,mm+1,0);
  ld = ll.getDate();
  ww = dd.getDay();

  YY = new Array("2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025");
  MM = new Array("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");


  data='';
  data = data+'<table cellpadding="2" cellspacing="1" width="'+wdh01+'" style="border-collapse:collapse;border-top:4px solid '+bgcol02+';border-bottom:4px solid '+bgcol02+';border-left:2px solid '+bgcol02+';border-right:4px solid '+bgcol02+'">'+"\n";
  data = data+'<tr align="center" bgcolor="#FFFFFF" style="border-left: 1px solid '+bgcol02+'">'+"\n";
  data = data+'<td colspan="7">'+yy+'年'+MM[mm]+'月</td>'+"\n";
  data = data+'</tr>'+"\n";
  data = data+'<tr align="center" bgcolor="'+bgcol03+'" style="border-top:1px solid '+bgcol02+'">'+"\n";
  data = data+'<td style="border-left:1px solid '+bgcol02+'">日</td>'+"\n";
  data = data+'<td style="border-left:1px solid '+bgcol02+'">月</td>'+"\n";
  data = data+'<td style="border-left:1px solid '+bgcol02+'">火</td>'+"\n";
  data = data+'<td style="border-left:1px solid '+bgcol02+'">水</td>'+"\n";
  data = data+'<td style="border-left:1px solid '+bgcol02+'">木</td>'+"\n";
  data = data+'<td style="border-left:1px solid '+bgcol02+'">金</td>'+"\n";
  data = data+'<td style="border-left:1px solid '+bgcol02+'">土</td>'+"\n";
  data = data+'</tr>'+"\n";

  k=1-ww;
  for(i=0;i<7;i++){
    if(i==0) data = data+'<tr align="center" bgcolor="#FFFFFF">'+"\n";
    data = data+'<td style="border-top:1px solid '+bgcol02+';border-left:1px solid '+bgcol02+'"';
    co='';
    if((k > 0) && (k <= ld)){
      if(eval("fm.D"+k+"[0].checked")) co = ' bgcolor="'+bgcol04+'"';
      if(eval("fm.D"+k+"[1].checked")) co = ' bgcolor="'+bgcol01+'"';
    }
    data = data+co;
    data = data +'>';
    co='';
    if((k > 0) && (k <= ld)){
      co='';
      data = data+co;
      data = data+MM[k-1];
      co='';
      data = data+co;
    }
    data = data+'</td>'+"\n";
    k++;
    if(i==6){
      data = data+'</tr>'+"\n";
      if(k <= ld) i= -1;
    }
  }

  data = data+'</table>'+"\n";
  // data = data+'<font color="'+bgcol01+'">■</font>が定休日です。'+"\n";

	//preview
	document.getElementById("preview").innerHTML = data;
	// document.calForm.DATA.value = data;

  html2canvas(document.querySelector("#preview>table"),{scale:3}).then(canvas => { 
    let downloadel = d.querySelector('#img-dl');
    downloadel.href = canvas.toDataURL("image/png");
    downloadel.download = `${yy}-${mm+1}-calendar.png`;
    // d.querySelector('#img-th').src = canvas.toDataURL("image/png");
  });
}