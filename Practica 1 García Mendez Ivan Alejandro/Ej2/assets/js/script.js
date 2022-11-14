function funcion1(){
    var x = document.getElementById("xcosa");
    if(x.className == "nav"){
        x.className += " responsive";
    }else{
        x.className = "nav";
    }
}