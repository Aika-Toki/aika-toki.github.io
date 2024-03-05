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
