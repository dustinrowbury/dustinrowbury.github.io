function checkFoods()
{
    // Avliable foods will hold the foods that the user has
    var availableFoods = [];


    if(document.getElementById("milk").checked)
    {
        availableFoods.push("milk");

    }


    if(document.getElementById("eggs").checked)
    {
        availableFoods.push("eggs");
    }


    if(document.getElementById("butter").checked)
    {
        availableFoods.push("butter");
    }



    if(document.getElementById("sugar").checked)
    {
        availableFoods.push("sugar");
    }


    if(document.getElementById("brown sugar").checked)
    {
        availableFoods.push("brown sugar");
    }


    document.getElementById("output").innerHTML += availableFoods;




}
