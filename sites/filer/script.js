let _fileCache;
let cache = [];
require.config({ paths: { vs: "./node_modules/monaco-editor/min/vs" } });
function scr(){
  let el = document.createElement('script');
  el.src = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js";
  el.id = "fas";
  return el;
}
function upload(importfile){
  let reader = new FileReader();
  reader.onload = ()=>{
    let file = reader.result;
    let zipArr = new Uint8Array(file);
    let unzip = new Zlib.Unzip(zipArr);
    _fileCache = unzip;
    let importFileList = unzip.getFilenames();
    importFileList = importFileList.sort();
    let tree = pathString2Tree(importFileList);
    console.log(tree);
    // if(document.querySelector('script#fas')){
    //   document.querySelector('script#fas').remove();
    // }
    document.querySelector('div#explorer').innerHTML = tree2html(tree);
    // document.head.appendChild(scr());
  }
  reader.readAsArrayBuffer(importfile)
  console.log(importfile)
}
function pathString2Tree(patharr) {
  let paths = patharr;
  // paths = paths.filter(path=>path.charAt(path.length-1)!="/");
  var tree = [];
  //ループする！
  for(let i = 0; i < paths.length; i++){
    paths[i] = "/"+paths[i];
    paths[i] = paths[i].charAt(paths[i].length-1)=="/"?paths[i].substring(0,paths[i].length-1):paths[i];
  }
  console.log(paths);
  paths.forEach(path => {
      // currentLevelを rootに初期化する
      var pathParts = path.split('/');
      pathParts.shift();
      // currentLevelを rootに初期化する
      var currentLevel = tree;

      pathParts.forEach(part => {

          // pathが既存しているかどうかをチェックする
          var existingPath = currentLevel.filter(i=>i.name==part);
          // console.log(currentLevel.filter(i=>i.name==part),part,existingPath);

          if (existingPath.length!=0) {
              // Pathはすでにツリー構造に入っているので、追加しない
              // current levelを下の子供階層に設定し直す
              currentLevel = existingPath[0].children;
              // console.log(`${part} is exist!`);
            } else {
              var newPart = {
                name: part,
                children: [],
                absolutePath: path.substring(1)
              }
              
              currentLevel.push(newPart);
              currentLevel = newPart.children;
              // console.log(`${part} is created!`);
          }
      });
  });

  cache.push(tree);
  return tree;
}
function tree2html(tree){
  let htmloutput = [];
  tree.forEach(path=>{
    let type=path.name.includes('.')?"file":"directory";
    let element;
    if(type=="file"){
      element = `<div class="file" onclick="fileload('${path.absolutePath}')"><span>${path.name}</span></div>`;
    } else {
      element = `<div class="directory"><details open><summary>${path.name}</summary><div class="children">${tree2html(path.children)}</div></details></div>`;
    }
    htmloutput.push(element);
  });
  return htmloutput.join('');
}
function demo(){
  // let data = [
  //   {
  //     "name": "TopFolder",
  //     "children": [
  //       {
  //         "name": "ParentFolder",
  //         "children": [
  //           {
  //             "name": "Item.txt",
  //             "children": []
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Item.txt",
  //         "children": []
  //       }
  //     ]
  //   },
  //   {
  //     "name": "Item.txt",
  //     "children": []
  //   }
  // ];
  // document.querySelector('div#explorer').innerHTML = tree2html(data);
  let url = "./Example.zip";
  let xhr = new XMLHttpRequest;
  xhr.onload = ()=>{
    upload(new Blob([xhr.response]));
  }
  xhr.open('GET',url,true);
  xhr.responseType = "arraybuffer";
  xhr.send();
}
function allOpen(){
  let el = document.querySelectorAll('details');
  el.forEach(element=>{
    element.hasAttribute('open')?null:element.setAttribute('open','');
  });
}
function allClose(){
  let el = document.querySelectorAll('details');
  el.forEach(element=>{
    element.hasAttribute('open')?element.removeAttribute('open'):null;
  });
}
function fileload(path){
  let fileBuffer = _fileCache.decompress(path);
  let filecontent = new TextDecoder().decode(fileBuffer);
  let fileName = path.split('/')[path.split('/').length-1];
  reloadEditor(filecontent,path);
}
function reloadEditor(content,fileName){
  document.querySelector('#editor').remove();
  let el = document.createElement('div');
  el.id = "editor";
  document.querySelector('#column-right').appendChild(el);
  require(["vs/editor/editor.main"],()=>{
    let editor = monaco.editor.create(
      document.getElementById("editor"),
      {
        lineNumbers: 'on',
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        theme: 'vs-dark',
        value: content
      });
      let modelUri = monaco.Uri.file(fileName);
      const model = monaco.editor.getModel(modelUri)?monaco.editor.getModel(modelUri):monaco.editor.createModel(content, undefined, modelUri);
      editor.setModel(model);
  });
}