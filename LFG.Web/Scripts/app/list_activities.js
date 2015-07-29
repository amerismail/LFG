$(document).ready(function () {
    $.ajax({
        url: "api/activities",
        contentType: 'application/json',
        method: "GET",
        dataType: "json",
        success: function (listOfActivities) {
            updateDom(listOfActivities);
        }
    });

    var updateDom = function (listOfActivities) {
        var jsonObj = $.parseJSON('[' + JSON.stringify(listOfActivities) + ']');

        for(var i = 0; i < jsonObj[0].length; i++)
        {
            $('#Test tr:last').after('<tr class="info"><td>' + jsonObj[0][i].Name + '</td>' + '<td>' + jsonObj[0][i].Date + '</td></tr>');
        }       
    }
});