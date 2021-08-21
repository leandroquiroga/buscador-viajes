import {dataPackInternational}  from "../database/dataInternational.js";
import {dataPackNational} from "../database/dataNational.js"
import {dataPackCrucero} from "../database/dataCrucero.js";
import {dataPackExotico} from "../database/dataExotico.js";

export const selected = (internacional, nacional, crusero, exotico, btnSeach, btnReset) => {    
    let value, packge;

    internacional.addEventListener('change', (e) => {
        value = e.target.value;
        packge = e.target.childNodes[1].textContent; // retorna el nombre del paquete
        deleteObject(dataPackNational);
        deleteObject(dataPackCrucero);
        deleteObject(dataPackExotico);
        disableSelector(value, 'Paquetes Internacional', nacional, crusero, exotico, dataPackInternational, packge, btnSeach, btnReset);
    })

    nacional.addEventListener('change', (e) =>{
        value = e.target.value;
        packge = e.target.childNodes[1].textContent; // retorna el nombre del paquete 
        deleteObject(dataPackInternational); 
        deleteObject(dataPackCrucero);
        deleteObject(dataPackExotico);
        disableSelector(value, 'Paquetes Nacionales', internacional, crusero, exotico, dataPackNational,packge, btnSeach, btnReset);
    })

    crusero.addEventListener('change', (e) =>{
        value = e.target.value;
        packge = e.target.childNodes[1].textContent;
        deleteObject(dataPackInternational);
        deleteObject(dataPackNational);
        deleteObject(dataPackExotico);
        disableSelector(value, 'Crucero', internacional, exotico, nacional, dataPackCrucero ,packge, btnSeach, btnReset);
    })
    
    exotico.addEventListener('change', (e) => {
        value = e.target.value;
        packge = e.target.childNodes[1].textContent;

        deleteObject(dataPackInternational);
        deleteObject(dataPackCrucero);
        deleteObject(dataPackNational);

        disableSelector(value, 'Exoticos', internacional, nacional, crusero, dataPackExotico, packge, btnSeach, btnReset);
    })
    
}
function deleteObject (obj){
    delete obj.categoria;
    delete obj.lugar;

    return obj
}

function disableSelector(value, text, selectOne, selectTwo, selectThree, data, pack, btnSeach, btnReset){
    btnReset.disabled = false;
    btnSeach.disabled = false;
    
    if(value === text){
        selectOne.disabled = false;
        selectTwo.disabled = false;
        selectThree.disabled = false;
    }else{
        selectOne.disabled = true;
        selectTwo.disabled = true;
        selectThree.disabled = true;
        data.lugar = value;
        data.categoria = pack;

        return data;
    }
}