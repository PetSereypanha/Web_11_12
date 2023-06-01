var current = location.pathname.split('/')[2];
var menuItms = document.querySelectorAll('.menu a');
for(var i=0; i < menuItms.length; i++){
    if(menuItms[i].getAttribute("href").indexOf(current) !== -1){
        menuItms[i].className += "active";
    }
}