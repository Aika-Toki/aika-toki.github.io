document.querySelector('#html2canvas').onload = function () {
    html2canvas(document.querySelector('.mainBlock')).then(canvas => {
            var imgData = canvas.toDataURL('image/png', 1);
            document.getElementById('resultMain').src = imgData;
    });
    html2canvas(document.querySelector('.reportBlock')).then(canvas => {
            var imgData = canvas.toDataURL('image/png', 1);
            document.getElementById('resultReport').src = imgData;
    });
    html2canvas(document.querySelector('#results'), {
        onrendered: function (canvas) {
            var imgData = canvas.toDataURL('image/png', 1);
            document.getElementById('imgDownload').href = imgData;
        }
    });
}