
function day_change(no) {
	if(no==1){
		let form_year = document.getElementById('from_year');
		let form_month = document.getElementById('from_month');
		let form_day = document.getElementById('from_day');
	}else if(no==2){
		let form_year = document.getElementById('to_year');
		let form_month = document.getElementById('to_month');
		let form_day = document.getElementById('to_day');
	}else if(no==3){
		let form_year = document.getElementById('comp_year');
		let form_month = document.getElementById('comp_month');
		let form_day = document.getElementById('comp_day');
	}else if(no==4){
		let form_year = document.getElementById('from_year_search');
		let form_month = document.getElementById('from_month_search');
		let form_day = document.getElementById('from_day_search');
	}else if(no==5){
		let form_year = document.getElementById('to_year_search');
		let form_month = document.getElementById('to_month_search');
		let form_day = document.getElementById('to_day_search');
	}

	if (((form_year.value % 4 == 0) && (form_year.value % 100 != 0)) || (form_year.value % 400 == 0)){
		months[1] = 29;
	}//alert(form_day.value);
	if(months[form_month.value-1] < form_day.length-1){
		for(i=form_day.length-1 ; months[form_month.value-1]<i ; i--){
			form_day.length--;
	    }
	} else if((months[form_month.value-1] > form_day.length-1)){
		for(i=form_day.length-1 ; i<months[form_month.value-1] ; i++){
		   	form_day.length++;
			form_day.options[i+1].value = i+1;
		   	form_day.options[i+1].text  = i+1;
		}
	}
}

function time_change(no) {
	if(no==1){
		let form_hour = document.getElementById('from_hour');
		let form_minute = document.getElementById('from_minute');
		let form_second = document.getElementById('from_second');
	}else if(no==2){
		let form_hour = document.getElementById('to_hour');
		let form_minute = document.getElementById('to_minute');
		let form_second = document.getElementById('to_second');
	}else if(no==3){
		let form_hour = document.getElementById('cd_hour');
		let form_minute = document.getElementById('cd_minute');
		let form_second = document.getElementById('cd_second');
	}else{
		return;
	}
	let now = new Date();

	//let year = now.getYear(); // �N
	//let month = now.getMonth() + 1; // ��
	//let day = now.getDate(); // ��
	//let week = weeks[ now.getDay() ]; // �j��
	let hour = now.getHours(); // ��
	let min = now.getMinutes(); // ��
	let sec = now.getSeconds(); // �b

	form_hour.options[hour].selected = true;
	form_minute.options[min].selected = true;
	form_second.options[sec].selected = true;
}

function datetime_change(no) {
	if(no==1){
		let form_year = document.getElementById('from_year');
		let form_month = document.getElementById('from_month');
		let form_day = document.getElementById('from_day');
		let form_hour = document.getElementById('from_hour');
		let form_minute = document.getElementById('from_minute');
		let form_second = document.getElementById('from_second');
	}else if(no==2){
		let form_year = document.getElementById('to_year');
		let form_month = document.getElementById('to_month');
		let form_day = document.getElementById('to_day');
		let form_hour = document.getElementById('to_hour');
		let form_minute = document.getElementById('to_minute');
		let form_second = document.getElementById('to_second');
	}else{
		return;
	}
	let now = new Date();

	let year = now.getYear(); // �N
	let month = now.getMonth() + 1; // ��
	let day = now.getDate(); // ��
	//let week = weeks[ now.getDay() ]; // �j��
	let hour = now.getHours(); // ��
	let min = now.getMinutes(); // ��
	let sec = now.getSeconds(); // �b

	form_year.options[year-1].selected = true;
	form_month.options[month].selected = true;
	form_day.options[day].selected = true;
	form_hour.options[hour].selected = true;
	form_minute.options[min].selected = true;
	form_second.options[sec].selected = true;
}

function copy_textarea(id1,id2) {
	let area1 = document.getElementById(id1);
	let area2 = document.getElementById(id2);
	area1.value = area2.value;
}