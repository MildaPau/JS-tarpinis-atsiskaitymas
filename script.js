"use strict";

// responsive nav bar
var burger = document.getElementById("burger");
var anchors = document.querySelectorAll(".nav-a");


burger.addEventListener("click", function(){
    for(var x of anchors){
    x.classList.toggle("block");
    console.log(x);
};
    this.classList.toggle("rotateZ");
})



// for (var x of anchors){
//     x.addEventListener("click", function(){
//         // this.style.color = "red";
//         for(var i = 0; i < anchors.length; i++){
//             anchors[i].style.color = "white";
//         }
//         this.style.color = "red";
//     });
// }





// tabs
function changeContent(index, id){
    document.querySelector(".gellary").style.paddingLeft = "0";
    var articles = document.querySelectorAll('.articles');
    
    var tabs = document.querySelectorAll('.square-img');
    var element = document.getElementById(id);
    
    for (let i = 0; i < articles.length; i++){
        articles[i].style.display = "none";
        tabs[i].style.backgroundColor = "#A37169";
    }

    element.style.display = "block";
    element.style.opacity = "1";
    tabs[index].style.backgroundColor = "#E27866";


}

    // var article = document.getElementById('#pirmas');
    // var sections = document.querySelectorAll("section");
    // var buttons = document.querySelectorAll("button");


    // for (let i = 0; i < articles.length; i++){
    //     articles[i].classList.remove("display");
    //     // pClick[i].classList.remove("active");
    // }


    // var element = document.getElementById(id);
    // element.classList.add("display");
    // buttons[index].classList.add("active");

    // setTimeout(function(){
    //     sections[index].style.opacity = 0.5;
    // }, 100);
    // setTimeout(function(){
    //     sections[index].style.opacity = 1;
    // }, 200);

