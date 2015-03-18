app.controller('BattleCtrl', [
    'WeaponService', 'CharacterService',
    function(WeaponService, CharacterService){
        this.characters = CharacterService.records;
        this.weapons = WeaponService.records;

        // 攻撃者
        this.offence = {
            character: {}, //キャラクター情報
            weapon: {}, //使用武器
            skill: {} //使用スキル
        };
        // 防御者
        this.defend = [];

        this.init = function (){
        };

    }]);
