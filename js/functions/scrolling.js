import { selector } from "../index.js"

export const scrollBtn = () =>{
    let hidden = selector('.hidden');
    let btn = selector('button');
    let btnScroll = selector('.arrowUp');

    // detectamos la distacia del scroll
    window.addEventListener('scroll', () => {
        let scrollUP = document.documentElement.scrollTop;

        positionScrolling(scrollUP,btnScroll);
        (scrollUP > 450) ? hidden.classList.remove('hidden') : hidden.classList.add('hidden'); 
    });

    btn.addEventListener('click', () => {
        if(btn.matches('.arrowUp')){
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            })
        }    
    })
}


function positionScrolling(scroll, btn){
    if(scroll >= 4200){
        btn.style.backgroundColor = '#fefefe';
        btn.style.color = '#202020';

    }else{
        btn.style.backgroundColor = '#202020';
        btn.style.color = '#fefefe';

    }
}