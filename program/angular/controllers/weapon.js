app.controller('WeaponCtrl', ['WeaponService', function(WeaponService){
    this.records = WeaponService.records;
    this.selected = {};

    this.init = function (){
        for(var i=0, j=this.records.length; i < j; i++) {
            this.records[i].ラベル = '';
            if (this.records[i].グループ) {
                this.records[i].ラベル = '  ' + this.records[i].グループ + ':';
            }
            this.records[i].ラベル = this.records[i].ラベル + this.records[i].名称;
        }
    };

}]);
