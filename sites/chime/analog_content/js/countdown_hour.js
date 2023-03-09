
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
	let smooth = 1;
	let ii=0;
	let progressStatus = true;
	let fontsize = '10px';

	let mnms = { 1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'};

	let dat_hour, dat_min, dat_sec, dat_milli;

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
		let c_hour = document.getElementById('c_hour');
		let c_minute = document.getElementById('c_minute');
		let c_second = document.getElementById('c_second');
		let c_milli = document.getElementById('c_milli');
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
		c_milli.style.transform = "rotateZ(" + 360*(now.getMilliseconds()/1000) + "deg) translate(0%,-50%)";
		if(smooth === 1) {
			c_second.style.transform = "rotateZ(" + 6*((now.getSeconds())+(now.getMilliseconds()/1000))+ "deg) scaleY(1.2) translate(0%,-40%)";
		} else if(smooth === 0){
			c_second.style.transform = "rotateZ(" + 6*((now.getSeconds()))+ "deg) scaleY(1.2) translate(0%,-40%)";
		}
		c_second.innerHTML = `<p class="needle_num_sec" style="font-size:${fontsize}">${now.getSeconds()}</p>`;
		if(smooth === 1) {
			c_second.querySelector('p').style.transform = `scale(1,0.83) translate(-50%,-50%) rotateZ(-${6*((now.getSeconds())+(now.getMilliseconds()/1000))}deg)`;
		} else if(smooth === 0){
			c_second.querySelector('p').style.transform = `scale(1,0.83) translate(-50%,-50%) rotateZ(-${6*((now.getSeconds()))}deg)`;
		}
		
		c_minute.style.transform = "rotateZ(" + 6*((now.getMinutes())+((now.getSeconds()/60)+(now.getMilliseconds()/60000))) + "deg) translate(0%,-40%) scaleX(2) scaleY(1.4)";
		c_minute.innerHTML = `<p class="needle_num_min" style="font-size:${fontsize}">${now.getMinutes()}</p>`;
		c_minute.querySelector('p').style.transform = `scale(0.5,0.714276) translate(-50%,-50%) rotateZ(-${6*((now.getMinutes())+((now.getSeconds()/60)+(now.getMilliseconds()/60000)))}deg)`;
		c_hour.style.transform = "rotateZ(" + 30*((now.getHours())+((now.getMinutes()/60)+(now.getSeconds()/3600)+(now.getMilliseconds()/3600000))) + "deg) translate(0%,-20%) scaleY(0.8) scaleX(2)";
		c_hour.innerHTML = `<p class="needle_num_hour" style="font-size:${fontsize}">${now.getHours()}</p>`;
		c_hour.querySelector('p').style.transform = `scale(0.5,1.25) translate(-50%,-50%) rotateZ(-${30*((now.getHours())+((now.getMinutes()/60)+(now.getSeconds()/3600)+(now.getMilliseconds()/3600000)))}deg)`;
		p_milli.value = now.getMilliseconds()/1000;
		p_second.value = now.getSeconds()/60;
		p_minute.value = now.getMinutes()/60;
		p_hour.value = now.getHours()/24;
		if (now.getHours() < 6 || now.getHours() > 17) {
			analog_base.style.backgroundImage = 'url("./img/base01.jpg")';
			base_ring.style.backgroundImage = 'url("./img/ring.png")';
			document.body.className = "dark";
		} else {
			analog_base.style.backgroundImage = 'url("./img/base02.jpg")';
			base_ring.style.backgroundImage = 'url("./img/ring02.png")';
			document.body.className = "light";
		}
		p_remain.value = now.getMilliseconds()+(now.getSeconds()*1000)+(now.getMinutes()*60000)+(now.getHours()*3600000);
		/*console.log(cd_result_time.innerHTML);*/
		dat_hour = ('0'+now.getHours()).slice(-2), dat_min = ('0'+now.getMinutes()).slice(-2), dat_sec = ('0'+now.getSeconds()).slice(-2), dat_milli = ('00'+now.getMilliseconds()).slice(-3);
		document.getElementById('nowTime').innerText = `${dat_hour}:${dat_min}:${dat_sec}.${dat_milli}`;

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
			document.getElementById('head_search_date').className = 'detail';
			document.getElementById('cd_result_time').style.fontSize = '16px';
			document.getElementById('cd_result_time').style.fontWeight = 'lighter';
			document.getElementById('compact').value = "通常表示";
		} else {
			document.getElementById('head_search_date').className = 'compact';
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

	function cbpb() {
		let swpb = document.querySelector('#sw_progressbar');
		let pb = document.querySelector('#cd_result_progress');
		if(progressStatus === true) {
			swpb.classList.remove('disable');
			swpb.classList.add('enable');
			pb.style.opacity = '1';
		} else {
			swpb.classList.remove('enable');
			swpb.classList.add('disable');
			pb.style.opacity = '0';
		}
	}

	function smoothButton() {
		let swpb = document.querySelector('#sw_smooth');
		if(smooth === 1) {
			swpb.classList.remove('disable');
			swpb.classList.add('enable');
		} else {
			swpb.classList.remove('enable');
			swpb.classList.add('disable');
		}
	}

	function changeNeedleFontSize() {
		let e = document.querySelector('#rg_fontsize').value;
		document.getElementsByClassName('needle_num_hour')[0].style.fontSize = e+"px";
		document.getElementsByClassName('needle_num_min')[0].style.fontSize = e+"px";
		document.getElementsByClassName('needle_num_sec')[0].style.fontSize = e+"px";
		fontsize=e+'px';
	}