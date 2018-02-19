jQuery(document).ready(function ($) {
    $.ajax({
        url: "http://api.wunderground.com/api/eb16b21402b86f82/geolookup/conditions/q/SC/Greenville.json",
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            var location = data['Springfield']['City'];
            var temp_f = data['Springfield']['High'];
            console.log("Current temperature in " + location + " is: " + temp_f);
            var locName = $('#locName');
            var highTemp = $('#highTemp');
            var tempMessage = $('#tempMessage');

            locName.html(location);
            highTemp.html(temp_f);
            tempMessage.html("Current temperature in " + location + " is: " + temp_f);
        }
    });
});
