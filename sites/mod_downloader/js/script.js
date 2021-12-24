let confirmDialog, betaCondition, betaLinks;
let dataloc, data;

function download_beta(id) {
    if(id.length !== 19) {
        alert('IDの形式が不正です。');
        document.querySelector('#downloadID').value = '';
        return false;
    }
    betaCondition = links.id.indexOf(id.slice(0,4)+id.slice(5,9)+id.slice(10,14)+id.slice(15,19));
    if(betaCondition === -1) {
        alert('無効なIDです。');
        document.querySelector('#downloadID').value = '';
        return false;
    } else {
        betatitle = links.title[betaCondition];
        betaLinks = links.link[betaCondition];
        confirmDialog = window.confirm(`『${betatitle}』(${betaLinks.length}ファイル)をダウンロードしますか？
ポップアップの許可をしていない場合はキャンセルし、ポップアップテストを行い、ポップアップブロックを解除してください。`);
        if(confirmDialog === false) {
            return false;
        } else if(confirmDialog === true) {
            for(let i = 0; i < betaLinks.length; i++) {
                window.open(betaLinks[i]);
            }
        }
    }
}

function download_alpha(id) {
    if(id.length !== 19) {
        alert('IDの形式が不正です。');
        document.querySelector('#downloadID').value = '';
        return false;
    }
    betaCondition = links.id.indexOf(id.slice(0,4)+id.slice(5,9)+id.slice(10,14)+id.slice(15,19));
    if(betaCondition === -1) {
        alert('無効なIDです。');
        document.querySelector('#downloadID').value = '';
        return false;
    } else {
        let jsonurlbase = "https://script.google.com/macros/s/AKfycbzAmXJKJgPuso_FDStgsIu0ZXD3yT6TusoO79bpcfipQr31Eosllbdjq6VpZSeAJrYw/exec";
        let jsonurl = `${jsonurlbase}?i=${document.querySelector("#downloadID").value}&s=0`;
        $.getJSON(jsonurl, (data)=>{
            let jsondata = data;
            
        }
        );
        betatitle = links.title[betaCondition];
        betaLinks = links.link[betaCondition];
        confirmDialog = window.confirm(`『${betatitle}』(${betaLinks.length}ファイル)をダウンロードしますか？
    ポップアップの許可をしていない場合はキャンセルし、ポップアップテストを行い、ポップアップブロックを解除してください。`);
        if(confirmDialog === false) {
            return false;
        } else if(confirmDialog === true) {
            for(let i = 0; i < betaLinks.length; i++) {
                window.open(betaLinks[i]);
            }
        }
    }
}

function dlidchanged(id) {
    if(id.length === 16) {
        document.querySelector('#downloadID').value = `${id.slice(0,4)}-${id.slice(4,8)}-${id.slice(8,12)}-${id.slice(12,16)}`;
    }
}