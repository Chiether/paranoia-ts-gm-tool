app.controller('CharacterCtrl', ['CharacterService', function(CharacterService){
    this.records = CharacterService.records;
    this.current  = CharacterService.current;

    this.download = function (link_dom, record) {
        var blob = new Blob([ JSON.stringify(record) ], { "type" : "application/x-msdownload" });
        window.URL = window.URL || window.webkitURL;
        link_dom = $(link_dom);
        link_dom.attr("href", window.URL.createObjectURL(blob));
        var filename = null;
        filename = record.基本情報.市民名.split('-');
        filename.pop();
        link_dom.attr("download", filename.join('-') + '.txt');
    };

    this.regist = function (scope, recv_files) {
        var reader = new FileReader();
        reader.files = [];
        reader.scope = this;
        reader.onloadend = function(){
            if (reader.result) {
                var data = {};
                try{
                    data = JSON.parse(reader.result);
                }catch( e ){
                }
                CharacterService.add(data);
                scope.$apply();
            }
            if(reader.files.length){ reader.readAsText(reader.files.shift()); }
        };
        for(var i=0, j=recv_files.length; i<j; i++){ reader.files.push(recv_files[i]); }
        CharacterService.clear();
        scope.$apply();
        reader.onloadend(null, this);
    }
}]);
