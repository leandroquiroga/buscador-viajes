import {selector} from "../index.js";

export default function closeMenu(){
    let menu = selector('.bg-dark');

    if(menu.style.transform == 'translateX(0px)'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block'
    }
}