document.write((function(){/*
<h1 class="page-header">戦闘データ</h1>
<section>
<h2>攻撃者</h2>
<div class="row">
  <div class="col-xs-2 col-sm-2 col-md-2">市民名</div>
  <div class="col-xs-10 col-sm-10 col-md-10"><select ng-model="battle.offence.character" ng-options="record['基本情報']['市民名'] for record in battle.characters"></select></div>
</div>
<div class="row">
  <div class="col-xs-2 col-sm-2 col-md-2">使用武器</div>
  <div class="col-xs-10 col-sm-10 col-md-10"><select ng-model="battle.offence.weapon" ng-options="record['ラベル'] group by record['グループ'] for record in battle.weapons"></select></div>
</div>
<div class="row">
 <div class="col-xs-2 col-sm-2 col-md-2">使用スキル</div>
 <div class="col-xs-10 col-sm-10 col-md-10"><select ng-model="battle.offence.skill" ng-options="name as name + ':' + (score || battle.offence.character['バイオレンス技能']['基本値']) for (name, score) in battle.offence.character['バイオレンス技能']"></select></div>
</div>

<h2>防御側</h3>
{{battle.offence.skill}}

</section>

<!--
 <select ng-model="weapon.selected" ng-options="record['ラベル'] group by record['グループ'] for record in weapon.records"></select>
 </section>
 <br />
 使用スキル: {{weapon.selected['武器種別']}}<br/>
 ダメージ種別: {{weapon.selected['ダメージ種別']}}&nbsp;&nbsp;{{weapon.selected['ダメージコード']}}<br/>
 射程: {{weapon.selected['射程']}}m ／ 範囲: {{weapon.selected['射程']}}m
 <div ng-show="weapon.selected['実験的']">この装備は、実験的です。</div>
 <div ng-show="weapon.selected['徹甲効果']">徹甲(AP)：アーマー値を1/2(切捨て)としてください。</div>
 <div ng-show="weapon.selected['噴射可']">噴射(スプレー)攻撃が可能です。</div>
 {{weapon.selected['特記事項']}}<br />
-->
*/}).toString().replace(/(\n)/g, '').split('*')[1]);
