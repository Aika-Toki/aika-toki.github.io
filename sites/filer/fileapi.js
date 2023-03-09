// File system APIを利用したファイル処理
window.fsapi = {};
window.fsapi.error = function(e){ console.log(e); }
// ファイル内容を読み出す
window.fsapi.readText = function(filename, successFunc){
  window.webkitRequestFileSystem(
    TEMPORARY,  // 一時的（テンポラリ）
    0,    // 確保するサイズ
    function(fs){ // 成功時のコールバック関数
      // ファイル処理
      fs.root.getFile(filename, {},
        function(fileEntry){
          fileEntry.file(function(file){
            // ファイル読み出し。FileReaderを使用
            var reader = new FileReader();
            // 読み込み完了時の処理（文字をテキストエリアに出力）
            reader.onload = successFunc;
            reader.readAsText(file);
          });
        },
        window.fsapi.error
      );
    },
    window.fsapi.error
  );
}
// ファイル削除
window.fsapi.removeFile = function(filename, successFunc){
  window.webkitRequestFileSystem(
    TEMPORARY,  // 一時的（テンポラリ）
    0,    // サイズ
    function(fs){ // 成功時のコールバック関数
      // ファイルを削除
      fs.root.getFile(filename, {},
        function(fileEntry){
          fileEntry.remove(successFunc, window.fsapi.error);
        },
        window.fsapi.error
      );
    },
    window.fsapi.error
  );
}
// ディレクトリ一覧
window.fsapi.getFiles = function(dirname, successFunc){
  window.webkitRequestFileSystem(
    TEMPORARY,  // 一時的（テンポラリ）
    0,    // 確保するサイズ
    function(fs){ // 成功時のコールバック関数
      // 一覧を生成
      fs.root.getDirectory(dirname, {},
        function(dirEntry){
          var dirReader = dirEntry.createReader();
          dirReader.readEntries(successFunc,window.fsapi.error);
        },
        window.fsapi.error
      );
    },
    window.fsapi.error
  );
}
// ディレクトリ削除
window.fsapi.removeDir = function(dirname, successFunc){
  window.webkitRequestFileSystem(
    TEMPORARY,  // 一時的（テンポラリ）
    0,    // サイズ
    function(fs){ // 成功時のコールバック関数
      // ディレクトリを削除
      fs.root.getDirectory(dirname, {},
        function(dirEntry){
          dirEntry.removeRecursively(successFunc,window.fsapi.error);
        },
        window.fsapi.error
      );
    },
    window.fsapi.error
  );
}