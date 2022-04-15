const window_5209hbf298hew9jfiowg_Dolpthone_version = "0.2.200";
startup();
subscribe();
function subscribe() {
    let video = document.querySelector('#modal-inner-iframe').contentDocument.querySelector('#video-player');
    video.addEventListener("ended", ()=>{
    console.log("DONE!");
    setTimeout(
        function () {
            next();
        },
        "1000"
    );
    setTimeout(
        function () {
            subscribe();
        },
        "3000"
    );
    });
}
function next() {
    const caps = document.getElementsByClassName("u-list")[0].getElementsByTagName("li"); 

    let lastIndex = 0
    for (const item in caps) { 
        const cl = caps[item].classList
        if (!cl.contains("good")) {
            if (cl.contains("movie") && !cl.contains("supplement")) {
                break;
            } else if (cl.contains("evaluation-test") || cl.contains("essay-test")) {
                break;
            }
        }
        lastIndex += 1
    }

    caps[lastIndex].querySelector("a").click();
}
function startup(){
    let version = window_5209hbf298hew9jfiowg_Dolpthone_version;
    let version_sentense = `Dolpthone version ${version} has loaded.`;
    let patchsound = new Audio('https://aika-toki.github.io/others/library/NotiSound/001_2s.wav');
    let patchtts = new SpeechSynthesisUtterance();
    patchtts.text = version_sentense;
    patchsound.play()
    setTimeout(()=>{
        window.speechSynthesis.speak(patchtts);
        setTimeout(()=>{
            version_sentense = "";
            patchsound = "";
            patchtts = "";
            version = "";
            console.log("cache cleared.");
        },
        20000);
    },1000);
}