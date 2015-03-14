app.controller('ScreenCtrl', ['ScreenService', function(ScreenService){
    this.page = ScreenService.page;
    this.page_name = ScreenService.page.name;
}]);
