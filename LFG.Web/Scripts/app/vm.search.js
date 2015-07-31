    var ActivitySearchViewModel = {
        name: ko.observable(),

        search: function () {
            search(ko.toJSON(this));
        }
    };

    var search = function (data) {
        console.log(data);
        getList(data);
    };

    ko.applyBindings(ActivitySearchViewModel, document.getElementById("Search"));
