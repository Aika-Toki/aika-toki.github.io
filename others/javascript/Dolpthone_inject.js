subscribe();
function subscribe() {
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
}