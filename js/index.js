import showMenu from './functions/openMenu.js';
import closeMenu from './functions/closeMenu.js';
import {searchCards} from './functions/packSearch.js';
import { selected } from './functions/valueSelect.js';
import { validarEmail } from './functions/validatorEmail.js';
import { spinners } from './functions/sppiner.js';
import { scrollBtn } from './functions/scrolling.js';

export const selector  = (selec) => document.querySelector(selec);
export const createElement = (element) => document.createElement(element);
export const selectorAll  = (selecAll) => document.querySelectorAll(selecAll);

const init = () =>{
    let $openMenu = selector('#open-menu');
    let $closeMenu = selector('#close-menu');
    let $search = selector('#research');
    let $btnSearch = selector('#buscar');
    let $internacitional = selector('#packgeInternacional');
    let $national = selector('#packgeNacional')
    let $cruise = selector('#packgeCruise')
    let $exoctic = selector('#packExotic');
    let $btnReset = selector('#reset');
    let $form = selector('form');
    let $spinner = selector('.spinner');

    document.addEventListener('DOMContentLoaded', () => {    
        $btnReset.disabled = 'true';
        $btnSearch.disabled = 'true';
        $openMenu.addEventListener('click', showMenu);
        $closeMenu.addEventListener('click', closeMenu);
        scrollBtn();
        selected($internacitional,$national,$cruise,$exoctic, $btnSearch, $btnReset);
        $btnSearch.addEventListener('click', (e) => {
            e.preventDefault();
            spinners($spinner, 'flex', 'visible', 1);
            setTimeout(() =>{
                spinners($spinner, 'none', 'hidden', 0);
                searchCards($search);
            },3000)
        });
        $btnReset.addEventListener('click', () => {
            spinners($spinner, 'none', 'hidden', 0);
            if($search.classList.contains('searchCard')){ //modular 
                $form.children[0].disabled = false;
                $form.children[1].disabled = false;
                $form.children[2].disabled = false;
                $form.children[3].disabled = false;

                if(!$search !== null){
                    while($search.firstChild){
                        $search.removeChild($search.firstChild);
                    };
                    $search.style.display = 'none';
                };
            };
        });
        validarEmail();
    });
}
// inicio de app
init();