var dataModule = (function ($, ko, listActivitiesModule) {
    var consoleData = [];

    var getActivities = function (data) {
        $.ajax({
            url: "api/activities/Search",
            contentType: 'application/json',
            method: "POST",
            data: data,
            dataType: "json",
            success: function (response) {
                listActivitiesModule.updateDom(response);
            }
        });
    };

    var GameSystem = function (data) {
        var self = this;
        self.id = ko.observable(data.Id);
        self.name = ko.observable(data.Name);
    }

    var getConsoles = function (callback) {
        if (consoleData.length == 0) {
            $.ajax({
                async: false,
                url: "api/gamesystems",
                contentType: 'application/json',
                method: "GET",
                dataType: "json",
                success: function (json) {   
                    $.each(json, function (index, value) {
                        consoleData.push(new GameSystem(value));
                    });
                }
            });
        }
        return consoleData;
    }
    
    var postActivity = function (data) {
        $.ajax({
            url: "api/activities/Save",
            contentType: 'application/json',
            method: "POST",
            data: data,
            dataType: "json",
            success: function () {
                window.location.replace("#/");
            }
        });
    }

    var init = function () {
        getActivities("");
    };

    return {
        init: init,
        getActivities: getActivities,
        getConsoles: getConsoles      
    }
})(jQuery, ko, listActivitiesModule);

dataModule.init();
