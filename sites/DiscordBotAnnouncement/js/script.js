async function setup(){
    let q = location.search.slice('1').split('&');
    let l = [];
    for(let i = 0; i < q.length; i++){
        let k = q[i].split('=');
        l[k[0]] = k[1]; 
    }
    console.log(l);
    document.querySelector('#article').innerHTML = marked.parse(b642str(l.md));
    dqs('title').innerText = dqs('#article h2').textContent+dqs('#article div').textContent;
}
function uint8ArrToStr(uint8Arr) {
    let encodedStr = String.fromCharCode.apply(null, uint8Arr),
        decodedStr = decodeURIComponent(escape(atob(encodedStr)));
    return decodedStr;
}
function unzip(base64str){
    let gunzip = new Zlib.Gunzip(base64str);
    let plain = gunzip.decompress();
    return plain;
}
function zip(encodedStr){
    let gzip = new Zlib.Gzip(encodedStr);
    let compressed = gzip.compress();
    return compressed;
}
function strToUint8Arr(str) {
    str = btoa(unescape(encodeURIComponent(str))),
        charList = str.split(''), uintArray = [];
    for (let i = 0; i < charList.length; i++) {
        uintArray.push(charList[i].charCodeAt(0));
    }
    return new Uint8Array(uintArray);
}
function str264(str){
    let result = encodeURIComponent(str);
    console.log(result);
    result = strToUint8Arr(result);
    console.log(result);
    result = zip(result);
    result = btoa(result)
    console.log(`${strbytes(str)}B => ${strbytes(JSON.stringify(result))}B`);
    return result;
}
function b642str(b64){
    let result = atob(b64).split(',');
    for(let i = 0;i < result.length;i++){
        result[i] = Number(result[i]);
    }
    console.log(result);
    result = unzip(result);
    result = uint8ArrToStr(result);
    result = decodeURIComponent(result);
    console.log(result);
    console.log(`${strbytes(b64)}B => ${strbytes(JSON.stringify(result))}B`);
    return result;
}
function strbytes(str){
    return(encodeURIComponent(str).replace(/%../g,"x").length);
}