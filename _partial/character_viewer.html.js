document.write((function(){/*

<style>
section[name=skills] input[type=text]{ width: 100%; height: 1.5em; border: 0; }
@media (max-width:768px){
  section[name=skills] input[type=text]{ border-bottom: 1px solid #000;}
}
@media (min-width:768px){
  section[name=skills] .skill-base{ height: 1.5em; border-bottom: 1px solid #000; }
  section[name=skills] .skill-name{ height: 1.5em; border-bottom: 1px solid #AAA; }
  section[name=skills] input[type=text]{ border-bottom: 1px solid #000;}
}
</style>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12">
    <div class="page-header">
      <h1 style="display: inline;">キャラクター<wbr>情報</h1>
      <a id="download" class="btn btn-default" ng-click="character.download('#download', character.current)" class="btn btn-default">ダウンロード</button></a>
      <button class="btn btn-warning">次のクローン</button>
      <button class="btn btn-danger">クローン抹消</button>
    </div>
</div>

<div class="row">
  <div class="col-sm-2 col-md-2">市民名</div>
  <div class="col-sm-10 col-md-10"><input type="text" style="width: 100%" ng-model="character.current['基本情報']['市民名']"/></div>
</div>

<section name="skills">
    <h2 class="sub-header">行動系技能</h2>
    <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="row">
            <div class="col-sm-9 col-md-9 skill-base">マネジメント技能</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['マネジメント技能']['基本値']" type="text"/></div>
            </div>
            <div class="row" ng-repeat="name in ['靴舐め', '鉄面皮', '詐術', '衛生管理', '尋問', '脅迫', '見定め', '雄弁術']">
            <div class="col-sm-9 col-md-9 skill-name">{{name}}</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['マネジメント技能'][name]" type="text"/></div>
             </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="row">
            <div class="col-sm-9 col-md-9 skill-base">ステルス技能</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['ステルス技能']['基本値']" type="text"/></div>
            </div>
            <div class="row" ng-repeat="name in ['隠匿', '変装', '厳戒', 'セキュリティシステム', '尾行', '手業', '隠密', '監視']">
            <div class="col-sm-9 col-md-9 skill-name">{{name}}</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['ステルス技能'][name]" type="text"/></div>
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="row">
            <div class="col-sm-9 col-md-9 skill-base">バイオレンス技能</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['バイオレンス技能']['基本値']" type="text"/></div>
            </div>
            <div class="row" ng-repeat="name in ['敏捷', '爆破', 'エネルギー兵器', 'フィールド兵器', '精密作業', '白兵戦武器', '射出兵器', '投擲武器', '格闘', '車両戦闘']">
            <div class="col-sm-9 col-md-9 skill-name">{{name}}</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['バイオレンス技能'][name]" type="text"/></div>
            </div>
        </div>
    </div>
    <h2 class="sub-header">知識系技能</h2>
        <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="row">
            <div class="col-sm-9 col-md-9 skill-base">ハードウェア技能</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['ハードウェア技能']['基本値']" type="text"/></div>
            </div>
            <div class="row" ng-repeat="name in ['ボット運用', '化学工学', '電子工学', '環境工学', '機械工学', '核工学', '重機操作', '車両運用', '装備保守']">
            <div class="col-sm-9 col-md-9 skill-name">{{name}}</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['ハードウェア技能'][name]" type="text"/></div>
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="row">
            <div class="col-sm-9 col-md-9 skill-base">ソフトウェア技能</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['ソフトウェア技能']['基本値']" type="text"/></div>
            </div>
            <div class="row" ng-repeat="name in ['ボットプログラミング', 'Ｃ－Ｂａｙ', 'データ分析', 'データ検索', '金融システム', 'ハッキング', 'マルチコーダー運用', 'オペレーティングシステム', '車両プログラミング']">
            <div class="col-sm-9 col-md-9 skill-name">{{name}}</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['ソフトウェア技能'][name]" type="text"/></div>
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="row">
            <div class="col-sm-9 col-md-9 skill-base">ウェットウェア技能</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['ウェットウェア技能']['基本値']" type="text"/></div>
            </div>
            <div class="row" ng-repeat="name in ['生命科学', '生物兵器', 'クローン技術', '医学', 'アウトドア知識', '薬物療法', '心理療法', '暗示']">
            <div class="col-sm-9 col-md-9 skill-name">{{name}}</div>
            <div class="col-sm-3 col-md-3"><input class="skill-score" ng-model="character.current['ウェットウェア技能'][name]" type="text"/></div>
            </div>
        </div>
    </div>
</section>
*/}).toString().replace(/(\n)/g, '').split('*')[1]);
