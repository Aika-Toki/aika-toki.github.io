document.querySelector('#html2canvas').onload = function () {
    html2canvas(document.querySelector('.mainBlock'), {
        onrendered: function (canvas) {
            var imgData = canvas.toDataURL();
            document.getElementById('resultMain').src = imgData;
        }
    });
    html2canvas(document.querySelector('.reportBlock'), {
        onrendered: function (canvas) {
            var imgData = canvas.toDataURL();
            document.getElementById('resultReport').src = imgData;
        }
    });
    html2canvas(document.querySelector('#results'), {
        onrendered: function (canvas) {
            var imgData = canvas.toDataURL();
            document.getElementById('imgDownload').href = imgData;
        }
    });
}