// document.onload = ()=>{
//     document.querySelector('#url').addEventListener('input',urlconv);
// 	var url = location.href;
// 	var query = location.search;
// 	if(query.slice(1) != ""){
// 		location.href=inflate(query.slice(1));
// 	}
// };

function clipboadCopy(string){
	var urltext = document.getElementById(string);
	urltext.select();
	document.execCommand("copy");
	alert("コピーしました");
}

// 圧縮関数
function deflate(val) {
    val = encodeURIComponent(val);
    val = RawDeflate.deflate(val);
    val = btoa(val); // base64エンコード
    return val;
}

// 復号関数
function inflate(val) {
    val = atob(val); // base64デコード
    val = RawDeflate.inflate(val);
    val = decodeURIComponent(val);
    return val;
}

function urlconv(){
    let el = document.querySelector('#url');
    let r = deflate(el.value);
    document.querySelector('#shorturl').value = "https://aika-toki.github.io/sites/shorten/?"+r;
}
function exurlconv(val){
    let r = deflate(val);
    return "https://aika-toki.github.io/sites/shorten/?"+r;
}