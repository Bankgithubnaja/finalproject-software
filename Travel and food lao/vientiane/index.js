let btn = document.getElementById("btn")

function backtotop(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        btn.style.display = "block"
    }
    else{
        btn.style.display = "none"
    }
}
window.onscroll = function(){
    backtotop()
}
function scrolltop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}