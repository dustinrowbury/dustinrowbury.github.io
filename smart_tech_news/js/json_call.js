


function loadAPIInfo() {
    var prefrences = "Android OR Tesla";
    var parsedText;
    var recievedData
    console.log("in the function");
    var xhttp = new XMLHttpRequest();

    var url = 'https://newsapi.org/v2/everything?' +
        'q=\'' + prefrences + '\'&' +
        'from=2018-02-07&' +
        'sortBy=popularity&' +
        'apiKey=c8f6a1af693146aeaea8d009892d5c41';
    console.log("created the object");

    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function () {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            recievedData = xhttp.responseText;
            parsedText = JSON.parse(recievedData);


            var picture = "\"" + parsedText.articles[10].urlToImage + "\"";
            document.getElementById("primary_new_suggestion").innerHTML =
               '<img src= ' + picture + '" alt="Best tech news recomendation" id="first-pref-img">' +
                '<h2 id="best_suggestion_id"></h2>';
            document.getElementById("best_suggestion_id").innerHTML = parsedText.articles[1].title;
            loadStory(document.querySelector("#junk"), parsedText.articles[2].url);

        }

    };

    xhttp.send();


}

function loadStory(displaySection, theUrl) {


//    var dummyIframe = document.createElement("iframe");
//    document.querySelector("#tiny").appendChild(dummyIframe);
//    dummyIframe.src = theUrl;
//    dummyIframe.onload = function() {
//    var innerDoc = (dummyIframe.contentDocument) ? dummyIframe.contentDocument : dummyIframe.contentWindow.document;
//
//    var theBody = innerDoc.body;
//    displaySection.appendChild(theBody);
//    document.querySelector("#tiny").removeChild(dummyIframe);
//    console.log(innerDoc.innerHTML);
//    }
    //
    var xhttp = new XMLHttpRequest();

    console.log("created the object");

    xhttp.open("GET", theUrl, true);
    xhttp.onreadystatechange = function () {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            var dummySection = document.createElement("section");
            displaySection.innerHTML = xhttp.responseText;
            console.log(xhttp.responseText);

        }
    }
    xhttp.send();
}
