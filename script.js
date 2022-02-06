"use strict";

// responsive nav bar
var burger = document.getElementById("burger");
var anchors = document.querySelectorAll(".nav-a");
var aHovers = document.querySelectorAll(".nav-a-hover");
var navLogo = document.querySelector(".nav-log");
var navLogoImg = document.querySelector(".nav-log-img");

burger.addEventListener("click", function(){
    for(var x of anchors){
    x.classList.toggle("block");
    console.log(x);
};
    this.classList.toggle("rotateZ");
    
    
})

for (var x of anchors){
    x.addEventListener("click", function(){
        // this.style.color = "red";
        for(var i = 0; i < anchors.length; i++){
            anchors[i].style.color = "#FFFFFF";
            anchors[i].style.fontWeight = "400";
            anchors[i].style.fontSize = "14";

        }
        this.style.color = "#E27866";
        this.style.fontWeight = "800";
        this.style.fontSize = "20";
    });
}



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
