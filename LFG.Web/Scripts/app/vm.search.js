var GameSystem = function (data) {
    var self = this;
    self.id = ko.observable(data.Id);
    self.name = ko.observable(data.Name);
}

var getConsoleData = function () {
    var array = [new GameSystem({Id: -1, Name: ""})];
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
    Name: ko.observable(),
    consoleList: ko.observableArray(getConsoleData()),
    consoleId: ko.observable(),

    search: function () {
        search(ko.toJSON({Name: this.Name , ConsoleId: this.consoleId}));
    }
};

   
var search = function (data) {
    getList(data);
};

ko.applyBindings(ActivitySearchViewModel, document.getElementById("Search"));
    
