import {selector} from "../index.js";

export default function showMenu(){
    let menu = selector('.nav-rigth');    
    
    if(menu.classList.contains('bg-dark')){
        menu.style.display = 'block';
        menu.style.transform = 'translateX(0px)'
    }else{
        menu.style.transform = 'translateX(-9000px)'
        menu.style.display = 'none';
    } 
        
}
