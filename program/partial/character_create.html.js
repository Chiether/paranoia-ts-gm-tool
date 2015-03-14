document.write((function(){/*
<h1 class="page-header">キャラクターシートの登録</h1>
<article name="regist_characters">
  <p>キャラクターデータの入ったディレクトリを選択するか。枠線内にドロップしてください。</p>
  <p>現在取り込まれている市民を破棄して、新しく登録しますのでご注意ください。</p>
  <a href="./characters.zip">試験用データをダウンロード</a>
  <input class="dotted_area" type="file" webkitdirectory directory style="width: 100%; height: 100%; opacity:100" onchange="angular.element(this).scope().character.regist(angular.element(this).scope(), this.files); this.value=null;">
</article>
*/}).toString().replace(/(\n)/g, '').split('*')[1]);
