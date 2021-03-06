app.factory('WeaponService', function() {

    var records = [{
        "名称": "ブラスター",
        "武器種別": "エネルギー兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "335",
        "弾数": 1,
        "射程": 50,
        "範囲": 0,
        "クリアランス": "橙",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "ブラスナックル",
        "武器種別": "白兵戦武器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "152",
        "弾数": 9999,
        "射程": 0,
        "範囲": 0,
        "クリアランス": "赤",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "不具合を起こさない"
    }, {
        "名称": "スラッグ弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "235",
        "弾数": 1,
        "射程": 200,
        "範囲": 0,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)"
    }, {
        "名称": "徹甲弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "235",
        "弾数": 1,
        "射程": 200,
        "範囲": 0,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": true,
        "噴射可": false,
        "特記事項": "要信管(青)"
    }, {
        "名称": "ダムダム弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "335",
        "弾数": 1,
        "射程": 160,
        "範囲": 0,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)"
    }, {
        "名称": "榴弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "225",
        "弾数": 1,
        "射程": 160,
        "範囲": 5,
        "クリアランス": "藍",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)"
    }, {
        "名称": "対戦車榴弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "235",
        "弾数": 1,
        "射程": 200,
        "範囲": 40,
        "クリアランス": "藍",
        "実験的": true,
        "徹甲効果": true,
        "噴射可": false,
        "特記事項": "要信管(青)"
    }, {
        "名称": "ナパーム弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "125",
        "弾数": 1,
        "射程": 200,
        "範囲": 8,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": "要信管(青)"
    }, {
        "名称": "フレア弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 200,
        "範囲": 0,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)、明るい光"
    }, {
        "名称": "ECM弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "525",
        "弾数": 1,
        "射程": 200,
        "範囲": 0,
        "クリアランス": "藍",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)、対ボット専用"
    }, {
        "名称": "毒ガス弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "バイオ",
        "ダメージコード": "135",
        "弾数": 1,
        "射程": 200,
        "範囲": 30,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)、生物のみ有効（耐環境性アーマーは無効)"
    }, {
        "名称": "スモーク弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 200,
        "範囲": 30,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)、視認性低下、横車成功率上昇不可、レーザーにはE1アーマー扱い"
    }, {
        "名称": "腐食ガス弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "バイオ",
        "ダメージコード": "135",
        "弾数": 1,
        "射程": 200,
        "範囲": 30,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)、金属製に有効、1ラウンド晒されると装甲値1減少"
    }, {
        "名称": "嘔吐性ガス弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 200,
        "範囲": 30,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)、生物のみ有効、ラウンド毎にバイオレンス判定失敗で嘔吐(1d20/4切上ラウンド行動不可)"
    }, {
        "名称": "ガウスガス弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 200,
        "範囲": 30,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)、ガス雲内の対象へのガウス銃やエネルギー兵器のダメージ１段階上昇"
    }, {
        "名称": "汚物ガス弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 200,
        "範囲": 30,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)、リフレクアーマー装甲値消失(水や溶剤と2ラウンドの時間で除去可)"
    }, {
        "名称": "幻覚ガス弾",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 200,
        "範囲": 30,
        "クリアランス": "青",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)、生物のみ有効、ラウンド毎にバイオレンス判定失敗で翌日まで判定目標値半分"
    }, {
        "名称": "戦術核",
        "グループ": "コーンライフル",
        "武器種別": "射出兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "616",
        "弾数": 1,
        "射程": 200,
        "範囲": 160,
        "クリアランス": "藍",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要信管(青)、通常は蒸発処理のみ"
    }, {
        "名称": "エネルギーピストル",
        "武器種別": "エネルギー兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "235",
        "弾数": 5,
        "射程": 60,
        "範囲": 0,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "火炎放射器",
        "武器種別": "フィールド兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "135",
        "弾数": 10,
        "射程": 20,
        "範囲": 20,
        "クリアランス": "黄",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": ""
    }, {
        "名称": "フォースソード",
        "武器種別": "白兵戦武器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "135",
        "弾数": 9999,
        "射程": 0,
        "範囲": 0,
        "クリアランス": "青",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "ガウス銃",
        "武器種別": "フィールド兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "235",
        "弾数": 100,
        "射程": 20,
        "範囲": 20,
        "クリアランス": "藍",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "範囲は錐状、対ボット専用"
    }, {
        "名称": "手榴弾(グレネード)",
        "武器種別": "投擲武器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "235",
        "弾数": 1,
        "射程": 20,
        "範囲": 5,
        "クリアランス": "赤",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "ハンドフレーマー",
        "武器種別": "フィールド兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "135",
        "弾数": 3,
        "射程": 40,
        "範囲": 0,
        "クリアランス": "紫",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "隠匿容易"
    }, {
        "名称": "氷銃(アイスガン)",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "135",
        "弾数": 25,
        "射程": 50,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": ""
    }, {
        "名称": "ナイフ",
        "武器種別": "白兵戦武器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "155",
        "弾数": 9999,
        "射程": 0,
        "範囲": 0,
        "クリアランス": "赤",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "投擲時射程20m"
    }, {
        "名称": "レーザーピストル",
        "武器種別": "エネルギー兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "235",
        "弾数": 6,
        "射程": 50,
        "範囲": 0,
        "クリアランス": "**",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要本体(赤)"
    }, {
        "名称": "レーザーライフル",
        "武器種別": "エネルギー兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "235",
        "弾数": 6,
        "射程": 100,
        "範囲": 0,
        "クリアランス": "**",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "要本体(橙)"
    }, {
        "名称": "ニードルガン",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "132",
        "弾数": 10,
        "射程": 60,
        "範囲": 0,
        "クリアランス": "青",
        "実験的": false,
        "徹甲効果": true,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "神経鞭(ニューロウィップ)",
        "武器種別": "白兵戦武器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "153",
        "弾数": 9999,
        "射程": 0,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "プラズマ発生器",
        "武器種別": "フィールド兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "616",
        "弾数": 10,
        "射程": 0,
        "範囲": 20,
        "クリアランス": "紫",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "範囲は錐状60度"
    }, {
        "名称": "岩又は廃材",
        "武器種別": "投擲武器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "052",
        "弾数": 1,
        "射程": 20,
        "範囲": 0,
        "クリアランス": "全",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "大きい岩又は廃材",
        "武器種別": "投擲武器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "042",
        "弾数": 1,
        "射程": 10,
        "範囲": 0,
        "クリアランス": "全",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "スラッグ弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "235",
        "弾数": 6,
        "射程": 0,
        "範囲": 0,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "徹甲弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "235",
        "弾数": 3,
        "射程": 50,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": true,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "ダムダム弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "335",
        "弾数": 6,
        "射程": 50,
        "範囲": 0,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "榴弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "225",
        "弾数": 6,
        "射程": 40,
        "範囲": 0,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "対戦車榴弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "225",
        "弾数": 6,
        "射程": 40,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": true,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "ナパーム弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "125",
        "弾数": 1,
        "射程": 40,
        "範囲": 3,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "フレア弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 0,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "明るい光"
    }, {
        "名称": "ECM弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "325",
        "弾数": 1,
        "射程": 40,
        "範囲": 0,
        "クリアランス": "藍",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "対ボット専用"
    }, {
        "名称": "毒ガス弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "バイオ",
        "ダメージコード": "135",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "生物のみ有効（耐環境性アーマーは無効)"
    }, {
        "名称": "スモーク弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "視認性低下、横車成功率上昇不可、レーザーにはE1アーマー扱い"
    }, {
        "名称": "腐食ガス弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "バイオ",
        "ダメージコード": "135",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "金属製に有効、1ラウンド晒されると装甲値1減少"
    }, {
        "名称": "嘔吐性ガス弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "生物のみ有効、ラウンド毎にバイオレンス判定失敗で嘔吐(1d20/4切上ラウンド行動不可)"
    }, {
        "名称": "ガウスガス弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "ガス雲内の対象へのガウス銃やエネルギー兵器のダメージ１段階上昇"
    }, {
        "名称": "汚物ガス弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "リフレクアーマー装甲値消失(水や溶剤と2ラウンドの時間で除去可)"
    }, {
        "名称": "幻覚ガス弾",
        "グループ": "スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "黄",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "生物のみ有効、ラウンド毎にバイオレンス判定失敗で翌日まで判定目標値半分"
    }, {
        "名称": "スラッグ弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "235",
        "弾数": 6,
        "射程": 0,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": ""
    }, {
        "名称": "徹甲弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "235",
        "弾数": 3,
        "射程": 50,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": true,
        "噴射可": true,
        "特記事項": ""
    }, {
        "名称": "ダムダム弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "335",
        "弾数": 6,
        "射程": 50,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": ""
    }, {
        "名称": "榴弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "225",
        "弾数": 6,
        "射程": 40,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": ""
    }, {
        "名称": "対戦車榴弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "225",
        "弾数": 6,
        "射程": 40,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": true,
        "噴射可": true,
        "特記事項": ""
    }, {
        "名称": "ナパーム弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "125",
        "弾数": 1,
        "射程": 40,
        "範囲": 3,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": ""
    }, {
        "名称": "フレア弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": "明るい光"
    }, {
        "名称": "ECM弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "325",
        "弾数": 1,
        "射程": 40,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": "対ボット専用"
    }, {
        "名称": "毒ガス弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "バイオ",
        "ダメージコード": "135",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": "生物のみ有効（耐環境性アーマーは無効)"
    }, {
        "名称": "スモーク弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": "視認性低下、横車成功率上昇不可、レーザーにはE1アーマー扱い"
    }, {
        "名称": "腐食ガス弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "バイオ",
        "ダメージコード": "135",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": "金属製に有効、1ラウンド晒されると装甲値1減少"
    }, {
        "名称": "嘔吐性ガス弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": "生物のみ有効、ラウンド毎にバイオレンス判定失敗で嘔吐(1d20/4切上ラウンド行動不可)"
    }, {
        "名称": "ガウスガス弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": "ガス雲内の対象へのガウス銃やエネルギー兵器のダメージ１段階上昇"
    }, {
        "名称": "汚物ガス弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": "リフレクアーマー装甲値消失(水や溶剤と2ラウンドの時間で除去可)"
    }, {
        "名称": "幻覚ガス弾",
        "グループ": "(ｾﾐｵｰﾄ)スラグスロワ",
        "武器種別": "射出兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 1,
        "射程": 40,
        "範囲": 5,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": true,
        "特記事項": "生物のみ有効、ラウンド毎にバイオレンス判定失敗で翌日まで判定目標値半分"
    }, {
        "名称": "ソニックピストル",
        "武器種別": "エネルギー兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "132",
        "弾数": 10,
        "射程": 60,
        "範囲": 0,
        "クリアランス": "橙",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "非殺傷。負傷はスタン効果＋１シーンの聴覚不能"
    }, {
        "名称": "ソニックライフル",
        "武器種別": "エネルギー兵器",
        "ダメージ種別": "エネルギー",
        "ダメージコード": "132",
        "弾数": 10,
        "射程": 100,
        "範囲": 0,
        "クリアランス": "橙",
        "実験的": true,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "非殺傷。負傷はスタン効果＋１シーンの聴覚不能"
    }, {
        "名称": "スタンガン",
        "武器種別": "フィールド兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 6,
        "射程": 40,
        "範囲": 0,
        "クリアランス": "橙",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "スタン能力のみ(補足：フィールド兵器なので線状攻撃)"
    }, {
        "名称": "剣",
        "武器種別": "白兵戦武器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "255",
        "弾数": 9999,
        "射程": 0,
        "範囲": 0,
        "クリアランス": "全",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "捕縄器(タングラー)",
        "武器種別": "フィールド兵器",
        "ダメージ種別": "-",
        "ダメージコード": "***",
        "弾数": 3,
        "射程": 50,
        "範囲": 0,
        "クリアランス": "緑",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "対象者に巻きつき縛り上げる"
    }, {
        "名称": "警棒",
        "武器種別": "白兵戦武器",
        "ダメージ種別": "インパクト",
        "ダメージコード": "155",
        "弾数": 9999,
        "射程": 0,
        "範囲": 0,
        "クリアランス": "赤",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": ""
    }, {
        "名称": "素手",
        "武器種別": "格闘",
        "ダメージ種別": "インパクト",
        "ダメージコード": "055",
        "弾数": 9999,
        "射程": 0,
        "範囲": 0,
        "クリアランス": "全",
        "実験的": false,
        "徹甲効果": false,
        "噴射可": false,
        "特記事項": "不具合を起こさない"
    }];

    return {
        records: records
    };
});