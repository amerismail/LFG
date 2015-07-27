var ViewModel = function () {
    this.name = ko.observable();
    this.date = ko.observable();

    this.save = function(){
        save(ko.toJSON(this));
    }
};

ko.applyBindings(new ViewModel());

var save = function(vm) {
    console.log(vm);
        $.ajax({
        url: "api/activities",
        contentType: 'application/json',
        method: "POST",
        data: vm,
        dataType: "json",
        success: function () {
            console.log("It worked");
        }
    });
};