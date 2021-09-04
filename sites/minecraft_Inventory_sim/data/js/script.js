let d = document, invjson, invjsona, invjsonb, iSlot, itemCount, xhr, jsonprocess, iiii = 0, selcsid, containerDefName;
const versionStatus = "Beta";
const versionNum = "0.17.11";
function reload() {
    if(!containerDefName) {
        containerDefName = "インベントリ";
    }
    jsonprocess = 15, iiii = 0;
    for(let iii = 0;iii < d.querySelectorAll('td').length; iii++) {
        d.querySelectorAll('td')[iii].innerHTML = '';
    }
    d.querySelector('#jsoninput').value = d.querySelector('#jsoninput').value.replace('/data merge block ~ ~ ~ ','');
    if (d.querySelector('#jsoninput').value.indexOf('{Items:') === -1 && d.querySelector('#jsoninput').value.lastIndexOf('{Inventory:') === -1) {
        invjsonb = "{"+d.querySelector('#jsoninput').value+"}";
    } else {
        invjsonb = d.querySelector('#jsoninput').value;
    }
    console.log(invjsonb);
    iiii++;
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    invjsona = invjsonb;
    iiii++;
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    invjsona = invjsona.replace(/Inventory/g,`"Inventory"`);
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/Items/g,`"Inventory"`);
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/id/g,`"id"`);
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/Slot:/g,`"Slot":"`);
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/b,/g,`b",`);
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/b}/g,`b"}`);
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/tag/g,`"tag"`);
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/Enchantments/g,`"Enchantments"`);
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/Count:/g,`"Count":"`);
    console.log(invjsona);
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/'/g,'');
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/CustomModelData/g,'"CustomModelData"');
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/display/g,'"display"');
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/Name/g,'"Name"');
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjsona = invjsona.replace(/Custom"/g, '"Custom');
    console.log(`${iiii}/${jsonprocess} converting to JSON format...`);
    iiii++;
    invjson = JSON.parse(invjsona);
    console.log(`completed.`);
    console.log(invjson);
    if(invjson.CustomName !== undefined) {
        if(invjson.CustomName.text !== "" && invjson.CustomName.text !== undefined) {
            d.querySelector('#storageType').innerText = invjson.CustomName.text;
        } else {
            d.querySelector('#storageType').innerText = containerDefName;
        }
    } else {
        d.querySelector('#storageType').innerText = containerDefName;
    }

    for (let i = 0; i < invjson.Inventory.length; i++){   
        console.log(`${i+1}/${invjson.Inventory.length} image inserting...`);
        iSlot = invjson.Inventory[i].Slot.slice(0,-1);
            d.querySelector(`#container-${iSlot}`).innerHTML = `<img src="./data/img/${invjson.Inventory[i].id.slice(10)}.png" class="item" onclick="openState(${iSlot});">`;
            if (d.querySelectorAll('.item')[i].naturalHeight === 0) {
                d.querySelector(`#container-${iSlot}`).innerHTML = `<img src="./data/img/missing.png" class="item" onclick="openState(${iSlot});">`;
            } else {
                d.querySelector(`#container-${iSlot}`).innerHTML = `<img src="./data/img/${invjson.Inventory[i].id.slice(10)}.png" class="item" onclick="openState(${iSlot});">`;
            }
        if (invjson.Inventory[i].tag) {
            if (invjson.Inventory[i].tag.Enchantments) {
                d.querySelector(`#container-${iSlot}`).innerHTML = `${d.querySelector(`#container-${iSlot}`).innerHTML}<img src="https://aika-toki.github.io/others/images/enchant.gif" class="enchant_effect">`;
                console.log(`effect has inserted! URL:https://aika-toki.github.io/others/images/enchant.png`);
            } else {
                d.querySelector(`#container-${iSlot}`).innerHTML;
            }
        }
        console.log(`image has inserted! URL:${d.querySelector(`#container-${iSlot}`).getElementsByClassName('item')[0].src}`);
        if(invjson.Inventory[i].Count) {
            itemCount = invjson.Inventory[i].Count.slice(0,-1);
            if (itemCount <= "1") {
                d.querySelector(`#container-${iSlot}`).innerHTML;
            } else if (itemCount.length === 1) {
                d.querySelector(`#container-${iSlot}`).innerHTML = `${d.querySelector(`#container-${iSlot}`).innerHTML}<label class="counto">${itemCount}</label>`
            } else {
                d.querySelector(`#container-${iSlot}`).innerHTML = `${d.querySelector(`#container-${iSlot}`).innerHTML}<label class="countt">${itemCount}</label>`
            }
        }
    }
    console.log(`completed.`);
}
function openState(slotid){
    console.log(slotid);
}
function imageReload() {
    for (let i = 0; i < invjson.Inventory.length; i++){   
        console.log(`${i+1}/${invjson.Inventory.length} image reloading...`);
        iSlot = invjson.Inventory[i].Slot.slice(0,-1);
        d.querySelector(`#container-${iSlot}`).innerHTML = `<img src="./data/img/${invjson.Inventory[i].id.slice(10)}.png" class="item" onclick="openState(${iSlot});">`;
        if (d.querySelectorAll('.item')[i].naturalWidth === 0) {
            d.querySelector(`#container-${iSlot}`).innerHTML = `<img src="./data/img/missing.png" class="item" onclick="openState(${iSlot});">`;
        }
        if (invjson.Inventory[i].tag) {
            if (invjson.Inventory[i].tag.Enchantments) {
                d.querySelector(`#container-${iSlot}`).innerHTML = `${d.querySelector(`#container-${iSlot}`).innerHTML}<img src="https://aika-toki.github.io/others/images/enchant.gif" class="enchant_effect" onclick="openState(${iSlot});">`;
                console.log(`effect has reloaded! URL:../../others/images/enchant.png`);
            } else {
                d.querySelector(`#container-${iSlot}`).innerHTML;
            }
        }
        console.log(`image has reloaded! URL:${d.querySelector(`#container-${iSlot}`).getElementsByClassName('item')[0].src}`);
        if(invjson.Inventory[i].Count) {
            itemCount = invjson.Inventory[i].Count.slice(0,-1);
            if (itemCount <= "1") {
                d.querySelector(`#container-${iSlot}`).innerHTML;
            } else if (itemCount.length === 1) {
                d.querySelector(`#container-${iSlot}`).innerHTML = `${d.querySelector(`#container-${iSlot}`).innerHTML}<label class="counto">${itemCount}</label>`
            } else {
                d.querySelector(`#container-${iSlot}`).innerHTML = `${d.querySelector(`#container-${iSlot}`).innerHTML}<label class="countt">${itemCount}</label>`
            }
        }
    }
    console.log(`completed.`);
}
function xhrgetsetup(url,onsuccess,onfail) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            onsuccess;
        } else if(xhr.readyState === 4 && xhr.status === 404) {
            onfail;
        }
    }
}

function cmdpr() {
    let cmd = d.getElementById('cmdp').value;
    d.getElementById('cmdp').value = '';
    
    switch (cmd) {
        case '/reload image':
            imageReload();
            break;
        case '/reload json':
            reload();
            break;
        case '/reload':
            alert(`usage: '/reload <content>'`);
            break;
        case '/type storage':
            containerDefName = "チェスト";
            toStorage();
            d.querySelector('.Container').id = "Storage";
            break;
        case '/type inventory':
            containerDefName = "インベントリ";
            toInventory();
            d.querySelector('.Container').id = "Inventory";
            break;
        case '/version':
            alert('Status:'+versionStatus+',Version:'+versionNum);
            break;
        default:
            alert(`Unknown command:'${cmd}'`);
    }
}

function toStorage() {
    if (d.querySelector('.Container').id === "Inventory") {
        for(let iiiii = 0; iiiii < d.querySelectorAll(".containerslot").length; iiiii++) {
            selcsid = d.querySelectorAll(".containerslot")[iiiii].id;
            selcsid = `container-${String(Number(selcsid.slice(10)) - 9)}`;
            d.querySelectorAll(".containerslot")[iiiii].id = selcsid;
        }
        reload();
    }
}

function toInventory() {
    if (d.querySelector('.Container').id === "Storage") {
        for(let iiiiii = 0; iiiiii < d.querySelectorAll(".containerslot").length; iiiiii++) {
            selcsid = d.querySelectorAll(".containerslot")[iiiiii].id;
            selcsid = `container-${String(Number(selcsid.slice(10)) + 9)}`;
            d.querySelectorAll(".containerslot")[iiiiii].id = selcsid;
        }
        reload();
    }
}