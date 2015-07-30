var ActivityViewModel = {
    name: ko.observable(),
    date: ko.observable(),

    save: function() {
        save(ko.toJSON(this));
    }
};

var save = function(vm) {
    console.log(vm);
    $.ajax({
        url: "api/activities",
        contentType: 'application/json',
        method: "POST",
        data: vm,
        dataType: "json",
        success: function () {
            window.location.replace("#/");
        }
    });
};

ko.applyBindings(ActivityViewModel, document.getElementById("CreateActivity-view"));
