var ViewModel = function () {
    this.name = ko.observable("Test");
};

ko.applyBindings(new ViewModel());
