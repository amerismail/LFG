var name = function($,sammy) {
    var init = function () {
        app.run('#/');
    };

    var app = sammy('#main', function () {
        console.log("Its running");

        this.get("#/", function (context) {
            context.render('Home.html', { 'myVariable': 'Some value' }, function (view) {
                $('#main').html(view);
            });
        });

        this.get("#/create", function (context) {
            context.render('CreateActivity.html', { 'myVariable': 'Some value' }, function (view) {
                $('#main').html(view);
            });
        });
    });
    
    init();
} (jQuery, Sammy)

