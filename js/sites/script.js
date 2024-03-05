const links = [
	["Antimatter Dimention Save Editor", "", "/sites/ad/"],
	["Animation Creator", "", "/sites/animate/kyuukurarin/"],
	["【Audioplayer】", "Audio player.", "/sites/audioplayer/"],
	["Calendar Creator", "", "/sites/calendar/simp/"],
	["HTML Canvas Tester", "", "/sites/canvastest/"],
	["Chime", "Program to play chimes on time", "/sites/chime"],
	[
		"Command Describer",
		"Explains the introduction of Minecraft commands.",
		"/sites/redirect/#eyJ2IjoiMC4wLjEiLCJlIjoiZGZYWDFlaFNYVVlsV1VVMmlBMUYxU1AxdkV2dDRRU2JMTTVsMVBIbndjZFNNUmdwa3BSbUI0S2VWWi92RGExc0ROenhGTVJCZFdMZXZ1SkpCSEo1bFd0WkZ3PT0iLCJpIjoiZ2dsRGdzaHpRcFRPcTNWUSJ9",
	],
	["Simple Counter", "", "/sites/counter/"],
	["Discord Bot Announcement", "", "/sites/DiscordBotAnnouncement"],
	["Minecraft Inventory Simulator", "A site that recreates the inventory of Minecraft.", "/sites/minecraft_Inventory_sim/"],
	["Minecraft Mods Downloader", "A site where you can download Minecraft mods in bulk.", "/sites/mod_downloader/"],
	["文字化け", "", "/sites/mojibake/index.html"],
	["Password Generator", "", "/sites/passwordgen/"],
	[
		"PDFファイルテスト",
		"Test of uploading a PDF file.",
		"/sites/redirect/#eyJ2IjoiMC4wLjEiLCJlIjoibDdXVTljRUV4bGNwUDF0NW9oV3lHNjRNb0FDMzlvZWlIbWdET2NPVS8zdHFvN2MxSzUvRFphTDJWUVQzekJxUFlNUWhYNEV3cTY2Wmo3bllXUT09IiwiaSI6IjFxcG9pVTVtSlBjNWpSZUYifQ==",
	],
	["PJSEditor", "PJS can be easily edited on this website.", "/sites/pjsEditor/"],
	["リダイレクト", "Redirect generation.", "/sites/redirect"],
	["Roulette Calcurator", "", "/sites/roulette_calc/"],
	["Sakura Capture", "", "/sites/sakura_capture/"],
	["Valorant Team Generator", "", "/sites/teamsplit/"],
	["車内ディスプレイ再現", "A site that reproduces LCDs inside a train car.", "/sites/traindisplay/"],
	["電車遅延情報", "A website that allows you to check train delays nationwide.", "/sites/train_info/"],
	["Weather Forecast", "", "/sites/weather/"],
	["MT4 Data Converter", "", "/sites/weeklydataconv/"],
	["Article To Markdown", "", "/sites/yjbot_post/"],
	["Youtube Shorts To Normal Viewer", "", "/sites/yt-shorts-normal-conv/"],
	["Kanayama Station Display", "", "/sites/stationdisplay/"],
	["Seeded Randomizer", "", "/sites/coder/"],
	["Demo Trader", "", "/sites/demotrade/"],
];
function setup() {
	function chunkArray(arr, chunkSize) {
		const chunks = [];
		for (let i = 0; i < arr.length; i += chunkSize) {
			const chunk = arr.slice(i, i + chunkSize);
			chunks.push(chunk);
		}
		return chunks;
	}
	let items = links.sort((a, b) => a[0].localeCompare(b[0]));
	items = chunkArray(items, 4);
	items
		.map((e) => {
			e = e
				.map((a) => {
					let div = document.createElement("a");
					div.href = a[2];
					div.innerHTML = `
					<div class="anim-${Math.ceil(Math.random() * 5)}">
<div class="card" style="background-image: url(https://s.wordpress.com/mshots/v1/${location.host + a[2]}?w=960&h=960)">
<div class="text surface-3">
<p class="title">
${a[0]}
</p>
<p class="description">${a[1] == "" ? "No info." : a[1]}</p>
</div>
</div>
</div>
        `;
					return div.outerHTML;
				})
				.join("");
			const tmpElement = document.createElement("div");
			tmpElement.innerHTML = '<div class="grid">' + e + "</div>";
			return tmpElement.childNodes;
		})
		.forEach((e) => {
			console.log(e);
			document.querySelector("#linklist").append(e[0]);
		});
}
let si = setInterval(() => {
	if (document.querySelector("#linklist")) {
		setup();
		clearInterval(si);
	}
}, 10);
