let lists = document.querySelectorAll('li');
for(let i=0;i<lists.length;i++){
    // 全liそれぞれに対する「クリックされたとき」の処理
    lists[i].addEventListener('click',function(){
        // クリックされたliの子要素 aタグのリンク先を取得
        let href = this.querySelector('a').getAttribute('href');
        // 現在のタブで開く
        location.href = href;
        // 新しいタブで開く
        // window.open(href);
    });}