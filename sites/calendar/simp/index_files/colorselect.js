function ColorSelect01(form, color01) {
	for (i = 0; i < color01.options.length; i++) {
		if (color01.options[i].selected == true) {
			form.bgcolor01.value = color01.options[i].value;
			// color01upd();
		}
	}
}
// function color01upd(){
// 	document.calForm.bgcolor01.style.backgroundColor = document.calForm.bgcolor01.value;
// 	d.calForm.bgcolor01.style.color = getInvertedColor(d.calForm.bgcolor01.value);
// }
// function color02upd(){
// 	document.calForm.bgcolor02.style.backgroundColor = document.calForm.bgcolor02.value;
// 	d.calForm.bgcolor02.style.color = getInvertedColor(d.calForm.bgcolor02.value);
// }
// function color03upd(){
// 	document.calForm.bgcolor03.style.backgroundColor = document.calForm.bgcolor03.value;
// 	d.calForm.bgcolor03.style.color = getInvertedColor(d.calForm.bgcolor03.value);
// }
function getInvertedColor(colorCode) {
	colorCode = colorcodeConvert(colorCode);
	const red = parseInt(colorCode.substr(1,2), 16);
	const green = parseInt(colorCode.substr(3,2), 16);
	const blue = parseInt(colorCode.substr(5,2), 16);
	const luminance = ( red*299 + green*587 + blue*114 ) / 2550;
	if (luminance > 60) {
		return "#000000";
	} else {
		return "#ffffff";
	}
}

function colorcodeConvert(cc){
	cc = String(cc);
	let includes = String(cc.includes("#")), leng = cc.length;
	switch(includes){
		case 'true':
			cc = cc.slice(1);
			leng--;
		case 'false':
			switch(leng){
				case 3:
					cc = [
						cc.substr(0,1),
						cc.substr(0,1),
						cc.substr(1,1),
						cc.substr(1,1),
						cc.substr(2,1),
						cc.substr(2,1)
					].join("");
					break;
				case 4:
					cc = [
						cc.substr(0,1),
						cc.substr(0,1),
						cc.substr(1,1),
						cc.substr(1,1),
						cc.substr(2,1),
						cc.substr(2,1),
						cc.substr(3,1),
						cc.substr(3,1)
					].join("");
					break;
				case 6:
				case 8:
					cc = cc;
					break;
				default:
					cc = "ffffff";
					break;
			}
			cc = "#"+cc;
			break;
	}
	return cc;
}



function ColorSelect02(form, color02) {
	for (i = 0; i < color02.options.length; i++) {
		if (color02.options[i].selected == true) {
			form.bgcolor02.value = color02.options[i].value;
			// color02upd();
		}
	}
}



function ColorSelect03(form, color03) {
	for (i = 0; i < color03.options.length; i++) {
		if (color03.options[i].selected == true) {
			form.bgcolor03.value = color03.options[i].value;
			// color03upd();
		}
	}
} 

function ColorSelect04(form, color04) {
	for (i = 0; i < color04.options.length; i++) {
		if (color04.options[i].selected == true) {
			form.bgcolor04.value = color04.options[i].value;
			// color03upd();
		}
	}
} 


function WidthSelect(form, width01) {
	for (i = 0; i < width01.options.length; i++) {
		if (width01.options[i].selected == true) {
			form.wdh01.value = width01.options[i].value;
		}
	}
} 
