var listActivitiesModule = (function ($) {
    var getList = function (data) {
        $.ajax({
            url: "api/activities/Search",
            contentType: 'application/json',
            method: "POST",
            data: data,
            dataType: "json",
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

    var updateDom = function (listOfActivities) {
        var jsonObj = $.parseJSON('[' + JSON.stringify(listOfActivities) + ']');
        $("#activitiesList tr").remove();

        var html = '<tr>';
        for (var i = 0; i < jsonObj[0].length; i++) {
            var diff = getTimeDifference(jsonObj[0][i].CreateTS);

            if (i % 3 == 0 && i != 0) {
                html += '</tr><tr>';
            }

            html += '<td class="activity-details">';
            html += '<span>';
            html += '<kbd>' + jsonObj[0][i].Owner + '</kbd>&nbsp;';
            if (jsonObj[0][i].GameSystem.Name.indexOf("Xbox") > -1) {
                html += '<span class="xbox float-right">';
            } else if (jsonObj[0][i].GameSystem.Name.indexOf("Play") > -1) {
                html += '<span class="psn float-right">';
            } else {
                html += '<span class="pc float-right">';
            }
            html += jsonObj[0][i].GameSystem.Name + '</span>';
            html += '</span><br /><br />';
            html += '<span>';
            html += '<span><strong>' + jsonObj[0][i].Game + '</strong></span>';
            html += '<span>: ' + jsonObj[0][i].Name + '</span>';
            html += '</span><br /><br />';
            html += '<span>';
            if (jsonObj[0][i].GameSystem.Name.indexOf("Xbox") > -1) {
                var temp = 'https://account.xbox.com/Messages?gamerTag=' + jsonObj[0][i].Owner.replace(' ', '+');
                html += '<a href="' + temp + '" target="_user"><i class="fa fa-envelope fa-lg fa-fw"></i></a>';
            }
            if (jsonObj[0][i].Mic) {
                html += '<i class="fa fa-microphone fa-lg fa-fw"></i>';
            }
            html += '<span class="float-right">' + diff + '</span>';
            html += '</span><br />';
            html += '</td>';
        }
        html += '</tr>';
        $('#activitiesList').append(html);
    }

    var init = function () {
        getList("");
    };

    return {
        init: init,
        getList: getList
    }
})(jQuery);

listActivitiesModule.init();