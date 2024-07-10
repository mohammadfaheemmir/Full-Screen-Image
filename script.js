var element=document.getElementById('imgscreen');
function fullscreen(){
    if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen();
    }
}