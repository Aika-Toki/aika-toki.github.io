function mdlgen(c,t){
    let r = str264(c);
    r = "https://aika-toki.github.io/sites/DiscordBotAnnouncement/?md="+r;
    console.log(r);
    r = exurlconv(r);
    dqs('#resultmdl').value = `<announce-web _ ${t} ${r}`;
}