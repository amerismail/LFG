var GameSystem = function (data) {
    var self = this;
    self.id = ko.observable(data.Id);
    self.name = ko.observable(data.Name);
}

var ActivityViewModel = function() {
    var self = this;

    self.Name = ko.observable();
    self.ConsoleId = ko.observable();
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
        var body = '{"Name":' + ko.toJSON(self.Name) + ',"ConsoleId":' + ko.toJSON(self.ConsoleId) + '}';
        $.ajax({
            url: "api/activities",
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

ko.applyBindings(ActivityViewModel, document.getElementById("CreateActivity-view"));
