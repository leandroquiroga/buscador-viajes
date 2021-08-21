import {createElement} from "../index.js";
import {selector} from "../index.js";
import {dataPackInternational} from "../database/dataInternational.js";
import {dataPackNational} from "../database/dataNational.js"
import {dataPackCrucero} from "../database/dataCrucero.js";
import {paquetes} from "../database/data.js"
import {dataPackExotico} from "../database/dataExotico.js";

export const searchCards = (search) => {
    if (dataPackInternational.categoria === 'Paquetes Internacionales'){
        checkClassList(search);
        return search;
    };
    
    if (dataPackNational.categoria === 'Paquetes Nacionales'){
        checkClassList(search);
        return search;
    };

    if(dataPackCrucero.categoria === 'Crucero'){
        checkClassListCrucero(search);
        return search;
    };

    if(dataPackExotico.categoria === 'Exoticos'){
        console.log(dataPackExotico.categoria)
        checkClassList(search);
        return search;
    }
}

function checkClassList(search){
    let showCard = selector('.searchCard');
    if(showCard.classList.contains('searchCard')){
        showCard.style.display = 'grid';
        filterPlace(search);
    }

}

function checkClassListCrucero(search){
    let showCard = selector('.searchCard');
    if(showCard.classList.contains('searchCard')){
        showCard.style.display = 'grid';
        filterPlace(search);
    }

}

function filterPlace(search){
    let objPaquetesInternational = paquetes.filter(filterLugarInternational);
    let objPaquetesNational = paquetes.filter(filterLugarNational);
    let objPaquetesCruecero = paquetes.filter(filterLugarCrucero);
    let objPaquetesExotico = paquetes.filter(filterLugarExotico);

    if(objPaquetesInternational){

        objPaquetesInternational.forEach( packge => {
            if(packge.lugar == 'Cancun') createCardResult(packge,search);
            if(packge.lugar == 'Brasil') createCardResult(packge,search);
            if(packge.lugar == 'Israel') createCardResult(packge,search);
            if(packge.lugar == 'Turquia') createCardResult(packge,search);
            if(packge.lugar == 'Francia') createCardResult(packge,search);
        });    
    }

    if(objPaquetesNational){

        objPaquetesNational.forEach( packge => {
            if(packge.lugar == 'Bariloche') createCardResult(packge,search);
            if(packge.lugar == 'Usuhaia') createCardResult(packge,search);
            if(packge.lugar == 'Mar del Plata') createCardResult(packge,search);
            if(packge.lugar == 'San Luis') createCardResult(packge,search);
            if(packge.lugar == 'Mendoza') createCardResult(packge,search);
            if(packge.lugar == 'Tucuman') createCardResult(packge,search);
        });
    }   
    if(objPaquetesCruecero){

        objPaquetesCruecero.forEach( packge => {
            if(packge.lugar == 'Caribe')createCardResultCrucero(packge,search);
            if(packge.lugar == 'Europa') createCardResultCrucero(packge,search);
            if(packge.lugar == 'Rio') createCardResultCrucero(packge,search);
        })
    }

    if(objPaquetesExotico){
        
        objPaquetesExotico.forEach( packge => {

            if(packge.lugar == 'Madagascar')createCardResult(packge,search);
            if(packge.lugar == 'Rusia')createCardResult(packge,search);
            if(packge.lugar == 'Tailandia')createCardResult(packge,search);
            if(packge.lugar == 'Emiratos Arabes')createCardResult(packge,search);
        })
    }

}

function filterLugarInternational(paquetes){
    const {lugar} = paquetes;

    if(dataPackInternational){
        return lugar === dataPackInternational.lugar
    }
     return paquetes; 
}

function filterLugarNational(paquetes){
    const {lugar} = paquetes;

    if(dataPackNational){
        return lugar === dataPackNational.lugar;
    }
    return paquetes; 
}

function filterLugarCrucero(paquetes){
    const {lugar} = paquetes;

    if(dataPackCrucero){
        return lugar === dataPackCrucero.lugar;
    }
    return paquetes; 
}

function filterLugarExotico(paquetes){
    const {lugar} = paquetes; 
    if(dataPackExotico){
        return lugar === dataPackExotico.lugar;
    }
    return paquetes
}


function createCardResult(pack, search){

    let div = createElement("div");
    let card = createElement("div");
    let cardBody = createElement("div");
    let img = createElement("img");
    let h5 = createElement("h5");
    let p = createElement("p");
    let smallOne = createElement("small");
    let smallTwo = createElement("small");
    let smallThree = createElement("small");
    let a = createElement("a");
    
    // const {image, lugar, hotel, cantEstrellas, estacion, precio } = pack


    // img (hijo)
    img.src = `${pack.image}`;
    img.classList.add('img')
    card.classList.add('card');
    card.style = 'width: 18rem';
    card.insertBefore(img, card.childNodes[0]);

    // card (hijo)
    cardBody.classList.add('card-body','row');
    h5.classList.add('card-title');
    h5.textContent = `${pack.lugar}`
    cardBody.insertBefore(h5, cardBody.childNodes[0]);

    // elemntos (ñietos de cards)
    p.classList.add('card-text');
    p.textContent =` ${pack.hotel}`
    cardBody.insertBefore(p, cardBody.childNodes[1]);

    smallOne.classList.add('description');
    smallOne.textContent =` ${pack.cantEstrellas} Estrellas`
    cardBody.insertBefore(smallOne, cardBody.childNodes[2]);

    smallTwo.classList.add('disponibilidad');
    smallTwo.textContent =` ${pack.estacion}`
    cardBody.insertBefore(smallTwo, cardBody.childNodes[3]);

    smallThree.classList.add('precio');
    smallThree.textContent =` $${pack.precio}`
    cardBody.insertBefore(smallThree, cardBody.childNodes[4]);

    a.classList.add('btn', 'btn-dark', 'my-2', 'mx-0');
    a.href = '#';
    a.textContent = 'Ver mas';
    cardBody.insertBefore(a, cardBody.childNodes[5])


    card.appendChild(cardBody);
    div.appendChild(card);
    div.classList.add('cards');
    search.appendChild(div);

    return search

}

function createCardResultCrucero(pack, search){
    console.log("Golaa");
    let div = createElement("div");
    let card = createElement("div");
    let cardBody = createElement("div");
    let img = createElement("img");
    let h5 = createElement("h5");
    let p = createElement("p");
    let smallOne = createElement("small");
    let smallOne_a = createElement("small")
    let smallOne_b = createElement("small")
    let smallTwo = createElement("small");
    let smallTwo_a = createElement("small")
    let smallTwo_b = createElement("small")
    let smallThree = createElement("small");
    let smallThree_a = createElement("small")
    let smallThree_b = createElement("small")
    let a = createElement("a");

    img.src = `${pack.image}`;
    img.classList.add('img')
    card.classList.add('card');
    card.style = 'width: 18rem';
    card.insertBefore(img, card.childNodes[0]);

    // card (hijo)
    cardBody.classList.add('card-body','row');
    h5.classList.add('card-title');
    h5.textContent = `${pack.lugar}`
    cardBody.insertBefore(h5, cardBody.childNodes[0]);

    // elementos hijos
    p.classList.add('card-text');
    p.textContent =` ${pack.crucero}`
    cardBody.insertBefore(p, cardBody.childNodes[1]);
    
    // inserta el primer smmall
    smallOne.classList.add('camarotes');
    smallOne.textContent = 'Camarotes';
    cardBody.insertBefore(smallOne, cardBody.childNodes[2]);

    // inserta el primer small de habitaciones
    smallOne_a.classList.add('habitaciones');
    smallOne_a.textContent = `Exterior`;
    cardBody.insertBefore(smallOne_a, cardBody.childNodes[3]);

    // inserta el primer small de precio de las habitaciones
    smallOne_b.classList.add('precio');
    smallOne_b.textContent = ` $${pack.camarotePrice[0].exterior}`;
    smallOne_a.insertBefore(smallOne_b, smallOne_a.childNodes[1]);

    // inserta el segundo small de habitaciones
    smallTwo_a.classList.add('habitaciones');
    smallTwo_a.textContent = `Balcon`;
    cardBody.insertBefore(smallTwo_a, cardBody.childNodes[4]);

    // inserta el segundo small de precio de las habitaciones
    smallTwo_b.classList.add('precio');
    smallTwo_b.textContent = ` $${pack.camarotePrice[0].balcon}`;
    smallTwo_a.insertBefore(smallTwo_b, smallTwo_a.childNodes[1]);
    
    // inserta el segundo small de habitaciones
    smallThree_a.classList.add('habitaciones');
    smallThree_a.textContent = `Exterior`;
    cardBody.insertBefore(smallThree_a, cardBody.childNodes[5]);

    // inserta el tercer small de precio de las habitaciones
    smallThree_b.classList.add('precio');
    smallThree_b.textContent = ` $${pack.camarotePrice[0].suite}`;
    smallThree_a.insertBefore(smallThree_b, smallThree_a.childNodes[1]);


    a.classList.add('btn', 'btn-dark', 'my-2', 'mx-0');
    a.href = '#';
    a.textContent = 'Ver mas';
    cardBody.insertBefore(a, cardBody.childNodes[7])


    card.appendChild(cardBody);
    div.appendChild(card);
    div.classList.add('cards');
    search.appendChild(div);
}