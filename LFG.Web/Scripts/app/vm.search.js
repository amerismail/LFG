var ActivitySearchViewModel = {
    name: ko.observable(),

    search: function () {
        search(ko.toJSON(this));
    }
};

var search = function (data) {
    console.log(data);
    $.ajax({
        url: "api/activities/Search",
        contentType: 'application/json; charset=utf-8',
        method: "POST",
        data: data,
        traditional: true,
        dataType: "json",
        success: function (listOfActivities) {
            console.log(listOfActivities);
        }
    });
};

ko.applyBindings(ActivitySearchViewModel, document.getElementById("Search"));

