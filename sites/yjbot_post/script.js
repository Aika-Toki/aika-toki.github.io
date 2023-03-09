
function mdlgen(c,t){
    let r = str264(c);
    r = "https://aika-toki.github.io/sites/DiscordBotAnnouncement/?md="+r;
    console.log(r);
    r = exurlconv(r);
    dqs('#resultmdl').value = `<announce-web _ ${t} ${r}`;
}
function post(time,title,text,category){
    let pmdpre = document.querySelector('#postmdpre');
    pmdpre.value = text.replaceAll('\n','<br>');
    let header = {
        layout: "post",
        title: title,
        date: `${time[0]}-${time[1]}-${time[2]} ${time[3]}:${time[4]}:00 +09:00`,
        categories: category
    }
    pmdpre.value = `---\nlayout: ${header.layout}\ntitle: ${header.title}\ndate: ${header.date}\ncategories: ${header.categories}\n---\n${pmdpre.value}`;
    pmdpre.value = pmdpre.value.replaceAll('|<br>|','|\n|');
    pmdpre.value = pmdpre.value.replaceAll('<br>|','\n|');
    pmdpre.value = pmdpre.value.replaceAll('<br>\n|','<br>\n\n|');
    pmdpre.value = pmdpre.value.replaceAll('<br>-','\n-');
    pmdpre.value = pmdpre.value.replaceAll('|<br>','|\n');
    // let sure = confirm('Are you sure to export?');
    let sure = true;
    console.log(sure);
    
    if(sure == true){
        const blob = new Blob([pmdpre.value], {type: 'text/plain'});
        const bloburl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.download = `${time[0]}-${time[1]}-${time[2]}-${time[5]}.md`;
        a.href = bloburl;
        a.click();
        a.remove();
        URL.revokeObjectURL(bloburl);
        // const octokit = new Octokit()
        // octokit.repos.createOrUpdateFile({
        //     owner: 'yautaenon',
        //     repo: 'yautaenon.github.io',
        //     path: `_posts/${time[0]}-${time[1]}-${time[2]}-${title}.md`,
        //     message: 'commit from yjbot_post',
        //     content: btoa(pmdpre.value)
        // });
    }
}