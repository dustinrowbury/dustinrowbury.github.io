// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!"); }

    })();

    // Get the data from the wunderground API
    function getData(lat, long){
        $.ajax({
    url: "http://api.wunderground.com/api/eb16b21402b86f82/conditions/forecast/geolookup/q/" + lat + "," + long + ".json",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var location = data['location']['city'] + ', ' + data['location']['state'] +"-";
                console.log(location);
                var temp = data["current_observation"]['temp_f'];
                console.log(temp);
                var cCond = data["current_observation"]["weather"];
                console.log(cCond);
                ;
                $('#weather-sum').append(cCond);
                $(".contain-place").append(location);
                $("title").prepend(location);
                temp = Math.round(temp); temp = temp;
                $("#currentTemp").append(temp);
                var windD = data["current_observation"]["wind_dir"];
                windD = 'Direction: ' + windD;
                $('#add1').append(windD);
                windD = 'Direction s' + windD;
                var wind = data["current_observation"]["wind_mph"]
                wind = "Wind Speed in MPH: " + wind; $('#add2').append(wind);
                var updated = data["current_observation"]["observation_time"];
                $('#add3').append(updated);






                $("#cover").fadeOut(250);
            }
        });

    }



    // A function for changing a string to TitleCase
    function toTitleCase(str){
        return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
});
