var searchModule = (function ($, ko, listActivitiesModule, dataModule) {
    var ActivitySearchViewModel = function () {
        var self = this;
        var consoles = [{name: "Platform (All)", id: -1 }];
        dataModule.getConsoles().forEach(function (console) {
            consoles.push(console);
        });

        self.activity = ko.observable();
        self.consoleList = ko.observableArray(consoles);
        self.consoleId = ko.observable();
        self.microphone = ko.observable();
        self.game = ko.observable();

        self.search = function () {
            var data = ko.toJSON({ Name: this.activity, ConsoleId: this.consoleId, Game: this.game, Microphone: this.microphone });
            dataModule.getActivities(data);
        };
    };

    var init = function () {
        ko.applyBindings(ActivitySearchViewModel, document.getElementById("Search"));
    };

    return {
        init: init
    };

})(jQuery, ko, listActivitiesModule, dataModule);

searchModule.init();