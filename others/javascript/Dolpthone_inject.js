window_5209hbf298hew9jfiowg_Dolpthone_version = "0.2.223 Beta";
startup();
subscribe();
function subscribe() {
    let subsound = new Audio('https://aika-toki.github.io/others/library/NotiSound/003_1s.wav');
    subsound.play();
    let video = window.top.document.querySelector('#modal-inner-iframe').contentDocument.querySelector('#video-player');
    video.addEventListener("ended", done);
}
function done(){
    console.log("DONE!");
    setTimeout(
        ()=>{
            next();
            console.log("Next")
        },
        1000
        );
        let sub = setTimeout(
            ()=>{
                subscribe();
                reinject();
                console.log("Subscribe");
                clearTimeout(sub);
            },
            10000
            );
        }
        function next() {
            const caps = window.top.document.getElementsByClassName("u-list")[0].getElementsByTagName("li"); 
            
            let lastIndex = 0
            for (const item in caps) { 
                const cl = caps[item].classList
                if (!cl.contains("good")) {
                    if (cl.contains("movie") && !cl.contains("supplement")) {
                        break;
                    } else if (cl.contains("evaluation-test") || cl.contains("essay-test")) {
                        let notifsound = new Audio("https://aika-toki.github.io/others/library/NotiSound/002_3s.wav");
                        notifsound.play();
                        notifsound.addEventListener('ended',()=>{
                            notifsound = "";
                        });
                break;
            }
        }
        lastIndex += 1
    }
    
    caps[lastIndex].querySelector("a").click();
}
function startup(){
    let swalsc = window.top.document.createElement('script');
    swalsc.src = "//cdn.jsdelivr.net/npm/sweetalert2@11";
    window.top.document.querySelector('script#di').before(swalsc);
    let version = window_5209hbf298hew9jfiowg_Dolpthone_version;
    console.log('\u001b[33m[Dolpthone]Ver.'+version+' (re)loaded.');
    let patchsound = new Audio('https://aika-toki.github.io/others/library/NotiSound/001_2s.wav');
    if(window.top.document.querySelector('script#di').className == ""){
        patchsound.play();
        // window.top.swalalart(version);
    }
}
function swalalart(version){
    let version_sentense = `Dolpthone version ${version} has applied.`;
    Swal.fire(version_sentense);
}
function reinject(){
    let p=document.querySelector('script#di');
    if(p!=null){
        document.querySelector('script#di').remove();
    }
    let e=document.createElement('script');
    e.src="https://aika-toki.github.io/others/javascript/Dolpthone_inject.js";
    e.id="di";
    e.className="reinjected";
    window.top.document.head.appendChild(e);
}