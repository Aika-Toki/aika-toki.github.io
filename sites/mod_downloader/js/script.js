let confirmDialog, betaCondition, betaLinks;
let dataloc, data;
const links = {
    'id':[
        'cTkKdCyTj3GAvZE8',
        'eRQPF63KrVuvVGhV'
    ],
    'title':[
        '冒険サーバー(仮称)用mod',
        '冒険サーバー(仮称)用mod(追加)'
    ],
    'link':[
        [
            'https://www.curseforge.com/minecraft/mc-mods/iron-chests/download/3405717/file',
            'https://www.curseforge.com/minecraft/mc-mods/jei/download/3480853/file',
            'https://www.curseforge.com/minecraft/mc-mods/gemsplusplus/download/3462347/file',
            'https://www.curseforge.com/minecraft/mc-mods/mana-and-artifice/download/3391266/file',
            'https://www.curseforge.com/minecraft/mc-mods/geckolib/download/3448099/file',
            'https://www.curseforge.com/minecraft/mc-mods/curios/download/3456953/file',
            'https://www.curseforge.com/minecraft/mc-mods/geolosys/download/3342071/file',
            'https://www.curseforge.com/minecraft/mc-mods/patchouli/download/3459118/file',
            'https://craft.mystia.org/InstantLava/InstantLava_Forge1.16.1-latest.jar',
            'https://www.curseforge.com/minecraft/mc-mods/forgiving-void/download/3330716/file',
            'https://www.curseforge.com/minecraft/mc-mods/serene-seasons/download/3429973/file',
            'https://www.curseforge.com/minecraft/mc-mods/fast-leaf-decay/download/3052146/file',
            'https://www.curseforge.com/minecraft/mc-mods/special-ai/download/3391946/file',
            'https://www.curseforge.com/minecraft/mc-mods/kleeslabs/download/3222119/file',
            'https://www.curseforge.com/minecraft/mc-mods/ikkatsuhakai-axe/download/3119344/file',
            'https://www.curseforge.com/minecraft/mc-mods/gravestone-mod/download/3289916/file',
            'https://www.curseforge.com/minecraft/mc-mods/netherportalfix/download/3098229/file',
            'https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge/download/3469837/file',
            'https://www.curseforge.com/minecraft/mc-mods/architectury-forge/download/3462013/file',
            'https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/download/3460043/file',
            'https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/download/3476854/file',
            'https://www.curseforge.com/minecraft/mc-mods/item-filters-forge/download/3376819/file',
            'https://www.curseforge.com/minecraft/mc-mods/wall-jump/download/3193207/file',
            'https://www.curseforge.com/minecraft/mc-mods/everlastingabilities/download/3420213/file',
            'https://www.curseforge.com/minecraft/mc-mods/cyclops-core/download/3474910/file',
            'https://www.curseforge.com/minecraft/mc-mods/antique-atlas/download/3398190/file',
            'https://www.curseforge.com/minecraft/mc-mods/spice-of-life-carrot-edition/download/3420107/file',
            'https://www.curseforge.com/minecraft/mc-mods/morpheus/download/3215383/file',
            'https://www.curseforge.com/minecraft/mc-mods/rpg-hud/download/3172784/file',
            'https://www.curseforge.com/minecraft/mc-mods/inventory-spam/download/3242399/file',
            'https://www.curseforge.com/minecraft/mc-mods/better-diving/download/3425106/file',
            'https://www.curseforge.com/minecraft/mc-mods/appleskin/download/3395800/file',
            'https://www.curseforge.com/minecraft/mc-mods/better-foliage/download/3409419/file',
            'https://www.curseforge.com/minecraft/mc-mods/dynamic-surroundings/download/3288746/file',
            'https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/download/3311352/file',
            'https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge/download/3452303/file'
        ],
        [
            'https://www.curseforge.com/minecraft/mc-mods/storagebox-mod/download/3119354/file',
            'https://www.curseforge.com/minecraft/mc-mods/clickmanaita/download/3205045/file'
        ]
    ]
};

// function download(id) {
//     if(confirmDialog === undefined) {
//         let confirmDialog;
//     }
//     switch(id) {
//         case 'AdvRi280':
//             confirmDialog = window.confirm(`36個のファイルをダウンロードしますか？
// ポップアップの許可をしてください。`);
//             if(confirmDialog === false) {break;}
//             window.open('https://www.curseforge.com/minecraft/mc-mods/iron-chests/download/3405717/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/jei/download/3480853/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/gemsplusplus/download/3462347/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/mana-and-artifice/download/3391266/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/geckolib/download/3448099/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/curios/download/3456953/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/geolosys/download/3342071/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/patchouli/download/3459118/file');
//             window.open('https://craft.mystia.org/InstantLava/InstantLava_Forge1.16.1-latest.jar');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/forgiving-void/download/3330716/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/serene-seasons/download/3429973/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/fast-leaf-decay/download/3052146/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/special-ai/download/3391946/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/kleeslabs/download/3222119/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/ikkatsuhakai-axe/download/3119344/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/gravestone-mod/download/3289916/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/netherportalfix/download/3098229/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge/download/3469837/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/architectury-forge/download/3462013/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/download/3460043/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/download/3476854/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/item-filters-forge/download/3376819/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/wall-jump/download/3193207/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/everlastingabilities/download/3420213/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/cyclops-core/download/3474910/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/antique-atlas/download/3398190/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/spice-of-life-carrot-edition/download/3420107/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/morpheus/download/3215383/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/rpg-hud/download/3172784/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/inventory-spam/download/3242399/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/better-diving/download/3425106/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/appleskin/download/3395800/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/better-foliage/download/3409419/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/dynamic-surroundings/download/3288746/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/download/3311352/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge/download/3452303/file');
//             break;
//         case 'AdvRi592':
//             confirmDialog = window.confirm(`2個のファイルをダウンロードしますか？
// ポップアップの許可をしてください。`);
//             if(confirmDialog === false) {break;}
//             window.open('https://www.curseforge.com/minecraft/mc-mods/storagebox-mod/download/3119354/file');
//             window.open('https://www.curseforge.com/minecraft/mc-mods/clickmanaita/download/3205045/file');
//             break;
//         default:
//             alert("無効なIDです。");
//             break;
//     }
// }

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

function dlidchanged(id) {
    if(id.length === 16) {
        document.querySelector('#downloadID').value = `${id.slice(0,4)}-${id.slice(4,8)}-${id.slice(8,12)}-${id.slice(12,16)}`;
    }
}

document.onload = function() {
    if(location.search !== '') {
        dataloc = location.search.indexOf('d=');
        data = location.search.slice(dataloc+2);
        document.querySelector('#downloadID').value = data;
    }
}