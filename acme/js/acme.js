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

        // Get the name clicked "p" in the front of variable stands for product
        $("#page-nav").on("click", "a", function (evt) {
            evt.preventDefault();
            var navClick = $(this).text();
            console.log(navClick);

            // This is all the information from the product
            var pName = data[navClick]["name"];
            console.log(pName);
            var pPath = data[navClick]['path'];
            var pDesc = data[navClick]['description'];
            var pManu = data[navClick]['manufacturer'];
            var pPrice = data[navClick]['price'];
            var pReview = data[navClick]['reviews'];
            console.log(pManu);

            $("#home").hide();

            $("#pTitle").html(pName);
            $('#pImg').html('<img alt="Content Picture" src=' + pPath + ' >');
            $('#pContent').html(pDesc);
            $('#madeBy').html(pManu);


            // This add the information to the HTML





        });

    }
});

