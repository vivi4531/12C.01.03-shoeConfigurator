"use strict"; 

//Global variable 
window.addEventListener("DOMContentLoaded", start); 
console.log("hallo"); 

let elementToPaint; 

async function start(){
    let response = await fetch("12C.01.03-shoeConfigurator-1-01.svg"); 
    let mySvgData = await response.text(); 
    document.querySelector(".SVGContainer").innerHTML = mySvgData; 
    startManipulatingTheSvg();  
}

function startManipulatingTheSvg(){
    document.querySelectorAll(".g_to_interact_with").forEach(eachG => {
        console.log(eachG); 

        eachG.addEventListener("click", theClick); 
        eachG.addEventListener("mouseover", theMouseover); 
        eachG.addEventListener("mouseout", theMouseout); 
    }
    ); 
    
    document.querySelectorAll(".color_btn").forEach(each_btn => {
        each_btn.addEventListener("click", colorClick); 
    }); 
    
}

function theClick(){
    elementToPaint = this; 
    this.style.fill = "grey"; 
}

function theMouseover(){
    console.log(this); 
    this.style.stroke = "blue";
}

function theMouseout(){
    console.log(this); 
    this.style.stroke = "none";
}

function colorClick(){
    console.log("KLIK", this.getAttribute("fill")); 
    if(elementToPaint != undefined){
        elementToPaint.style.fill = this.getAttribute("fill"); 
    }
}


