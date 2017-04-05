$.ajax({
    url: "/acme/js/acme.json",
    dataType: "json",
    success: function (data) {
        console.log(data);
        var anvils = data['NavNames']['nameAnvil'];
        var explosives = data['NavNames']['nameExplosive'];
        var decoy = data['NavNames']['nameDecoy'];
        var traps = data['NavNames']['nameTrap'];
        console.log(traps);
        //        $("#cover").fadeOut(250);
        $('#nav-list').html("<li><a href='acme.html'>Home</a></li><li><a href='#'>Anvils</a></li><li><a href='#'>Explosives</a></li><li><a href='#'>Decoys</a></li><li><a href='#'>Traps</a></li>");
        $("#menuObjs").css("display", 'none');

        // Get the name clicked "p" in the front of variable stands for product
        $("#page-nav").on("click", "a", function (evt) {
            evt.preventDefault();
            var navClick = $(this).text();
            console.log(navClick);


            // This is all the information from the product
            if (navClick != "Home") {
                var pName = data[navClick]["name"];

                var pPath = data[navClick]['path'];
                var pDesc = data[navClick]['description'];
                var pManu = data[navClick]['manufacturer'];
                var pPrice = data[navClick]['price'];
                var pReview = data[navClick]['reviews'];





                $("#home").css("display", 'none');

                $("#menuObjs").css("display", 'inherit');
                $("#pTitle").html('Home');
                $('#titleTop').html(pName + ' Acme ');
                $("#pTitle").html(pName);
                $('#pImgi').html('<img id="jsonImg" alt="Content Picture" src=' + pPath + ' >');
                $('#pContent').html(pDesc);
                $('#madeBy').html('<span class="bold">Made By: </span>' + pManu);
                $("#pReviews").html('<span class="bold">Reviews: </span>' + pReview +'/5 stars');
                $("#pPrice").html('<span class="bold">Price: $</span>' +  pPrice);
            } else {
                $("#home").css('display', 'inherit');
                $("#menuObjs").css("display", 'none');
                $('#titleTop').html('Home Acme');

            }


            // This add the information to the HTML





        });

    }
});
