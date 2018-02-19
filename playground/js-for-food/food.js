/* Input: ingredients that you have
         *  Process: find recipes that you can make
         *  Output: Recipes that you can make with what you have
         */

// Variables recipes
var numIngred = 3;
var jabamalaya = ['shrimp', 'spicey sausage', 'jambalaya season']
var haveIng ='';
var ingedCount = 0

function sortIngred(){

    var inputIngred = document.forms[0];
    var numFoods = countChecks(inputIngred);
    console.log(numFoods);
    var foods = new Array(numFoods);
    var shrimp = document.getElementById('shrimp');
    console.log(shrimp);
    var sSausage = document.getElementById('sSausage').value;
    var jambSeason = document.getElementById('jumbSeason').value;
    var ingred = [shrimp, sSausage, JambSeason];
    for(var i = 0; i < numIngred; i++){
        if(ingred[i]){

            haveIng[ingedCount] = ingred[i];
        }


    }

}

function decideDinner() {
    var ingredCChipCookies = ['flour', 'sugar', 'salt', 'baking-powder', 'chocolate-chips', 'crisco'];

}

function countChecks(ingredsList){
    var numFoods = 0;
    for(var i = 0; i < ingredsList.length; i++){
        if(ingredsList[i].checked){
            numFoods++;
        }
    }

    return numFoods;
}
