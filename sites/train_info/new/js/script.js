window.addEventListener('load',async()=>{location.search==""?await dataAdd():"";});
async function getData(){
  let data = await fetch('https://script.google.com/macros/s/AKfycbwNR8-_QlFKRbSVowyyP5goqj99qFA5nVS2S54a8BEkW2JOnEy06zRb_KONdcYEFBW6/exec').then((r)=>r.json());
  cache.innerHTML = "<p>"+JSON.stringify(data)+"</p>";
  return data;
}
function getArgs(){
  let arg = location.search.substring(1).split('&');
  let args = {};
  for(let i = 0;i < arg.length;i++){
    let argt = arg[i].split('=');
    args[argt[0]] = argt[1]
  }
  return args;
}
async function dataAdd(){
  let data = await getData();
  upd8time.textContent = data[0];
  for(let i=0;i<data[1].length;i++){
    let parser = new DOMParser();
    let el = parser.parseFromString(collection.innerHTML.replaceAll('$title',data[1][i][1]).replaceAll('$s',`showDetail(${i})`), 'text/html');
    document.querySelector('.collection').append(el.body.childNodes[0]);
  }
}
function showDetail(i){
  history.pushState(null,null,'./?item='+i);
  let arg=getArgs();
}
function search(){
  let cli = document.querySelectorAll('.collection-item');
  for(let i = 0;i<cli.length;i++){
    cli[i].remove();
  }
  let parser = new DOMParser();
  let query = document.querySelector('#search').value;
  let data = JSON.parse(parser.parseFromString(cache.innerHTML,"text/html").querySelector('p').innerText)[1];
  for(let i=0;i<data.length;i++){
    if(data[i][1].includes(query)){
      let el = parser.parseFromString(collection.innerHTML.replaceAll('$title',data[i][1]).replaceAll('$s',`showDetail(${i})`), 'text/html');
      document.querySelector('.collection').append(el.body.childNodes[0]);
    }
  }
  if(document.querySelector('.collection').querySelectorAll('.collection-item').length==0){
    let el = parser.parseFromString(collectionNoFound.innerHTML.replaceAll('$title',`検索中のキーワード 「${query}」 は見つかりませんでした。`), 'text/html');
    document.querySelector('.collection').append(el.body.childNodes[0]);
  }
}
function searchClear(){
  document.querySelector('#search').value = '';
  search();
}