

document.querySelectorAll("button")[0].addEventListener("click",function(){
var p=document.querySelector("h1").innerHTML;
var q=parseInt(p);
document.querySelector("h1").innerHTML=q-1;
document.querySelector("h1").style.color="red"; 



});

document.querySelectorAll("button")[1].addEventListener("click",function(){
    var p=document.querySelector("h1").innerHTML="0";
    document.querySelector("h1").style.color="rgb(35, 75, 87)"; 
    });


    document.querySelectorAll("button")[2].addEventListener("click",function(){
        var p=document.querySelector("h1").innerHTML;
        var q=parseInt(p);
        document.querySelector("h1").innerHTML=q+1;

        document.querySelector("h1").style.color="green";        
    });        