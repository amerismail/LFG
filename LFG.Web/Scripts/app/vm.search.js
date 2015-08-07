var searchModule = (function ($, ko, listActivitiesModule) {
    var GameSystem = function (data) {
        var self = this;
        self.id = ko.observable(data.Id);
        self.name = ko.observable(data.Name);
    }

    var getConsoleData = function () {
        var array = [new GameSystem({ Id: -1, Name: "" })];
        $.ajax({
            async: false,
            url: "api/gamesystems",
            contentType: 'application/json',
            method: "GET",
            dataType: "json",
            success: function (json) {
                $.each(json, function (index, value) {
                    array.push(new GameSystem(value));
                });
            }
        });
        return array;
    }


    var ActivitySearchViewModel = {
        name: ko.observable(),
        consoleList: ko.observableArray(getConsoleData()),
        consoleId: ko.observable(),
        microphone: ko.observable(),
        game: ko.observable(),

        search: function () {
            search(ko.toJSON({ Name: this.name, ConsoleId: this.consoleId, Game: this.game, Microphone: this.microphone }));
        }
    };


    var search = function (data) {
        listActivitiesModule.getList(data);
    };

    var init = function () {
        getConsoleData();
        ko.applyBindings(ActivitySearchViewModel, document.getElementById("Search"));
    };

    return {
        init: init
    };
})(jQuery, ko, listActivitiesModule);

searchModule.init();