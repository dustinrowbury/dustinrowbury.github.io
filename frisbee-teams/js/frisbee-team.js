function getCirclePos() {

   var playerCount = 4;

    makeMiniCircles(playerCount);

}


function makeMiniCircles(playerCount) {

    var displayCircle = document.querySelector("#circle-display");

    var dCPos = displayCircle.getBoundingClientRect();

    console.log(dCPos.top);

    var xVal = dCPos.bottom - dCPos.top;
    console.log(xVal);

    for(i = 0; i < playerCount; i++) {

        var circleA = displayCircle.appendChild(document.createElement("SECTION"));

        circleA.id = ".mini-circle";
        circleA.width = "5em";
        circleA.height = "5em";
        circleA.marginTop = xVal + "em";
        circleA.style.backgroundColor = "blue";
    }

}
