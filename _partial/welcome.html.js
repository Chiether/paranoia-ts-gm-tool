document.write((function(){/*
<style>
article#welcome p { padding-left: 1.5em; margin-bottom: 0.2em;text-indent:1em; }
article#welcome [data-toggle="tooltip"] { border-bottom: dashed 1px #ff0000;; }
</style>
<script>$(function () { $('article#welcome [data-toggle="tooltip"]').tooltip(); })</script>
<article id="welcome">
<h1 class="page-header">ようこそ。ハイプログラマー。</h1>
<section>
    <h2>はじめに</h2>
    <p>
        このプログラムは、パラノイア25周年記念版
        <span data-toggle="tooltip" data-placement="top" title="和訳は、日本語版です">トラブルシューターズ</span>の
        <span data-toggle="tooltip" data-placement="top" title="あなたのことです！">ゲームマスター</span>を、
        <span data-toggle="tooltip" data-placement="top" title="ご心配いりません！">支援する</span>ためのツールです。
    <p>
    <p>
        大変申し訳ないことですが。
        とても<span data-toggle="tooltip" data-placement="top" title="少なくともプレイヤーどもには理解できるはずがありません">複雑すぎる</span>ために、
        機能の不足感などがあると想いますが
        予め<span data-toggle="tooltip" data-placement="top" title="要望は歓迎しますが実装は約束しません">ご容赦ください</span>。
    </p>
</section>
<section>
    <h2>機能説明</h2>
    <h4>キャラクター管理</h3>
    <p>
        キャラクター情報は、
        <span data-toggle="tooltip" data-placement="top" title="JSON形式です。サンプルデータで確認してください">所定のフォーマット</span>で管理します。
        データのインポートは、ディレクトリ単位で行いますので。セッション単位などで一纏めにするコトを、おすすめします。
    </p>
</section>
<section>
    <h2>謝辞および連絡先</h2>
    <h4></h4>
    <h4>権利宣言</h4>
    <p>
        本プログラムの著作権は、使用しているライブラリを除いて、その一切を作者が保持します。
        ただし本プログラムは、ＧＭスクリーンの内側のデータに準ずるものとして、
        <span data-toggle="tooltip" data-placement="top" title="インディゴ市民">紫市民</span>以下が使用の事実を知った場合。
        最大120点の反逆点もしくは存在抹消とすることを、作者が許可します。
    <p>
   </p>
    <h4>連絡先</h4>
    <p>
        <span data-toggle="tooltip" data-placement="top" title="">githubのissue</span>、
        <span data-toggle="tooltip" data-placement="top" title="@chiether">Twitter</span>
        までご連絡ください。
    </p>

 <p>一部、directory および webkitdirectory機能を利用しています。対応外ブラウザは、動作しません。</p>
 <p>一部、jQuery を利用しています。対応外ブラウザは、動作しません。</p>
 <p>一部、angularJS を利用しています。対応外ブラウザは、動作しません。</p>
 <p>製作者(秋月智絵沙 または ナスカ)への連絡は、Twitter: @chiether までご連絡ください。</p>
 <p>本プログラムの開発のきっかけとなった 市民白河(Twitter: @sirahiyo)に深く感謝します。</p>
</article>
*/}).toString().replace(/(\n)/g, '').split('*')[1]);
