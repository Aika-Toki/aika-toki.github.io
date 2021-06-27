(function() {
	'use strict';

	var url = window.URL || window.webkitURL;

	if (!getCaptureParameters(window.location.href)) {
		alert(url.indexOf(window.location.href))
		alert('このページのキャプチャには対応していません。');
		return;
	}

	function getCaptureParameters(url) {
		var param = {};
		if (url.indexOf('hiroba.dqx.jp/sc/home/status/') >= 0) {
			// Skill point
			param.selector = '#jobLvExp table';
			param.fileBase = 'skillpoint';
			param.preProcess  = modifySkillPointTable;
			param.postProcess = resetTableStyle;

		} else if (url.indexOf('hiroba.dqx.jp/sc/senreki/quest') >= 0) {
			// Quest list
			param.selector = '#quest-list';
			param.fileBase = 'quest';
			param.preProcess = setTableStyle;
			param.postProcess = resetTableStyle;

		} else if (url.indexOf('hiroba.dqx.jp/sc/senreki/monster') >= 0) {
			// Monster list (Cannot render images)
			param.selector = 'table.senreki-table';
			param.fileBase = 'quest';
			param.preProcess = setTableStyle;
			param.postProcess = resetTableStyle;

		} else if (url.match(/\hiroba\.dqx\.jp\/sc\/character\/\d+\/bazaar\//)) {
			// Bazaar
			param.selector = 'table.bazaarTable';
			param.fileBase = 'bazaar';
			param.preProcess = setTableStyle;
			param.postProcess = resetTableStyle;

		} else {
			param.selector = '.cttBox';
			param.fileBase = 'capture';
			return null;
		}
		return param;
	}

	function setTableStyle(param) {
		$(param.selector).css('border-collapse', 'separate');
	}

	function resetTableStyle(param) {
		$(param.selector).css('border-collapse', 'collapse');
	}

	function modifySkillPointTable(param) {
		$(param.selector + ' td').each(function() {
			$(this).text($.trim($(this).text()));
		});
		setTableStyle(param);
	}

	function main() {
		var param = getCaptureParameters(window.location.href);

		// Does pre-process if necessary.
		if (param.preProcess) {
			param.preProcess(param);
		}

		html2canvas($(param.selector)[0], {
			onrendered: function(canvas) {
				// Creates and displays own content box.
				$('#myOverlay').remove();
				$('body').prepend('<div id="myOverlay"><div id="myBox" class="cttBox" style="width: 644px; margin: 0 auto; text-align: center"><h1 id="cttTitle">キャプチャ画像</h1><a id="download"></a><div style="height: 48px; position: relative;"><a id="fancybox-close" style="display: block; left: 253px; bottom: 0;"></a></div></div></div>');
				$('#myOverlay').css({
					width: '100%',
					height: '100%',
					position: 'fixed',
					zIndex: 100000,
					paddingTop: '64px',
					background: 'rgba(0, 0, 0, 0.75)'
				});
				$('#download').append(canvas);

				// Sets close handler.
				$('#fancybox-close, #myOverlay').on('click', function() {
					$('#myOverlay').fadeOut('fast', function(){$(this).remove();});
				});
				$('#myBox').on('click', function(event) {
					event.stopPropagation();
				});

				// Downloads the generated image.
				var d = new Date();
				var fileName = param.fileBase + '_' + d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + '.png';

				var dataUrl = canvas.toDataURL('image/png');
				var bin = atob(dataUrl.replace(/^.*,/, ''));
				var buf = new Uint8Array(bin.length);
				for (var i = 0; i < bin.length; i++) {
					buf[i] = bin.charCodeAt(i);
				}
				var blob = new Blob([buf.buffer], {type: 'image/png'});
				var blobUrl = url.createObjectURL(blob);

				if (window.navigator.msSaveBlob) {
					window.navigator.msSaveOrOpenBlob(blob, fileName);
				} else {
					$('#download').attr('download', fileName);
					$('#download').attr('href', blobUrl);
					var e = document.createEvent('MouseEvent');
					e.initEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
					$('#download')[0].dispatchEvent(e);
				}

				// Does post-process if necessary.
				if (param.postProcess) {
					param.postProcess(param);
				}
			},
			background: '#888',
			letterRendering: true,
			logging: true
		});
	}

	// Loads html2canvas.js and run main() after loading the library.
	if (!window.html2canvas) {
		var scr = document.createElement('script');
		scr.type = 'text/javascript';
		scr.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js';
		scr.onload = main;
		document.body.appendChild(scr);
	} else {
		main();
	}
})();
