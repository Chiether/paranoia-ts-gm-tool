app.factory('ScreenService', function() {
    var current_page = 'welcome';
    return {
        page: {name: current_page},
        page_name: current_page
    };
});