
	let move_flg = 0;
	//let start_time;
	let end_time;
	let timerInterval;
	let timeup_flg = 0;
	let chime = new Audio('./sound/shigh.mp3');
	chime.load();
	let num = 0;
	let alarm_hour = [9,9,10,10,11,11,12,13,14,14,15,15,16];
	let alarm_minute = [30,45,35,45,35,45,35,15,5,15,5,15,5];

	let mnms = { 1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'};

	function countdown_hour(){
		let start_stop = document.getElementById('start_stop');
		let cd_hour = document.getElementById('cd_hour');
		let cd_minute = document.getElementById('cd_minute');
		let cd_second = document.getElementById('cd_second');
		let cd_result = document.getElementById('cd_result');
		let cd_result_text = document.getElementById('cd_result_text');
		let cd_result_stop = document.getElementById('cd_result_stop');
		if(move_flg === 0){
			let cd_hour_time; let cd_minute_time; let cd_second_time;
			if(!cd_hour.selectedIndex){ cd_hour_time = 0; }else{ cd_hour_time = parseInt(cd_hour.selectedIndex,10); }
			if(!cd_minute.selectedIndex){ cd_minute_time = 0; }else{ cd_minute_time = parseInt(cd_minute.selectedIndex,10); }
			if(!cd_second.selectedIndex){ cd_second_time = 0; }else{ cd_second_time = parseInt(cd_second.selectedIndex,10); }
			
			end_time = new Date();
			end_time.setHours( cd_hour_time );
			end_time.setMinutes( cd_minute_time );
			end_time.setSeconds( cd_second_time );
			let now = new Date();
			if(Math.floor((end_time.getTime() - now.getTime())/1000)!==0){
				if(timeup_flg === 1){
					timeup_clear();
				}
				if( end_time.getTime()  < now.getTime() ){
					end_time.setDate( end_time.getDate()+1 );
				}
				move_flg = 1;
				start_stop.value = "Stop";
				cd_result_stop.style.display = 'none';
				timerInterval = setInterval("cd_time_timer()",10);
				if(lang==='ja'){
					cd_result_text.innerHTML = (end_time.getMonth()+1) + '月' + end_time.getDate() + '日 ' + cd_hour_time + '時';
					if(cd_minute_time < 10){
						cd_result_text.innerHTML += '0' + cd_minute_time;
					}else{
						cd_result_text.innerHTML += cd_minute_time;
					}
					cd_result_text.innerHTML += '分';
					if(cd_second_time < 10){
						cd_result_text.innerHTML += '0' + cd_second_time;
					}else{
						cd_result_text.innerHTML += cd_second_time;
					}
					cd_result_text.innerHTML += '秒 までの残り時間';
				}else if(lang==='en'){
					cd_result_text.innerHTML = 'The time remaining until the ';
					cd_result_text.innerHTML += cd_hour_time + ':';
					if(cd_minute_time < 10){
						cd_result_text.innerHTML += '0' + cd_minute_time;
					}else{
						cd_result_text.innerHTML += cd_minute_time;
					}
					cd_result_text.innerHTML += ':';
					if(cd_second_time < 10){
						cd_result_text.innerHTML += '0' + cd_second_time;
					}else{
						cd_result_text.innerHTML += cd_second_time;
					}
					cd_result_text.innerHTML += ' ';
					cd_result_text.innerHTML += (mnms[end_time.getMonth()+1]) + ' ' + end_time.getDate();
				}
				cd_result.style.display = 'block';
			}
		} else {
			move_flg = 0;
			start_stop.value = "Start";
			clearInterval(timerInterval);
			cd_result_stop.style.display = 'inline';
		}
	}

	function timeup_clear(){
		if(timeup_flg === 1){
			let timeup = document.getElementById('timeup');
			let cd_result_time = document.getElementById('cd_result_time');
			timeup.style.display = 'none';
			cd_result_time.style.color = '';
			timeup_flg = 0;
		}
	}

	function countdown_stop(){
		if (num !== 12) {
			num = Number(document.getElementById('num_list').value) + 1;
		} else {
			num = 0;
		}
		alarm_hour = [9,9,10,10,11,11,12,13,14,14,15,15,16];
		alarm_minute = [30,45,35,45,35,45,35,15,5,15,5,15,5];
		cd_hour = document.getElementById('cd_hour');
		cd_minute = document.getElementById('cd_minute');
		cd_second = document.getElementById('cd_second');
		cd_result = document.getElementById('cd_result');
		cd_result.style.display = 'none';
		cd_hour.value= alarm_hour[num];
		cd_minute.value = alarm_minute[num];
		cd_second.value = 0;
		let timeup = document.getElementById('timeup');
		let cd_result_time = document.getElementById('cd_result_time');
		move_flg = 0;
		document.getElementById('start_stop').value = "Start";
		clearInterval(timerInterval);
		timeup_flg = 1;
		timeup.style.display = 'block';
		stop(chime);
		chime.play();
		timeup_clear();
		countdown_hour();
		document.getElementById('num_list').value = num;
		cd_result_time.style.color = '#000000';
	}

	function stop(name) {
		name.pause();
		name.currentTime = 0;
	}

	function cd_clear(){
		if(move_flg === 0){
			let cd_hour = document.getElementById('cd_hour');
			let cd_minute = document.getElementById('cd_minute');
			let cd_second = document.getElementById('cd_second');
			let cd_result = document.getElementById('cd_result');
			cd_result.style.display = 'none';
			cd_hour.value= 0;
			cd_minute.value = 0;
			cd_second.value = 0;
			timeup_clear();
		}
	}

	function cd_time_timer(){
		let cd_result_time = document.getElementById('cd_result_time');
		let now = new Date();
		let T = end_time.getTime() - now.getTime();
		if(Math.floor(T/1000)<=0){
			countdown_stop();
		}
		let H = Math.floor(T/(60*60*1000));
		T = T-(H*60*60*1000);
		let M = Math.floor(T/(60*1000));
		if(M < 10){
			M = '0' + M;
		}
		T = T-(M*60*1000);
		let S = Math.floor(T/1000);
		if(S < 10){
			S = '0' + S;
		}
		cd_result_time.innerHTML = H+":"+M+":"+S;
	}
	function num_set() {
		num = Number(document.getElementById('num_list').value);
		alarm_hour = [9,9,10,10,11,11,12,13,14,14,15,15,16];
		alarm_minute = [30,45,35,45,35,45,35,15,5,15,5,15,5];
		let cd_hour = document.getElementById('cd_hour');
		let cd_minute = document.getElementById('cd_minute');
		let cd_second = document.getElementById('cd_second');
		let cd_result = document.getElementById('cd_result');
		cd_result.style.display = 'none';
		cd_hour.value= alarm_hour[num];
		cd_minute.value = alarm_minute[num];
		cd_second.value = 0;
		countdown_hour();
		if (document.getElementById('start_stop').value === "Start") {
			countdown_hour();
		}
		timeup_flg = 1;
		timeup_clear();
	}
	function compacter() {
		if (document.getElementById('compact').value === "詳細表示") {
			document.getElementById('explain').style.display = 'block';
			document.getElementById('set_time').style.display = 'block';
			document.getElementById('control_button').style.display = 'block';
			document.getElementById('cd_result_time').style.fontSize = '16px';
			document.getElementById('cd_result_time').style.fontWeight = 'lighter';
			document.getElementById('compact').value = "通常表示";
		} else {
			document.getElementById('explain').style.display = 'none';
			document.getElementById('set_time').style.display = 'none';
			document.getElementById('control_button').style.display = 'none';
			document.getElementById('cd_result_time').style.fontSize = '130px';
			document.getElementById('cd_result_time').style.fontWeight = 'Bold';

			document.getElementById('compact').value = "詳細表示";
		}
	}
	function chime_change() {
		stop(chime);
		const chimeList = document.getElementById('chime_list').value;
		if(chimeList === "0") {
			chime = new Audio('./sound/shigh.mp3');
			chime.load();
		}else if(chimeList === "1") {
			chime = new Audio('./sound/nhigh.mp3');
			chime.load();
		}else if(chimeList === "2") {
			chime = new Audio('./sound/Chime11.mp3');
			chime.load();
		} 
	}

	function sound_test() {
		stop(chime);
		chime.play();
	}