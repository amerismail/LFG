var activityModule = (function ($, ko) {
    var GameSystem = function (data) {
        var self = this;
        self.id = ko.observable(data.Id);
        self.name = ko.observable(data.Name);
    }

    var ActivityViewModel = function () {
        var self = this;

        self.ConsoleId = ko.observable();
        self.Game = ko.observable();
        self.Name = ko.observable();
        self.Mic = ko.observable();
        self.Owner = ko.observable();

        self.GameSystemArray = ko.observableArray([]);

        $.ajax({
            url: "api/gamesystems",
            contentType: 'application/json',
            method: "GET",
            dataType: "json",
            success: function (json) {
                var array = [];
                $.each(json, function (index, value) {
                    array.push(new GameSystem(value));
                });
                self.GameSystemArray(array);
            }
        });

        self.save = function () {
            var body = (ko.toJSON({ ConsoleId: this.ConsoleId, Game: this.Game, Name: this.Name, Mic: this.Mic, Owner: this.Owner }));
            $.ajax({
                url: "api/activities/Save",
                contentType: 'application/json',
                method: "POST",
                data: body,
                dataType: "json",
                success: function () {
                    window.location.replace("#/");
                }
            });
        }
    };

    var init = function(){
        ko.applyBindings(ActivityViewModel, document.getElementById("createForm"));
    }

    return {
        init: init
    };
})(jQuery, ko);
activityModule.init();