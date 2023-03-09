document.querySelector('#html2canvas').onload = function () {
    html2canvas(document.querySelector('.mainBlock')).then(canvas => {
        var imgData = canvas.toDataURL('image/png', 1);
        document.getElementById('resultMain').src = imgData;
    });
    html2canvas(document.querySelector('.reportBlock')).then(canvas => {
        var imgData = canvas.toDataURL('image/png', 1);
        document.getElementById('resultReport').src = imgData;
    });
    html2canvas(document.querySelector('#amaimg')).then(canvas => {
        var imgData = canvas.toDataURL('image/png', 1);
        document.getElementById('merchandiseImg').src = imgData;
    });
    let wait0 = setInterval(function(){
        setHref();
        clearInterval(wait0);
    },10000);
}
function setHref() {
    html2canvas(document.querySelector('#results')).then(canvas => {
        var imgData = canvas.toDataURL('image/png', 1);
        document.getElementById('imgDownload').href = imgData;
    });
}