    var getList = function (data) {
        $('#loader').show();
        $.ajax({
            url: "api/activities/Search",
            contentType: 'application/json',
            method: "POST",
            data: data,
            dataType: "json",
            complete: function () {
                $('#loader').hide();
            },
            success: function (listOfActivities) {
                updateDom(listOfActivities);
            }
        });
    }

    var updateDom = function (listOfActivities) {
        var jsonObj = $.parseJSON('[' + JSON.stringify(listOfActivities) + ']');

        console.log(jsonObj);
        $('#Test tr').not(function () { if ($(this).has('th').length) { return true } }).remove();
        for(var i = 0; i < jsonObj[0].length; i++)
        {
            $('#Test tr:last').after('<tr class="info"><td>' + jsonObj[0][i].Name + '</td><td>' + jsonObj[0][i].GameSystem.Name + '</td><td>' + jsonObj[0][i].CreateTS + '</td></tr>');
        }       
    }
    
    getList("");