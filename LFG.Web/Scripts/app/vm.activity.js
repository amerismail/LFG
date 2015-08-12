var activityModule = (function ($, ko, dataModule) {
    var ActivityViewModel = function () {
        var self = this;

        self.ConsoleId = ko.observable();
        self.Game = ko.observable();
        self.Name = ko.observable();
        self.Mic = ko.observable();
        self.Owner = ko.observable();

        self.GameSystemArray = ko.observableArray(dataModule.getConsoles());

        self.save = function () {
            var body = (ko.toJSON({ ConsoleId: this.ConsoleId, Game: this.Game, Name: this.Name, Mic: this.Mic, Owner: this.Owner }));
            dataModule.postActivity(body);
        };
    };

    var init = function(){
        ko.applyBindings(ActivityViewModel, document.getElementById("createForm"));
    }

    return {
        init: init
    };
})(jQuery, ko , dataModule);
activityModule.init();