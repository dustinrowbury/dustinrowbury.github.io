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
            url: "https://api.wunderground.com/api/eb16b21402b86f82/conditions/forecast/geolookup/q/" + lat + "," + long + ".json",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var city = data['location']['city'];
                var state = data['location']['state'];
                console.log(city);
                var temp = data["current_observation"]['temp_f'];
                console.log(temp);
                var cCond = data["current_observation"]["weather"];
                console.log(cCond);
                var location = city + ', ' + state;
//                var temper = data['forecast']['simpleforecast']['forecastday']['0'];
//                var hi = data['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'];
//                console.log(hi);
//                var hiC = data['forecast']['simpleforecast']['forecastday']['0']['high']['celsius'];
//                var low = data['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit'];
//                var lowC = data['forecast']['simpleforecast']['forecastday']['0']['low']['celsius'];
//                var wind = data['forecast']['simpleforecast']['forecastday']['0']['avewind']['mph'];
//                var windD = data['forecast']['simpleforecast']['forecastday']['0']['avewind']['dir'];
//                var summ = data['forecast']['simpleforecast']['forecastday']['0']['conditions'];


                var tempC = data["current_observation"]['temp_c']
                $('#tempHi').prepend(temp);
                $('#tempLow').prepend(tempC);
//                $('#tempLow').prepend(low);
//                $('#tempLowC').prepend(lowC);


//                $('#weather-sum').html(summ);
//                $('#summary').append(cCond);
                $("#city").prepend(city);
                $('#state').html(state);
                $("title").prepend(location);
                temp = Math.round(temp);
                temp = temp + "&deg";
                var windD = data["current_observation"]["wind_dir"];
                windD = 'Direction: ' + windD;
//                $('#add1').append(windD);
//                windD = 'Direction s' + windD;
                var wind = data["current_observation"]["wind_mph"]
//                $('#add2').append(wind);
                var updated = data["current_observation"]["observation_time"];
                $('#weather-sum').html(cCond);
                $('#windSpeed').prepend(wind);
                $('#windDir').html(windD)






                $("#cover").fadeOut(250);
            }
        });

    }



    // A function for changing a string to TitleCase
    function toTitleCase(str){
        return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
});
