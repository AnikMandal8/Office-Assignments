function trial() {
    console.log("hello")
}
function modeChange(val) {
    console.log("jkhjfhs", val)
    if (val == "night") {
        document.querySelector("body").style.backgroundColor = '#141414';
        document.querySelector(".html_info").style.color = "white";
        document.querySelector(".css_info").style.color = "white";
        document.querySelector(".js_info").style.color = "white";
        document.querySelector(".react_info").style.color = "white";
        document.querySelector("#nightmode").style.display = "none";
        document.querySelector("#daymode").style.display = "inline";
    }
    else {
        document.querySelector("body").style.backgroundColor = 'white';
        document.querySelector(".html_info").style.color = "black";
        document.querySelector(".css_info").style.color = "black";
        document.querySelector(".js_info").style.color = "black";
        document.querySelector(".react_info").style.color = "black";
        document.querySelector("#nightmode").style.display = "inline";
        document.querySelector("#daymode").style.display = "none";
    }
}
let toggle=false;
function openSidenav(){
    toggle=!toggle;
    if(toggle){
    document.querySelector(".sidenav").style.display="inline";
    }
    else{
        document.querySelector(".sidenav").style.display="none";

    }
}