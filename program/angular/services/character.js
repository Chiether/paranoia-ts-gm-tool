app.factory('CharacterService', function() {

    var records = [
        {"検証": "キャラクターデータ", "基本情報": { "市民名": "KILL-R-TMT-1", "性別": "女性", "サービスグループ": "内部公安局", "癖": [ "キラーと聞くと床に伏せたり隠れたりする", "ゴム製品に悪態をつく" ] }, "マネジメント技能": { "基本値": 10, "靴舐め": 14, "鉄面皮": null, "詐術": 1, "衛生管理": null, "尋問": null, "脅迫": null, "見定め": null, "雄弁術": null }, "ステルス技能": { "基本値": 10, "隠匿": null, "変装": 1, "厳戒": 14, "セキュリティシステム": 14, "尾行": 1, "手業": 1, "隠密": null, "監視": 14 }, "バイオレンス技能": { "基本値": 6, "敏捷": null, "爆破": null, "エネルギー兵器": 14, "フィールド兵器": null, "精密作業": 10, "白兵戦武器": null, "射出武器": null, "投擲武器": null, "格闘": 1, "車両戦闘": null }, "ハードウェア技能": { "基本値": 6, "ボット運用": null, "化学工学": null, "電子工学": null, "環境工学": null, "機械工学": 10, "核工学": 1, "重機操作": null, "車両運用": null, "装備保守": null }, "ソフトウェア技能": { "基本値": 4, "ボットプログラミング": null, "C-Bay": null, "データ分析": null, "データ検索": null, "金融システム": null, "ハッキング": null, "マルチコーダー運用": null, "オペレーティングシステム": null, "車両プログラミング": null }, "ウェットウェア技能": { "基本値": 4, "生命科学": null, "生物兵器": null, "クローン技術": null, "医学": null, "アウトドア知識": null, "薬物療法": null, "心理療法": null, "暗示": null}},
        {"検証": "キャラクターデータ", "基本情報": { "市民名": "NAZKA-R-TMT-1", "性別": "女性", "サービスグループ": "内部公安局", "癖": [ "キラーと聞くと床に伏せたり隠れたりする", "ゴム製品に悪態をつく" ] }, "マネジメント技能": { "基本値": 10, "靴舐め": 14, "鉄面皮": null, "詐術": 1, "衛生管理": null, "尋問": null, "脅迫": null, "見定め": null, "雄弁術": null }, "ステルス技能": { "基本値": 10, "隠匿": null, "変装": 1, "厳戒": 14, "セキュリティシステム": 14, "尾行": 1, "手業": 1, "隠密": null, "監視": 14 }, "バイオレンス技能": { "基本値": 6, "敏捷": null, "爆破": null, "エネルギー兵器": 14, "フィールド兵器": null, "精密作業": 10, "白兵戦武器": null, "射出武器": null, "投擲武器": null, "格闘": 1, "車両戦闘": null }, "ハードウェア技能": { "基本値": 6, "ボット運用": null, "化学工学": null, "電子工学": null, "環境工学": null, "機械工学": 10, "核工学": 1, "重機操作": null, "車両運用": null, "装備保守": null }, "ソフトウェア技能": { "基本値": 4, "ボットプログラミング": null, "C-Bay": null, "データ分析": null, "データ検索": null, "金融システム": null, "ハッキング": null, "マルチコーダー運用": null, "オペレーティングシステム": null, "車両プログラミング": null }, "ウェットウェア技能": { "基本値": 4, "生命科学": null, "生物兵器": null, "クローン技術": null, "医学": null, "アウトドア知識": null, "薬物療法": null, "心理療法": null, "暗示": null}}
    ];

    var current = {};

    function add_character (data){
        if(data.検証 != 'キャラクターデータ'){
            console.warn('キャラクターデータ以外が含まれていたので無視します。');
            return;
        }
        this.records.push(data);
    }

    function find_character (record) {
        var index = this.records.indexOf(record);
        angular.extend(this.current, this.records[index]);
    };

    return {
        records: records,
        clear: function(){ this.records.length = 0; },
        add: add_character,
        use: find_character,
        current: current
    };
});