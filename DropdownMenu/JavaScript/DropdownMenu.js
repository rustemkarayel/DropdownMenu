function showHideSubMenu(subMenu){
var subMenu=document.getElementsByClassName(subMenu)[0];
subMenu.style.display=="block"? subMenu.style.display="none" : subMenu.style.display="block";
var icon=document.getElementsByClassName("icon")[1];
subMenu.style.display=="block"? icon.style.transform="rotate(180deg)":icon.style.transform="rotate(0deg)";
}

function slider(index){
    var slider=document.getElementsByClassName("slider")[0];
    var item=document.getElementsByClassName("item")[index];
    slider.style.top=item.offsetTop+"px"; 
    slider.style.transition=".5s";
}

function clickItem(index){
    var item=document.getElementsByClassName("item")[index];
    var text=document.getElementsByClassName("text")[0];
    text.innerHTML=item.innerHTML;
    showHideSubMenu("dropdown-content");
    var icon=document.getElementsByClassName("icon")[0];
    if(item.innerHTML=="LinkedIn"){
        icon.innerHTML="<i class='fa-brands fa-linkedin'>";
    }
    else if(item.innerHTML=="Youtube"){
        icon.innerHTML="<i class='fa-brands fa-youtube'>";
    }
    else if(item.innerHTML=="Instagram"){
        icon.innerHTML="<i class='fa-brands fa-instagram'></i>";
    }
    else if(item.innerHTML=="Twitter"){
        icon.innerHTML="<i class='fa-brands fa-twitter'></i>";
    }
    else if(item.innerHTML=="WhatsApp"){
        icon.innerHTML="<i class='fa-brands fa-whatsapp'></i>";
    }
    else if(item.innerHTML=="Facebook"){
        icon.innerHTML="<i class='fa-brands fa-facebook'></i>";
    }
}

function sliderHide(){
    var slider=document.getElementsByClassName("slider")[0];
    slider.style.opacity="0";
}

function sliderShow(){
    var slider=document.getElementsByClassName("slider")[0];
    slider.style.opacity="1";
}
