document.write((function(){/*
<h1 class="page-header">武器データ(実装中)</h1>
<section>
このプルダウンは、実際は戦闘判定支援の画面で使います。選択すると詳細が表示されます。<br />

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
*/}).toString().replace(/(\n)/g, '').split('*')[1]);
