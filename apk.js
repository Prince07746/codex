window.onload = function(){
var canvas = document.getElementById('canvas');
var logoMenu = canvas.getContext("2d");

logoMenu.fillStyle = 'red';
logoMenu.fillRect(20,20,180,80);  

logoMenu.fillStyle = 'orange';
logoMenu.fillRect(100,60,180,80);

logoMenu.clearRect(20,20,80,40);
logoMenu.clearRect(200,100,80,40);
 var firstAskRegister = setTimeout(function(){

    document.getElementById("login-preemptive").style.display = 'block';
 },5000);
  
var secondAskRegister = setTimeout(function(){
    
    document.getElementById("login-preemptive").style.display = 'none';
},15000)
// button of the menu

}
function hide(){
    var x = document.getElementById('list-menu');
    var y = document.getElementById('head-list');
    if(x.className == "list-menu"){
        x.className = "dispapear";
        y.style.display = "none";
    }
    else if(x.className == "dispapear"){
        x.className = "list-menu";
        y.style.display = "inline";
    }
}

function srch(){
    document.getElementById('input-search').value = "";
}
function cross(){
    document.getElementById("login-preemptive").style.display = 'none';
}