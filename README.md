# Buscador de viajes turisticos ✈️ 
En este proyecto podemos realizar un busqueda de viajes turisticos a traves de selectores. La idea de este proyecto fue realizar una busqueda de los viajes disponibles de dicha "empresa turistica", al realizar una busqueda de un destino en particular se crea dinamicamente en elemento de tipo carta con los resultados de la busqueda. Solo se puede buscar un viaje a la vez. 

# Construido con 🛠️
Este proyecto se realizo con las siguientes herramientas:

- HTML5
- CSS3
- Bootstrap
- Grid
- Flex-box
- JavaScript
- Glider.js

# Funcionalidades ⚙️

## Navbar
El menu "hamburguesa" solo se activa cuando ralizamos un click en icon del borde inferior izquierdo, para desactivarlo solo se debe hacer click en la X del menu.

## Botones desactivados 
Esta funcion se encarga que al cargar la pagina los botones de buscar y reset queda deshabilitados hasta que se selccione algun input.

## Carrousel
Este carrousel esta implementado con la libreria glider.js, no es 100% responsivo por ende tome la opcion de ocultarlo al tener un tamaño mobile. 

## Base de datos
La base de datos de toda la informacion de los viajes disponibles esta implementada con javascript mediante un array de objectos. 

## Resultados de la busqueda
Los resultado de la busqueda se toma a aparir de la seleccion de un viaje en particular, este viaje se guarda en un objeto que al recorrer la "bases de datos" se debe coincidir el lugar de la busqueda con el lugar que se encuentra en la "bases datos" y asi retorna un elemento HTML creado dinamicamente con el resultado de la busqueda en concreto. 

## Spinner
El spinner esta creado con Bootstrap y se carga al darle click al boton buscar, una vez pasado los segundos correspondientes colocado al la funcion setTimeOut desaparece y devuelve los elementos de la busqueda

## Selectores desactivados
Lo ideal de esta funcionalidad es que solo se selecciones un elemento en particular por ende decidi implementar que solo podamos elegir un criterio en particular asi desactivando los demas inputs. 

## Boton scrollUP
Este boton aparece y desaparece cuando llega a un determinado pixel del eje Y de nuestras pantallas, con una animacion en particular, cambiando de color al llegar a determinado pixel tambien sobre el eje Y. Lo ideal de este boton es que nos retorne al principio de nuestra pagina.

## Validacion del email 
Para validar un mail use una expresion regular especifica, en donde si lo que estamos ingresando en nuestro input es igual a lo que viene en la expresion regular, en caso de ser igual el borde inferior se vuelve de color verde, en caso de estar vacio y no valor del input no se de tipo email retorna el mensaje de "Ingrese un Email" y el borde inferior en rojo.

# Posibles mejoras 🚀
- Aplicar un responsive desing mucho mejor
- Animacion a la cartas de cada viaje.
- Desactivar el boton de enviar e-mail si el email no es valido.
- Modal con infomacion detallada de cada viaje. 

# Despliegue 📦

# Contacto
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/leandroquiroga)
- [Email](mailto:leandroquiroga9514@gmail.com);

# Autor
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);
