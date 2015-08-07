var listActivitiesModule = (function ($) {
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

    var stringEnding = function (number) {
        if (number > 1)
            return 's';
        return '';
    }

    var getTimeDifference = function (date) {
        var millis = (new Date()).getTime() - (new Date(date)).getTime();

        var seconds = parseInt(millis / 60000);
        var hours = parseInt(seconds / 60);
        var days = parseInt(hours / 24);

        if (seconds == 0) {
            return 'now';
        }
        else if (seconds < 60) {
            return (seconds + ' second' + stringEnding(seconds) + ' ago');
        }
        else if (hours < 24) {
            return (hours + ' hour' + stringEnding(hours) + ' ago');
        }
        else {
            return (days + ' day' + stringEnding(days) + ' ago');
        }
    }

    var tableSorter = function (length) {

        var id = setInterval(function () {
            if ($("table#Test tbody tr").length == length) {
                $("table#Test").trigger("update");
                window.clearInterval(id);
            }
        }, 50);
    }

    var updateDom = function (listOfActivities) {
        var jsonObj = $.parseJSON('[' + JSON.stringify(listOfActivities) + ']');

        $("#activitiesList tr").remove();

        for (var i = 0; i < jsonObj[0].length; i++) {
            var text = '✓';
            if (!jsonObj[0][i].Mic)
                text = 'X';

            var diff = getTimeDifference(jsonObj[0][i].CreateTS);

            $('#activitiesList').append(
                '<tr">' +
                    '<td>' + jsonObj[0][i].GameSystem.Name + '</td>' +
                    '<td>' + jsonObj[0][i].Game + '</td>' +
                    '<td>' + jsonObj[0][i].Name + '</td>' +
                    '<td>' + text + '</td>' +
                    '<td>' + jsonObj[0][i].Owner + '</td>' +
                    '<td>' + diff + '</td>' +
                '</tr>'
            )
        }

        tableSorter(jsonObj[0].length);
    }

    var init = function () {
        $("#Test").tablesorter();
        getList("");
    };

    return {
        init: init,
        getList: getList
    }
})(jQuery);

listActivitiesModule.init();