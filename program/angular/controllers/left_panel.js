app.controller('LeftPanelCtrl', ['$scope', 'ScreenService', 'CharacterService', function($scope, ScreenService, CharacterService){
    this.characters = CharacterService.records;

    this.request_character_create = function(){
        ScreenService.page.name = 'character_create';
    };

    this.request_character_show = function(record){
        ScreenService.page.name = 'character_viewer';
        CharacterService.use(record);
    };

    this.request_weapon_viewer = function(){
        ScreenService.page.name = 'weapon_viewer';
    }

}]);
