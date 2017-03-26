$('#query').keyup(function(){
    // All code will be inside of this block

    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        console.log(data);
    }); // end getJSON

}); // end keyup
