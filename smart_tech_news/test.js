function findSq() {

    var s1 = document.querySelector("#s1");
    var s2 = document.querySelector("#s2");

    var v1 = s1.getBoundingClientRect();
    var v2 = s2.getBoundingClientRect();

    console.log(v2.top);
    console.log(v2.left);

    s1.style.left = v2.left + "px";

    s1.style.left = "10px";

    var v3 = s1.getBoundingClientRect();
    console.log(v3.left);
}
