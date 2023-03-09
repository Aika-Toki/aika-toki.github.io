const delayMilliSec = 250;
const waitMin = 1;

const TradingVue = window['TradingVueJs'].TradingVue;


let waitMilliSec = 60000 * waitMin;

google.charts.load('current', {
  'packages': ['corechart']
});
let example;
fetch('https://cloud.iexapis.com/stable/stock/aapl/chart/5dm?token=pk_02c9ee8d508840d1a18853b8c635b549')
  .then((r) => r.json())
  .then((r) => {
    example = r;
    example.splice(0, example.length - 200);
    console.log(example.length);
    console.log(example);
    // mainChart();
    chartLite();
    startsim();
  });


function mainChart(result = example) {
  //チャートに描画するための最終的なデータを入れる
  var chartData = new google.visualization.DataTable();
  //日付ようにString型のカラムを一つ、チャート描画用に数値型のカラムを７つ作成
  chartData.addColumn('string');
  for (var x = 0; x < 7; x++) {
    chartData.addColumn('number');
  }
  //いちいち書くのが面倒なので、取得した情報の長さを配列に入れる
  var length = result.length;
  //描画用のデータを一時的に入れる
  var insertingData = new Array(length);
  //平均を出すための割り算の分母
  var divide = 0;
  //二次元配列aveに、平均線の日数と平均値を入れる
  var ave = [
    [],
    [],
    []
  ];
  //平均線の計算に用いる
  var temp = 0;
  //５日移動平均線の算出
  //基準日より５日前までのデータを足し合わせ、平均値を出す


  for (var m = 0; m < length - 2; m++) {
    for (var n = 0; n < 3; n++) {
      if (result[m + n].close != '') {
        temp = temp + parseFloat(result[m + n].close);
        divide++;
      }
    }
    ave[0][m] = temp / divide;
    temp = 0;
    divide = 0;
  }
  //2５日移動平均線の算出
  //上と同様の処理
  for (var m = 0; m < length - 4; m++) {
    for (var n = 0; n < 5; n++) {
      if (result[m + n].close != '') {
        temp = temp + parseFloat(result[m + n].close);
        divide++
      }
    }
    ave[1][m] = temp / divide;
    temp = 0;
    divide = 0;
  }
  //５0日移動平均線の算出
  //上と同様の処理
  for (var m = 0; m < length - 19; m++) {

    for (var n = 0; n < 20; n++) {
      if (result[m + n].close != '') {
        temp = temp + parseFloat(result[m + n].close);
        divide++
      }
    }
    ave[2][m] = temp / divide;
    temp = 0;
    divide = 0;
  }
  for (let i = 0; i < 3; i++) {
    let temp = [3, 5, 20];
    for (let ii = 0; ii < temp[i] - 1; ii++) {
      ave[i].unshift(result[0].open);
    }
  }
  //for文をまとめるため、出来高棒グラフの処理もここで行う
  //出来高を保持する配列
  var volume = new Array();
  //チャートの日付を保持する配列
  var dates = new Array();
  for (var s = 0; s < length; s++) {
    if (result[s].volume != '') {
      // volume[s] = result[s].volume;
      dates[s] = String(result[s].minute);
    }
  }
  //配列insertingDataの中に、[安値、始値、高値、終値、５日移動平均線、２５日移動平均線、５０日移動平均線]の形で値を入れ込む
  for (var a = 0; a < length; a++) {
    insertingData[a] = [dates[a], parseFloat(result[a].low), parseFloat(result[a].open), parseFloat(result[a].close), parseFloat(result[a].high), ave[0][a], ave[1][a], ave[2][a]]
  }
  //チャート描画用の配列の中に、insertingDataの値を入れ込む
  //最古の50日分のデータまでは移動平均線のデータが揃っていないので、取り除く
  for (var i = 0; i < insertingData.length - 20; i++) {
    chartData.addRow(insertingData[insertingData.length - i]);
  }
  //チャートの見た目に関する記述、詳細は公式ドキュメントをご覧になってください
  var options = {
    chartArea: {
      left: 80,
      top: 10,
      right: 80,
      bottom: 10,
      backgroundColor: "#333"
    },
    backgroundColor: "#000",
    colors: ["#fff"],
    legend: {
      position: 'none',
    },
    vAxis: {
      viewWindowMode: 'maximized',
      gridlines: {
        color: "#666"
      },
      textStyle: {
        color: "#fff"
      }
    },
    hAxis: {
      format: 'hh:mm',
      direction: -1,
    },
    animation: {
      duration: 0,
      easing: "linear",
      startup: true
    },
    bar: {
      groupWidth: '100%'
    },
    candlestick: {
      hollowIsRising: false,
      fallingColor: {
        fill: "#0088ff",
        stroke: "#000",
        strokeWidth: 0
      },
      risingColor: {
        fill: "#ff8800",
        stroke: "#000",
        strokeWidth: 0
      }
    },
    width: window.innerWidth*100/100,
    height: window.innerHeight*88/100,
    lineWidth: 2,
    enableInteractivity: false,
    curveType: 'function',
    //チャートのタイプとして、ローソク足を指定
    seriesType: "candlesticks",
    //ローソク足だでなく、線グラフも三種類表示することを記述
    series: {
      1: {
        type: "line",
        color: '#ff0000',
      },
      2: {
        type: "line",
        color: '#00ffff',
      },
      3: {
        type: "line",
        color: '#ffff00',
      },
    }
  };
  //描画の処理
  var chart = new google.visualization.ComboChart(document.getElementById('main'));
  chart.draw(chartData, options);
  //出来高棒グラフを作成する関数を呼び出し
  // volumeChart(volume, dates, length);
  // console.log(ave);
}

function chartLite(data = example){
  let arr = [];
  for(let i=0;i<data.length;i++){
    let tar = data[i];
    let time = tar['minute']?`${tar['date']}T${tar['minute']}:00Z`:tar.date;
    // logger(time);
    let cache = [new Date(time).getTime(),tar.open,tar.high,tar.low,tar.close,tar.volume];
    arr.push(cache);
  }
  console.log(JSON.stringify(arr));
  document.querySelector('div#vue').innerHTML = '<trading-vue :data="this.$data" :width="this.width" :height="this.height"></trading-vue>';
  new Vue({
    el: '#vue',
    components: {
      'trading-vue': TradingVue
    },
    data: {
      ohlcv: arr,
      width: window.innerWidth*100/100,
      height: window.innerHeight*88/100
    }
  });
}

function volumeChart(volume, dates, length) {
  var chartData = new google.visualization.DataTable();
  //出来高の値と日付のためのカラムを作成
  chartData.addColumn('string');
  chartData.addColumn('number');
  var insertingData = new Array();
  //配列insertingDataの中に、[日付、出来高]の形式でデータを入れ込む
  for (var a = 0; a < length; a++) {
    insertingData[a] = [dates[a], parseInt(volume[a])]
  }
  //insertingDataの値をチャート描画用の変数に入れ込む
  for (var i = insertingData.length - 50; i > 0; i--) {
    chartData.addRow(insertingData[i]);
  }
  //ローソク足の時と同じように、見た目の設定をする
  var options = {
    chartArea: {
      left: 80,
      top: 10,
      right: 80,
      bottom: 80
    },
    colors: ['#003A76'],
    legend: {
      position: 'none',
    },
    bar: {
      groupWidth: '100%'
    },
    hAxis: {
      direction: -1
    },
    width: 1200,
    vAxis: {
      viewWindowMode: 'maximized'
    },
  }
  var chart = new google.visualization.ColumnChart(document.getElementById('volume'));
  chart.draw(chartData, options);
}

function simulation(tryTime=20,base=138,seed="Coal",min=-5,max=5,time=1,datetime=new Date()){
  console.log([tryTime,base,seed,min,max,time,datetime.toISOString()]);
  let data = {date: datetime.getTime(),open: base,high: base,low :base,close: base,volume: tryTime};
  // example.splice(0,1);
  example.push(data);
  data = example[example.length-1];
  let value = base;
  let i = 0;
  let repeat = setInterval(()=>{
    if(i>=tryTime || simstatus==0){
      clearInterval(repeat);
      data.close = value;
      console.log('simulation Ended.');
      if(i>=tryTime){
        simstatus = 2;
      }
    }
    let libgen = lib_generate(seed,min,max,new Date(datetime.getTime()+(i*delayMilliSec)));
    let lib = lib_run(libgen);
    time = new Decimal(time);
    let randomize = time.times(lib);
    // logger(randomize)
    value=randomize.add(value).div(time).round().mul(time).toNumber();
    // value=Math.round((value+randomize)/time)*time;
    value<1?value=1:value;
    data.high=value>data.high?value:data.high;
    data.low=value<data.low?value:data.low;
    data.close=value;
    logger(`[${String(i+1).padStart(String(tryTime).length,0)} / ${tryTime}] ${libgen}\n${JSON.stringify(data)}`);
    // mainChart();
    chartLite();
    i++;
  },delayMilliSec);
}
function exampleAdd(){
  simulation(Math.ceil(waitMilliSec/delayMilliSec),example[example.length-1].close,"Coal",-10,10,0.001)
}
let simstatus = 0;
function startsim(){
  simstatus = 1;
  exampleAdd();
  let simu = setInterval(()=>{
    if(simstatus == 2){
      simstatus = 1;
      exampleAdd();
      console.log('Active One');
    }
    if(simstatus == 0){
      clearInterval(simu);
    }
  },delayMilliSec);
}
function stopsim(){
  simstatus = 0;
}
function logger(content){
  content+="\n--------------------------------------------------\n";
  document.querySelector('pre#console').innerText=content+document.querySelector('pre#console').innerText;
}
function toggle(){
  simstatus == 0?startsim():stopsim();
}