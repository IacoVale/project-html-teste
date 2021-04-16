var isOpen = false;
document.getElementById("ephome").addEventListener("click",function(){
    var submenu = document.querySelectorAll(".ep");
    console.log(submenu);
    if(isOpen == true){
        submenu.forEach(function(element){
            element.style = "opacity: 0;";
        });
        isOpen = false;
    } else { 
        submenu.forEach(function(element){
            element.style = "opacity: 1;";
        });
        isOpen = true;
    }
});