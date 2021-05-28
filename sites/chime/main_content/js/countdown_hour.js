
	var move_flg = 0;
	//var start_time;
	var end_time;
	var timerInterval;
	var timeup_flg = 0;
	var chime = new Audio('./snd/Chime11.mp3');
	chime.load();
	var num = 0;

	var mnms = { 1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'};

	function countdown_hour(){
		var start_stop = document.getElementById('start_stop');
		var cd_hour = document.getElementById('cd_hour');
		var cd_minute = document.getElementById('cd_minute');
		var cd_second = document.getElementById('cd_second');
		var cd_result = document.getElementById('cd_result');
		var cd_result_text = document.getElementById('cd_result_text');
		var cd_result_stop = document.getElementById('cd_result_stop');
		if(move_flg == 0){
			var cd_hour_time; var cd_minute_time; var cd_second_time;
			if(!cd_hour.selectedIndex){ cd_hour_time = 0; }else{ cd_hour_time = parseInt(cd_hour.selectedIndex,10); }
			if(!cd_minute.selectedIndex){ cd_minute_time = 0; }else{ cd_minute_time = parseInt(cd_minute.selectedIndex,10); }
			if(!cd_second.selectedIndex){ cd_second_time = 0; }else{ cd_second_time = parseInt(cd_second.selectedIndex,10); }
			
			end_time = new Date();
			end_time.setHours( cd_hour_time );
			end_time.setMinutes( cd_minute_time );
			end_time.setSeconds( cd_second_time );
			var now = new Date();
			if(Math.floor((end_time.getTime() - now.getTime())/1000)!=0){
				if(timeup_flg == 1){
					timeup_clear();
				}
				if( end_time.getTime()  < now.getTime() ){
					end_time.setDate( end_time.getDate()+1 );
				}
				move_flg = 1;
				start_stop.value = "Stop";
				cd_result_stop.style.display = 'none';
				timerInterval = setInterval("cd_time_timer()",10);
				if(lang=='ja'){
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
				}else if(lang=='en'){
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
		if(timeup_flg == 1){
			var timeup = document.getElementById('timeup');
			var cd_result_time = document.getElementById('cd_result_time');
			timeup.style.display = 'none';
			cd_result_time.style.color = '';
			timeup_flg = 0;
		}
	}

	function countdown_stop(){
		num = num + 1;
		var alarm_hour = [9,9,10,10,11,11,12,13,14,14,15,15,16];
		var alarm_minute = [30,45,35,45,35,45,35,15,5,15,5,15,5];
		var cd_hour = document.getElementById('cd_hour');
		var cd_minute = document.getElementById('cd_minute');
		var cd_second = document.getElementById('cd_second');
		var cd_result = document.getElementById('cd_result');
		cd_result.style.display = 'none';
		cd_hour.value= alarm_hour[num];
		cd_minute.value = alarm_minute[num];
		cd_second.value = 0;
		var timeup = document.getElementById('timeup');
		var cd_result_time = document.getElementById('cd_result_time');
		move_flg = 0;
		start_stop.value = "Start";
		clearInterval(timerInterval);
		timeup_flg = 1;
		timeup.style.display = 'block';
		chime.play();
		timeup_clear();
		countdown_hour();
		document.getElementById("num").value = num;

		cd_result_time.style.color = '#000000';
	}

	function cd_clear(){
		if(move_flg == 0){
			var cd_hour = document.getElementById('cd_hour');
			var cd_minute = document.getElementById('cd_minute');
			var cd_second = document.getElementById('cd_second');
			var cd_result = document.getElementById('cd_result');
			cd_result.style.display = 'none';
			cd_hour.value= 0;
			cd_minute.value = 0;
			cd_second.value = 0;
			timeup_clear();
		}
	}

	function cd_time_timer(){
		var cd_result_time = document.getElementById('cd_result_time');
		var now = new Date();
		var T = end_time.getTime() - now.getTime();
		if(Math.floor(T/1000)<=0){
			countdown_stop();
		}
		H = Math.floor(T/(60*60*1000));
		T = T-(H*60*60*1000);
		M = Math.floor(T/(60*1000));
		if(M < 10){
			M = '0' + M;
		}
		T = T-(M*60*1000);
		S = Math.floor(T/1000);
		if(S < 10){
			S = '0' + S;
		}
		cd_result_time.innerHTML = H+":"+M+":"+S;
	}
	function num_set() {
		num = document.getElementById("num_list").value;
		var alarm_hour = [9,9,10,10,11,11,12,13,14,14,15,15,16];
		var alarm_minute = [30,45,35,45,35,45,35,15,5,15,5,15,5];
		var cd_hour = document.getElementById('cd_hour');
		var cd_minute = document.getElementById('cd_minute');
		var cd_second = document.getElementById('cd_second');
		var cd_result = document.getElementById('cd_result');
		cd_result.style.display = 'none';
		cd_hour.value= alarm_hour[num];
		cd_minute.value = alarm_minute[num];
		cd_second.value = 0;
		countdown_hour();
	}

