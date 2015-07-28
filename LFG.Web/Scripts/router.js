var name = function($,sammy) {
    console.log("name");
    var init = function () {
        app.run('#/');
    }

    console.log("name");
    var app = sammy('#main', function () {


        console.log("Its running");
        this.get("#/", function (context) {
            context.render('Home.cshtml', { 'myVariable': 'Some value' }, function (view) {
                $('#main').html(view);
            });

        })

    })
    
    init();
} (jQuery, Sammy)

