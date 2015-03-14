document.write((function(){/*
<style>
article#welcome p.indent { padding-left: 1.5em; margin-bottom: 0.2em; }
article#welcome p.indent { text-indent: 0.5em; }
article#welcome p.indent div { text-indent: 0em; }
article#welcome [data-toggle="tooltip"] { border-bottom: dashed 1px #ff0000;; }
</style>
<script>$(function () { $('article#welcome [data-toggle="tooltip"]').tooltip(); })</script>
<article id="welcome">
<h1 class="page-header">ようこそ。ハイプログラマー。</h1>
<section>
    <h2>はじめに</h2>
    <p class="indent">
        このプログラムは、パラノイア25周年記念版
        <span data-toggle="tooltip" data-placement="top" title="和訳は、日本語版です">トラブルシューターズ</span>の
        <span data-toggle="tooltip" data-placement="top" title="あなたのことです！">ゲームマスター</span>を、
        <span data-toggle="tooltip" data-placement="top" title="ご心配いりません！">支援する</span>ためのツールです。
        大変申し訳ないことですが。
        とても<span data-toggle="tooltip" data-placement="top" title="少なくともプレイヤーどもには理解できるはずがありません">複雑すぎる</span>ために、
        機能の不足感などがあると想いますが
        予め<span data-toggle="tooltip" data-placement="top" title="要望は歓迎しますが実装は約束しません">ご容赦ください</span>。
    </p>
</section>
<section>
    <h2>機能説明</h2>
    <h4>キャラクター管理</h3>
    <p class="indent">
        キャラクター情報は、
        <span data-toggle="tooltip" data-placement="top" title="JSON形式です。サンプルデータで確認してください">所定のフォーマット</span>で管理します。
        データのインポートは、<span data-toggle="tooltip" data-placement="top" title="AlphaComplex™ が 'Microsoft® Windows®' と深い関連性があるという事実は存在しません！">フォルダ</span>単位で行いますのでセッション単位などで一纏めにするコトを、おすすめします。
    </p>
    <p class="indent">
        キャラクター登録は、左サイドメニュー【キャラ登録】から行うことができます。現在インポート機能しか提供しておりませんが後ほど個別登録を可能とする予定です。
        登録されたキャラクターは、市民名が左サイドメニューに追加されます。追加されたサイドメニューの【市民名】から参照や修正ができます。
        修正は即時反映されますので別のデータを参照して戻った場合でも編集後のデータがロードされます。
    </p>
    <p class="indent">
        セキュリティの都合上。HTML5ではローカルファイルへの直接出力ができませんので。修正したキャラクターの保存は、ダウンロードボタンからインポートに使用したキャラクターファイルを上書きしてください。
        <span style="color: red">注意：同じ市民名、同じデータが複数存在すると動作不良の原因となります。この不具合は、ひと通りの機能実装後に修正される予定です。</span>
    </p>
    <h4>戦闘処理(実装予定)</h4>
    <p class="indent">
        登録されている市民データをベースに、戦闘処理の判定を行います。
        ただし乱戦ルールについては、処理が特殊なため現在のとろこ対応が予定されていません。
    </p>
    <h4>各種データ表(実装予定)</h4>
    <p class="indent">
        武器データ、アイテムデータ、薬物データなど。ルールブックの何処にあるか探す手間を減らすために提供する予定です。
    </p>
</section>
<section>
    <h2>謝辞および連絡先</h2>
    <h4>動作環境</h4>
    <p class="indent">以下の全ての条件を満たすブラウザが対象です(2015年03月現在、Google Chrome™とFirefox®は対応していますがInternet Explorer®は対象外となります)。</p>
    <ul>
        <li>HTML5のdirectory(webkitdirectory)をサポートしているブラウザ。</li>
        <li>HTML5のFileSystemAPIのうちFileReaderとBlobをサポートしているブラウザ。</li>
        <li>Bootstrap v3.3.2 がサポートしているブラウザ。</li>
        <li>jQuery v2.1.3 がサポートしているブラウザ。</li>
        <li>AngularJS v1.4.0-beta.5 がサポートしているブラウザ。</li>
    </ul>
    <h4>権利宣言</h4>
    <p class="indent">
        本プログラムの著作権は、使用しているライブラリを除いて、その一切を作者が保持しダウンロードを含めた一切の複製、改竄、あらゆる行為を禁じます。
        ただし本プログラムは、ＧＭスクリーンの内側のデータに準ずるものとして、
        <span data-toggle="tooltip" data-placement="top" title="インディゴ市民">紫市民</span>以下があなたが使用している事実を知った場合。
        最大120点の反逆点もしくは存在抹消とすることを、本プログラムの作者が許可します。
    </p>
    <h4>謝辞</h4>
    <p class="indent">
        本プログラムの開発のきっかけとなった <span data-toggle="tooltip" data-placement="top" title="Twitter: @sirahiyo">白河日和</span>氏に、深く感謝します。
    </p>
    <p class="indent">
        それから
        <span data-toggle="tooltip" data-placement="top" title="Twitter and Their Contributors">Twitter Bootstrap</span>、
        <span data-toggle="tooltip" data-placement="top" title="The jQuery Foundation">jQuery</span>、
        <span data-toggle="tooltip" data-placement="top" title="Google">AngularJS</span> にもな。
    </p>
    <h4>連絡先</h4>
    <p class="indent">
        <span data-toggle="tooltip" data-placement="top" title="https://github.com/Chiether/paranoia-ts-gm-tool">githubのissue</span> か
        <span data-toggle="tooltip" data-placement="top" title="@chiether">Twitter</span>
        までご連絡ください。
    </p>
</article>
*/}).toString().replace(/(\n)/g, '').split('*')[1]);
